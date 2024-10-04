
try {
    let resultado = 10 / 0; 
    console.log("Resultado:", resultado);

    if (resultado === Infinity) {
        throw new Error("División por cero detectada");
    }
} catch (error) {
    console.error("Ocurrió un error:", error.message);
} finally {
    //debe ejecutarse independientemente de si se lanzó una excepción o no. Es útil para realizar tareas de limpieza o liberar recursos que deben ejecutarse sin importar el resultado del bloque try o catch.
    console.log("Este bloque se ejecuta siempre.");
}
