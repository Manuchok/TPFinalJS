import { Vehiculo } from "./Vehiculo";
export class Moto extends Vehiculo {
    constructor(marca, modelo, velocidadMaxima, manillar) {
        super(marca, modelo, velocidadMaxima);
        this._manillar = manillar;
    }
    acelerar(velocidad) {
        this.velocidadMaxima += velocidad;
        console.log(`Moto ${this.marca} ${this.modelo} acelerando a ${this.velocidadMaxima} km/h`);
    }
    frenar(stop) {
        this.velocidadMaxima = 0;
        console.log(`Moto ${this.marca} ${this.modelo} está frenada`);
    }
}
