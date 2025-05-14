import { Computadora } from "./Computadora";

export class ComputadoraBuilder {

    public procesador?: string;
    public ram?: number;
    public almacenamiento?: number;
    public tarjetaGrafica?: boolean;
    public sistemaOperativo?: string;
 
    public setProcesador(pProcesador: string): ComputadoraBuilder {
        this.procesador = pProcesador;
        return this;
    }
    public setRam(pRam: number): ComputadoraBuilder {
        this.ram = pRam;
        return this;
    }
    public setAlmacenamiento(pAlmacenamiento: number): ComputadoraBuilder {
        this.almacenamiento = pAlmacenamiento;
        return this;
    }
    public setTarjetaGrafica(pTarjetaGrafica: boolean): ComputadoraBuilder {
        this.tarjetaGrafica = pTarjetaGrafica;
        return this;
    }
    public setSistemaOperativo(pSistemaOperativo: string): ComputadoraBuilder {
        this.sistemaOperativo = pSistemaOperativo;
        return this;
    }
    public buildComputadora(): Computadora{
        return new Computadora(this);
    }
}