import { iAnimales } from "./iAnimales";

export class Pajaro implements iAnimales{

    hacerSonido(): void {  
        console.log("Piooo Pioooo !");
    }
    mover(): void{
        console.log("El pajaro esta Volando");
    }
}