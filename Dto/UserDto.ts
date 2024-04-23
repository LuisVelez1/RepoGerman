class User {
    email: string;
    password: string
    nombres: string;
    apellidos: string;
    telefono: string;
    TipoVehiculo: string;
    
    constructor(
        email: string, 
        password: string,
        nombres: string,
        apellidos: string, 
        telefono: string,
        TipoVehiculo: string
    ) {
        this.email = email;
        this.password = password;
        this.nombres = nombres;
        this.apellidos = apellidos;
        this.telefono = telefono;
        this.TipoVehiculo = TipoVehiculo;
    }
}

export default User;