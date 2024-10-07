import { Vehiculo } from "./Vehiculo";
import { IVehiculo } from "../Interfaz/IVehiculo";

export class Moto extends Vehiculo implements IVehiculo{
    private _manillar: string;

    constructor(marca: string, modelo: string, velocidadMaxima: number, manillar: string){
        super(marca,modelo,velocidadMaxima);
        this._manillar = manillar;
    } 
    acelerar (velocidad: number): void {
        this.velocidadMaxima += velocidad;
        console.log(`Moto ${this.marca} ${this.modelo} acelerando a ${this.velocidadMaxima} km/h`);        
    }

    frenar (stop: string): void {
        this.velocidadMaxima = 0;
        console.log(`Moto ${this.marca} ${this.modelo} está frenada`)
    }
}