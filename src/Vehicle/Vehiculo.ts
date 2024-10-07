import { IVehiculo } from "../Interface/IVehiculo";

export class Vehiculo implements IVehiculo {
	protected _marca: string;
	protected _modelo: string;
	protected _velocidadMaxima: number;

	constructor(marca: string, modelo: string, velocidadMaxima: number) {
		this._marca = marca;
		this._modelo = modelo;
		this._velocidadMaxima = 0;
	}
			
	public get marca(): string {
		return this._marca;
	}

	public set marca(nuevaMarca: string) {
		this._marca = nuevaMarca;
	}

	public get modelo(): string {
		return this._modelo;
	}

	public set modelo(nuevoModelo: string) {
		this._modelo = nuevoModelo;
	}

	public get velocidadMaxima(): number {
		return this._velocidadMaxima;
	}

	public set velocidadMaxima(nuevaVelocidadMaxima: number) {
		this._velocidadMaxima = nuevaVelocidadMaxima;
	}

	acelerar(velocidad: number): void {
		throw new Error("Method not implemented.");
	}
	frenar(stop: string): void {
		throw new Error("Method not implemented.");
	}
}