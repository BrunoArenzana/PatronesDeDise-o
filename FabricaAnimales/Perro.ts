import { iAnimales } from "./iAnimales";

export class Perro implements iAnimales{

    hacerSonido(): void {  
        console.log("Guau guau!");
    }
    mover(): void {
        console.log("El perro esta Corriendo");
    }
}