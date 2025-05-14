import { iAnimales } from "./iAnimales";

export class Gato implements iAnimales{

    hacerSonido(): void {  
        console.log("Miauuuu Miauuuuuu !");
    }
    mover(): void {
        console.log("El Gato esta trepando");
    }

}