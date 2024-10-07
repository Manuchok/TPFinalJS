import { Vehiculo } from "./Vehiculo";
import { IVehiculo } from "../Interface/IVehiculo";

export class Coche extends Vehiculo implements IVehiculo {
    private _puertas: number;

    constructor(marca: string, modelo: string, velocidadMaxima: number, puertas: number){
        super(marca,modelo,velocidadMaxima);
        this._puertas = puertas;
    }
    
    acelerar (velocidad: number): void {
        this.velocidadMaxima += velocidad;
        console.log(`Coche ${this.marca} ${this.modelo} acelerando a ${this.velocidadMaxima} km/h`);        
    }

    frenar (stop: string): void {
        this.velocidadMaxima = 0;
        console.log(`Coche ${this.marca} ${this.modelo} está frenado`)
    }
}
