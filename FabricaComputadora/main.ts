// Ejercicios de tarea(entrega obligatoria)

// Ejercicio 1: Construcción de Computadoras
// Consigna:
// Crea una clase Computadora que tenga los siguientes atributos opcionales:
// Procesador
// RAM
// Almacenamiento
// Tarjeta gráfica
// Sistema operativo
// Implementa un patrón Builder que permita a los usuarios construir una
// computadora personalizada paso a paso.


import { ComputadoraBuilder } from "./ComputadoraBuilder"

const miPc = new ComputadoraBuilder()
    .setAlmacenamiento(512)
    .setProcesador("Intel i9")
    .setRam(64)
    .setSistemaOperativo("Windows 11 standar")
    .setTarjetaGrafica(true)
    .buildComputadora();



miPc.mostrarConfiguracion();

