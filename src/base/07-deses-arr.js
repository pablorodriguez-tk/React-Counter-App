export const retornaArreglo = () => {
  return ["ABC", 123];
};

// const [letras, numeros] = retornaArreglo();

// Tarea
// 1 el primer valor del arr se llamara nombre
// 2 el 2 se llamara setNombre
const usaState = (valor) => {
  return [
    valor,
    () => {
      console.log("Hola Mundo");
    },
  ];
};
