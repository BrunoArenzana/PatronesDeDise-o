import { ComputadoraBuilder } from "./ComputadoraBuilder";

export class Computadora {

    private procesador ?: string;
    private ram ?: number;
    private almacenamiento ?: number;
    private tarjetaGrafica ?: boolean;
    private sistemaOperativo ?: string;
    
    constructor(builder: ComputadoraBuilder) {
        this.procesador = builder.procesador;
        this.ram = builder.ram;
        this.almacenamiento = builder.almacenamiento;
        this.tarjetaGrafica = builder.tarjetaGrafica;
        this.sistemaOperativo = builder.sistemaOperativo;
    }

    public mostrarConfiguracion(): void {
        console.log(`Configuracion seleccionada: 
            Procesador: ${this.procesador ?? "No especificado"}
            RAM: ${this.ram ?? "No especificado"}
            Almacenamiento: ${this.almacenamiento ?? "No especificado"}
            Tarjeta Gráfica: ${this.tarjetaGrafica ?? "No especificado"}
            Sistema Operativo: ${this.sistemaOperativo ?? "No especificado"}`
        );
    }
}