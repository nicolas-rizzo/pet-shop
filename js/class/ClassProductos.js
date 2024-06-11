class Productos{

    constructor(id,url,descripcion,precio,activo=true){
        this.id=id;
        this.urlImagen=url;
        this.descripcion=descripcion;
        this.precio=precio;
        this.activo=activo;
    }
    
}

export default Productos;