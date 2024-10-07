import { IVehiculo } from "./Interface/IVehiculo.js";
import { Coche } from "./Vehicle/Coche.js";
import { Moto } from "./Vehicle/Moto.js";
import { Vehiculo } from "./Vehicle/Vehiculo.js";

const coches = new Coche("Ford","Focus",200,5);
const motos = new Moto("Yamaha","R1",320,"Curvo");
const vehiculos: Vehiculo[] = [coches,motos];

function acelerarVehiculos(vehiculos: IVehiculo[]) {
    vehiculos.forEach((vehiculo) => {
      vehiculo.acelerar(10);
    });
}

acelerarVehiculos(vehiculos);