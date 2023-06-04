export class Persona {
    cedula: string;
    nombre: string;
    apellido: string;
    asignatura: string;
    nota1: number;
    nota2: number;
    promedio: number;
    estado: string;

    
    constructor(cedula: string, nombre: string, apellido: string, asignatura: string, nota1: number, nota2: number, promedio: number, estado: string) {
        this.cedula = cedula;
        this.nombre = nombre;
        this.apellido = apellido;
        this.asignatura = asignatura;
        this.nota1 = nota1;
        this.nota2 = nota2;
        this.promedio = promedio;
        this.estado = estado;

    }
}