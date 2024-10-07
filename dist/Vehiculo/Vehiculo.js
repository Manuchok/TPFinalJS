export class Vehiculo {
    constructor(marca, modelo, velocidadMaxima) {
        this._marca = marca;
        this._modelo = modelo;
        this._velocidadMaxima = 0;
    }
    get marca() {
        return this._marca;
    }
    set marca(nuevaMarca) {
        this._marca = nuevaMarca;
    }
    get modelo() {
        return this._modelo;
    }
    set modelo(nuevoModelo) {
        this._modelo = nuevoModelo;
    }
    get velocidadMaxima() {
        return this._velocidadMaxima;
    }
    set velocidadMaxima(nuevaVelocidadMaxima) {
        this._velocidadMaxima = nuevaVelocidadMaxima;
    }
    acelerar(velocidad) {
        throw new Error("Method not implemented.");
    }
    frenar(stop) {
        throw new Error("Method not implemented.");
    }
}
