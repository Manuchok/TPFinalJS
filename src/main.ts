import { Coche } from "./Vehiculo/Coche.js";
import { Moto } from "./Vehiculo/Moto.js";
import { Vehiculo } from "./Vehiculo/Vehiculo.js";

const coches = new Coche("Ford","Focus",200,5);
const motos = new Moto("Yamaha","R1",320,"Curvo");
const vehiculos: Vehiculo[] = [coches,motos];

function procesoVehiculos (vehiculos: Vehiculo[]): void {
  for (const vehiculo of vehiculos) {
      vehiculo.acelerar(vehiculo.velocidadMaxima);
      vehiculo.frenar("freno");
  }
}

procesoVehiculos(vehiculos);