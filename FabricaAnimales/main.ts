
// Ejercicio 2: Fábrica de Animales
// Consigna:
// Crea una interfaz Animal con métodos hacerSonido() y mover().
// Implementa clases
// como Perro, Gato y Pajaro que utilizen esa interfaz.Luego,
// crea una fábrica que
//  devuelva instancias de estos animales.
import { FabricaDeAnimales } from "./Fabrica";
const fabrica = new FabricaDeAnimales();

const miAnimal = fabrica.crearAnimal("perro");
miAnimal?.hacerSonido();
miAnimal?.mover();

const miAnimal2 = fabrica.crearAnimal("gato");
miAnimal2?.hacerSonido();
miAnimal2?.mover();

const miAnimal3 = fabrica.crearAnimal("pajaro");
miAnimal3?.hacerSonido();
miAnimal3?.mover();

const miAnimal4 = fabrica.crearAnimal("delfin");
miAnimal4?.hacerSonido();
miAnimal4?.mover();



