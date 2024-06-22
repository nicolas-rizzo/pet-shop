import { pool } from "../database/connectionMySql.js"
import bcrypt from 'bcryptjs'
import jwt from 'jsonwebtoken'
import cookieParser from 'cookie-parser'

export default class UsuarioController {

    create = async(req, res)=>{
        const { nombres, email, password, domicilio, codigoPostal } = req.body

        try {
            const [exists] = await pool.query('select 1 from usuarios where correoElectronico_US = ?', [email])
            if (exists.length > 0) {
                return res.status(400).json({ message: 'Usuario ya registrado.' })
            }

            const hashedPassword = await bcrypt.hash(password, 10)
            const [result] = await pool.query('insert into usuarios (nombreUsuario_US, correoElectronico_US, contraseña_US, domicilio_US, codigoPostal) values(?, ?, ?, ?, ?);',
                                            [nombres, email, hashedPassword, domicilio, codigoPostal])

            if (result.affectedRows > 0) res.status(200).json({ mensaje: 'Usuario registrado con éxito.'})
            else res.status(404).json({ mensaje: 'Error al intentar registrar el usuario, reintente mas tarde.'})
        } catch (error) {
            console.error(error)
            res.status(500).json({ mensaje: 'Error al intentar registrar el usuario, reintente mas tarde.'})
        }
    }

    login = async(req, res) => {
        const { email, password } = req.body

        try {
            const [result] = await pool.query('select contraseña_US from usuarios where correoElectronico_US = ?', [email])
            if (result.length === 0) {
                return res.status(400).json({ mensaje: 'Usuario o contraseña incorrectos.' })
            }

            const user = result[0]
            const isPasswordValid = await bcrypt.compare(password, user['contraseña_US'])
            if (!isPasswordValid) {
                return res.status(400).json({ mensaje: 'Usuario o contraseña incorrectos.' })
            }

            const token = jwt.sign({ email }, process.env.KEY_JWT, { expiresIn: '1h' })
            res.cookie('token', token, { httpOnly: true, secure: true })
            res.status(200).json({ mensaje: 'Sesion iniciada ' })
        } catch (error) {
            console.error(error)
            res.status(500).json({ mensaje: 'Usuario o contraseña incorrectos.' })
        }
    }

    logout = async(req, res) => {
        res.clearCookie('token')
        res.status(200).json({ mensaje: 'Sesion cerrada.' })
    }

    getUserData = async(req, res) => {
        const { email } = req.params
     
        console.log(email)

        try {
            const [user] = await pool.query('select nombreUsuario_US, domicilio_US, codigoPostal from usuarios where correoElectronico_US = ?', [email])
            if (user.length === 0) {
                return res.status(400).json({ message: 'Error al obtener los datos del usuario.' })
            }

            res.status(200).json({
                nombres: u.nombreUsuario_US,
                domicilio: u.domicilio_US,
                cp: u.codigoPostal,
                email: email
              });
        } catch (error) {
            console.error(error)
            res.status(500).json({ mensaje: 'Error al intentar recuperar los datos del usuario, reintente mas tarde.'})
        }
    }
}