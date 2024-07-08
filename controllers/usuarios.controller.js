import { pool } from "../database/connectionMySql.js"
import bcrypt from 'bcryptjs'
import jwt from 'jsonwebtoken'

export default class UsuarioController {

    create = async (req, res) => {
        const { nombres, email, password, domicilio, codigoPostal } = req.body

        try {
            const [exists] = await pool.query('select 1 from usuarios where correoElectronico_US = ?', [email])
            if (exists.length > 0) {
                return res.status(400).json({ mensaje: 'Usuario ya registrado.' })
            }

            const hashedPassword = await bcrypt.hash(password, 10)
            const [result] = await pool.query('insert into usuarios (nombreUsuario_US, correoElectronico_US, contrasena_US, domicilio_US, codigoPostal) values(?, ?, ?, ?, ?);',
                [nombres, email, hashedPassword, domicilio, codigoPostal])

            if (result.affectedRows > 0) res.status(200).json({ mensaje: 'Usuario registrado con éxito.' })
            else res.status(404).json({ mensaje: 'Error al intentar registrar el usuario, reintente mas tarde.' })
        } catch (error) {
            console.error(error)
            res.status(500).json({ mensaje: 'Error al intentar registrar el usuario, reintente mas tarde.' })
        }
    }

    login = async (req, res) => {
        const { email, password } = req.body
        try {
            const [result] = await pool.query('select nombreUsuario_US, contrasena_US, isAdmin, correoElectronico_US from usuarios where correoElectronico_US = ?', [email])
            if (result.length === 0) {
                return res.status(400).json({ mensaje: 'Usuario o contraseña incorrectos.' })
            }

            const user = result[0]
            const isPasswordValid = await bcrypt.compare(password, user['contrasena_US'])
            if (!isPasswordValid) {
                return res.status(400).json({ mensaje: 'Usuario o contraseña incorrectos.' })
            }

            const token = jwt.sign({
                nombres: user.nombreUsuario_US,
                domicilio: user.domicilio_US,
                cp: user.codigoPostal,
                email: user.correoElectronico_US,
                admin: user.isAdmin},
                process.env.KEY_JWT,
                { 
                    expiresIn: '1h' 
                })
            
            //res.cookie('token', token, { httpOnly: true, secure: process.env.COOKIE_HTTPS, sameSite: 'Strict', maxAge: 1000 * 60 * 60 })
            //res.cookie('access_token', token, {httpOnly: true, sameSite: 'Lax', secure: true})

            console.log('Dominio del request:', req.hostname);  // Para el nombre del host
            console.log('Dominio del request:', req.headers.host);  // O a través de los headers
          
            res.cookie('access_token', token, {
                httpOnly: true,
                sameSite: 'Lax',
                secure: true,
                maxAge: 1000 * 60 * 60,
                domain: 'petshop.alwaysdata.net'
            })

            console.log('Cookie configurada:', res.get('Set-Cookie')); 

            res.status(200).json({ 
                mensaje: 'Sesion iniciada.' 
            })
        } catch (error) {
            console.error(error)
            res.status(500).json({ mensaje: 'Usuario o contraseña incorrectos.' })
        }
    }

    logout = async (req, res) => {
        res.clearCookie('access_token')
        res.status(200).json({ mensaje: 'Sesion cerrada.' })
    }

    getUserData = async (req, res) => {
        const { user } = req
        if (!user) res.sendStatus(403).json({ mensaje: 'Acceso no autorizado.' })
        res.status(200).json(user)
    }
}