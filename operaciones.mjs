import fs from "fs";
import crypto from "crypto";

const registrar = (nombreAnimal, edad, tipoAnimal, colorAnimal, enfermedad) => {
  try {
    const date = fs.readFileSync("citas.json", "utf-8");
    const citas = JSON.parse(date);
    const id = crypto.randomUUID(); // Generar un ID único
    if (!nombreAnimal || !edad || !tipoAnimal || !colorAnimal || !enfermedad) {
      console.log("Faltan datos, no se puede registrar la cita");
      return;
    }
    citas.push({
      id,
      nombreAnimal,
      edad,
      tipoAnimal,
      colorAnimal,
      enfermedad,
    });
    fs.writeFileSync("citas.json", JSON.stringify(citas));
    console.log("Cita registrada");
  } catch (error) {
    console.log("Error al registrar la cita");
  }
};

const leer = () => {
  try {
    const date = fs.readFileSync("citas.json", "utf-8");
    const citas = JSON.parse(date);
    console.log(citas);
  } catch (error) {
    console.log("Error al leer las citas");
  }
};

export { registrar, leer };
