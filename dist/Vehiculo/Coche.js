import { Vehiculo } from "./Vehiculo";
export class Coche extends Vehiculo {
    constructor(marca, modelo, velocidadMaxima, puertas) {
        super(marca, modelo, velocidadMaxima);
        this._puertas = puertas;
    }
    acelerar(velocidad) {
        this.velocidadMaxima += velocidad;
        console.log(`Coche ${this.marca} ${this.modelo} acelerando a ${this.velocidadMaxima} km/h`);
    }
    frenar(stop) {
        this.velocidadMaxima = 0;
        console.log(`Coche ${this.marca} ${this.modelo} está frenado`);
    }
}
