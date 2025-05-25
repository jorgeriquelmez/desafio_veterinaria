import { registrar, leer } from "./operaciones.mjs";

const [operacion, nombreAnimal, edad, tipoAnimal, colorAnimal, enfermedad] =
  process.argv.slice(2);

if (operacion === "registrar") {
  registrar(nombreAnimal, edad, tipoAnimal, colorAnimal, enfermedad);
}
if (operacion === "leer") {
  leer();
}
