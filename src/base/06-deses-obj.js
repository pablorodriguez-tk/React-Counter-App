// Desestructuracion
// Asignacion desestructurante

const persona = {
  nombre: "Tony",
  edad: 45,
  clave: "Ironman",
};

// const { nombre, edad, clave } = persona;

// console.log(persona.nombre);
// console.log(persona.edad);
// console.log(persona.clave);

// console.log(nombre);
// console.log(edad);
// console.log(clave);

const usarContext = ({ clave, nombre, edad, rango = "Capitan" }) => {
  // console.log(nombre, edad, rango);
  return {
    nombreClave: clave,
    anios: edad,
    latlng: {
      lat: 14.3,
      lng: 13.2,
    },
  };
};
const { nombreClave, anios, latlng } = usarContext(persona);
const { lat, lng } = latlng;
console.log(nombreClave, anios);
console.log(lat, lng);
