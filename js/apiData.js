export default class ApiData {
    
    static RUTA_BASE = "http://localhost:8008";

    static async getTodosLosProductos(){
        const res = await fetch(`${this.RUTA_BASE}/productos`)
        const data = await res.json();
        return data;
    }

    static async getProductosPorAnimal(idAnimal){
        const res = await fetch(`${this.RUTA_BASE}/productos/animal/${idAnimal}`)
        const data = await res.json();
        return data;
    }

    static async getTodosLosAnimales(){
        const res = await fetch(`${this.RUTA_BASE}/animales`);
        const data = await res.json();
        return data;
    }

    static async getProductosRandom(){
        const res = await fetch(`${this.RUTA_BASE}/productos/random`);
        const data = await res.json()
        return data;
    }

    static async getProductoPorId(idProducto){
        const res = await fetch(`${this.RUTA_BASE}/productos/${idProducto}`);
        const data = await res.json()
        return data;
    }

}