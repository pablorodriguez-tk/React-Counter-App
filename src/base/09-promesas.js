import { getHeroeById } from "./08-impo-exp";

const getHeroeByIdAsync = (id) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const p1 = getHeroeById(id);
      if (p1) {
        resolve(p1);
      }
      reject("No se pudo encontrar el heroe");
    }, 1500);
  });
};

export default getHeroeByIdAsync;
