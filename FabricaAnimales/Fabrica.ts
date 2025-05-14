import { iAnimales } from "./iAnimales";
import { Perro } from "./Perro";
import { Gato } from "./Gato";
import { Pajaro } from "./Pajaro";

export class FabricaDeAnimales {
    public crearAnimal(tipo: string): iAnimales | null {
        switch (tipo.toLowerCase()) {
            case "perro":
                return new Perro();
            case "gato":
                return new Gato();
            case "pajaro":
                return new Pajaro();
            default:
                console.log("Tipo de animal no reconocido.");
                return null;
        }
    }
}

