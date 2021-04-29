import { getHeroeById, getHeroesByowner } from "../../base/08-impo-exp";
import heroes from "../../data/heroes";

describe("Pruebas en funciones de Heroes", () => {
  test("Debe de retornar un heroe por id", () => {
    const id = 1;
    const heroe = getHeroeById(id);

    const heroeData = heroes.find((h) => h.id === id);
    expect(heroe).toEqual(heroeData);
  });
  test("Debe de retornar un undefined si heroe no existe", () => {
    const id = 100;
    const heroe = getHeroeById(id);

    expect(heroe).toBe(undefined);
  });

  test("Debe de retornar un arreglo con los heroes de DC", () => {
    const owner = "DC";
    const heroes = getHeroesByowner(owner);
    const heroesData = heroes.filter((h) => h.owner === owner);

    expect(heroes).toEqual(heroesData);
  });

  test("Debe de retornar un arreglo con los heroes de marvel", () => {
    const owner = "Marvel";
    const heroes = getHeroesByowner(owner);

    expect(heroes.length).toBe(2);
  });
});
