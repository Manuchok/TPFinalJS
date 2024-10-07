import { Coche } from "./Vehicle/Coche.js";
import { Moto } from "./Vehicle/Moto.js";
const coches = new Coche("Ford", "Focus", 200, 5);
const motos = new Moto("Yamaha", "R1", 320, "Curvo");
const vehiculos = [coches, motos];
function acelerarVehiculos(vehiculos) {
    vehiculos.forEach((vehiculo) => {
        vehiculo.acelerar(10);
    });
}
acelerarVehiculos(vehiculos);
