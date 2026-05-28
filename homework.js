// No cambies los nombres de las funciones.

function usarOperadorTernario(edad) {
  // Devuelve "mayor" si edad >= 18, y "menor" en caso contrario.
  return edad >= 18 ? 'mayor' : 'menor';
}

function leerModuloCommonJS() {
  // Importa datos desde "./modulos/constantes-cjs.cjs" usando require.
  // Devuelve un string con el formato: "<nombreMotor> <versionObjetivo>"
  const modulo = require('./modulos/constantes-cjs.cjs');
  return `${modulo.nombreMotor} ${modulo.versionObjetivo}`;
}

async function leerModuloESM() {
  // Importa datos desde "./modulos/constantes-esm.mjs" usando import dinamico.
  // Devuelve un string con el formato: "<standardModulo> | <sintaxisImport>"
  const modulo = await import('./modulos/constantes-esm.mjs');
  return `${modulo.standardModulo} | ${modulo.sintaxisImport}`;
}

function combinarArraysConSpread(base, extras) {
  // Devuelve un nuevo array con todos los elementos de base seguidos por extras.
  return [...base, ...extras];
}

function combinarObjetosConSpread(base, override) {
  // Devuelve un nuevo objeto donde "override" pisa las claves repetidas de "base".
  return { ...base, ...override };
}

function recolectarNotas(materia, ...notas) {
  // Rest parameter: devuelve un objeto con la materia y el array de notas.
  return { materia, notas };
}

function obtenerPreferenciaColor(usuario) {
  // Usa optional chaining y nullish coalescing.
  // Si usuario.preferencias.color existe, devolvelo.
  // Caso contrario devolve "sin-preferencia".
  return usuario?.preferencias?.color ?? 'sin-preferencia';
}

function desestructurarPerfil(perfil) {
  // Extrae con alias:
  // - nombre -> nombrePersona
  // - edad -> edadPersona
  // - ciudad desde perfil.direccion.ciudad -> ciudadActual
  // Devuelve { nombrePersona, edadPersona, ciudadActual }.
  const {
    nombre: nombrePersona,
    edad: edadPersona,
    direccion: { ciudad: ciudadActual },
  } = perfil;

  return { nombrePersona, edadPersona, ciudadActual };
}

class Persona {
  constructor(nombre, edad) {
    this.nombre = nombre;
    this.edad = edad;
  }

  presentarse() {
    // Devuelve: "Soy <nombre> y tengo <edad> anios."
    return `Soy ${this.nombre} y tengo ${this.edad} anios.`;
  }
}

class Estudiante extends Persona {
  constructor(nombre, edad, carrera) {
    super(nombre, edad); // Llama al constructor de Persona
    this.carrera = carrera;
  }

  presentarse() {
    // Usa super.presentarse() y agrega:
    // " Estudio <carrera>."
    return `${super.presentarse()} Estudio ${this.carrera}.`;
  }
}

function diasEntreFechas(fechaInicio, fechaFin) {
  // Recibe dos objetos Date y devuelve la diferencia entera en dias.
  // Al restar las fechas obtenemos la diferencia en milisegundos.
  const diferenciaMs = fechaFin - fechaInicio;
  // Convertimos milisegundos a días: ms * segundos * minutos * horas
  const msPorDia = 1000 * 60 * 60 * 24;
  return Math.floor(diferenciaMs / msPorDia);
}

function explicarConcurrenciaYParalelismo() {
  // Devuelve un objeto:
  return {
    concurrencia:
      'Es la capacidad de manejar múltiples tareas intercalando su ejecución en el tiempo (un solo hilo/core que va saltando de tarea en tarea).',
    paralelismo:
      'Es la ejecución simultánea de múltiples tareas al mismo tiempo (requiere múltiples hilos/cores físicos corriendo en paralelo).',
  };
}

function promesaDemorada(valor, ms) {
  // Devuelve una Promise que resuelve "valor" despues de "ms" milisegundos.
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(valor);
    }, ms);
  });
}

function promesaConValidacion(numero) {
  // Devuelve una Promise:
  // - resolve: "ok:<numero>" si numero es >= 0
  // - reject: Error("numero-invalido") si numero < 0
  return new Promise((resolve, reject) => {
    if (numero >= 0) {
      resolve(`ok:${numero}`);
    } else {
      reject(new Error('numero-invalido'));
    }
  });
}

module.exports = {
  usarOperadorTernario,
  leerModuloCommonJS,
  leerModuloESM,
  combinarArraysConSpread,
  combinarObjetosConSpread,
  recolectarNotas,
  obtenerPreferenciaColor,
  desestructurarPerfil,
  Persona,
  Estudiante,
  diasEntreFechas,
  explicarConcurrenciaYParalelismo,
  promesaDemorada,
  promesaConValidacion,
};
