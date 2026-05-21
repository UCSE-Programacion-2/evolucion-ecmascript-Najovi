[![Review Assignment Due Date](https://classroom.github.com/assets/deadline-readme-button-22041afd0340ce965d47ae6ef1cefeee28c7c493a6346c4f15d667ab976d596c.svg)](https://classroom.github.com/a/FIcmDodO)
# Ejercitacion: Evolucion de ECMAScript

Este repositorio esta orientado a practicar la evolucion del lenguaje JavaScript desde sintaxis clasica hacia caracteristicas modernas de ECMAScript.

## Herramientas de editor (ESLint / Prettier / VS Code)

En la raiz estan `.vscode/`, `.eslintrc.json`, `.prettierrc.js`, `.prettierignore` y `.env.example`. La carpeta `Configuration-Files/backend-nodejs/` es una copia de referencia del kit del curso (su `README` describe un stack Express/Mongo; **este ejercicio es Jest + Node**).

- `npm run lint` / `npm run lint:fix`
- `npm run format` / `npm run format:check`

## Objetivo general

Completar las funciones de `homework.js` para resolver ejercicios progresivos sobre:

- Operadores ternarios.
- Sistema de modulos (CommonJS y ES Modules).
- Spread operator.
- Rest parameters.
- Operadores de comprobacion de existencia (`??` y `?.`).
- Desestructuracion.
- Clases y herencia.
- Uso de `Date`.
- Asincronismo en JavaScript.
- Diferencia entre concurrencia y paralelismo.
- Introduccion a promesas.

### Checklist de autocontrol (temario pedido)

- [ ] Operadores ternarios: condiciones concisas.
- [ ] Sistema de modulos: `require` (CommonJS) frente a `import`/`export` (ESM) y notas de `package.json`.
- [ ] Spread operator (`...`): propagacion y copia superficial en arrays y objetos.
- [ ] Rest parameters (`...`): argumentos variables al final del listado de parametros.
- [ ] Operadores `??` y `?.`: valores por defecto frente a `null`/`undefined` y navegacion segura.
- [ ] Desestructuracion: objetos/arrays con alias.
- [ ] Clases y objetos: constructor, molde de clase e herencia con `extends` y `super`.
- [ ] Clase `Date`: fechas y horas.
- [ ] Concepto de asincronismo: JS no bloqueante y trabajo fuera del hilo principal sin recargar.
- [ ] Concurrencia vs paralelismo: tiempo superpuesto frente a ejecucion simultanea real.
- [ ] Introduccion a Promesas: representar valores actuales, futuros o fallidos.

## Estructura principal

- `homework.js`: funciones y clases a completar.
- `tests/pruebas.test.js`: pruebas de Jest que verifican cada consigna.
- `modulos/constantes-cjs.cjs`: ejemplo de exportacion CommonJS.
- `modulos/constantes-esm.mjs`: ejemplo de exportacion ES Modules.
- `scripts/classroom-check.sh`: script usado por GitHub Classroom.

## Instalacion y ejecucion

1. Instalar dependencias:

```bash
npm ci
```

2. Ejecutar tests:

```bash
npm test
```

Si `homework.js` todavia tiene funciones incompletas, **la suite puede fallar** hasta que completes cada consigna. Eso es esperable: Classroom evalua `npm ci` por separado y luego los tests cuando la entrega este resuelta.

## Mapa de funciones por tema

- `usarOperadorTernario`: condicion corta con `condicion ? valorSiTrue : valorSiFalse`.
- `leerModuloCommonJS`: uso de `require(...)` sobre archivo `.cjs`.
- `leerModuloESM`: uso de `import(...)` dinamico para cargar archivo `.mjs`.
- `combinarArraysConSpread` y `combinarObjetosConSpread`: copia/mezcla superficial con `...`.
- `recolectarNotas`: parametros variables con `...notas` (siempre al final).
- `obtenerPreferenciaColor`: navegacion segura con `?.` y fallback con `??`.
- `desestructurarPerfil`: extraccion con alias para evitar colisiones de nombres.
- `Persona` y `Estudiante`: POO con constructor, `extends` y `super`.
- `diasEntreFechas`: uso de objetos `Date` para calculo temporal.
- `explicarConcurrenciaYParalelismo`: conceptualizacion de ejecucion no bloqueante.
- `promesaDemorada` y `promesaConValidacion`: creacion y manejo de promesas.

## Teoria breve por tema

### 1) Operador ternario

Permite expresar una decision simple en una sola linea:

```js
const estado = edad >= 18 ? 'mayor' : 'menor';
```

Es util cuando la condicion y ambos resultados son cortos y legibles.

### 2) Sistema de modulos: CommonJS vs ES Modules

CommonJS es el sistema historico de Node.js:

```js
const modulo = require("./archivo.cjs");
module.exports = { ... };
```

ES Modules es el estandar moderno:

```js
import { algo } from './archivo.mjs';
export const valor = 1;
```

En este repositorio se usan ambos para comparar:

- `.cjs` para CommonJS.
- `.mjs` para ES Modules.
- `homework.js` se mantiene en CommonJS para simplificar compatibilidad con Jest.

### Nota de `package.json` sobre modulos

- Sin declarar `"type"`, Node interpreta `.js` como CommonJS.
- Con `"type": "module"`, Node interpreta `.js` como ESM.
- Las extensiones `.cjs` y `.mjs` permiten mezclar ambos sistemas de forma explicita.

### 3) Spread operator (`...`)

Se usa para expandir arrays u objetos y crear copias superficiales:

```js
const nuevoArray = [...base, ...extras];
const nuevoObjeto = { ...original, ...cambios };
```

### 4) Rest parameters (`...`)

Se usa en parametros de funcion para reunir argumentos en un array:

```js
function sumar(base, ...extras) { ... }
```

Regla clave: el parametro rest va siempre al final.

### 5) Operadores de existencia: `??` y `?.`

- `?.` evita errores al navegar propiedades potencialmente inexistentes.
- `??` define valor de respaldo solo para `null` o `undefined`.

```js
const color = usuario?.preferencias?.color ?? 'sin-preferencia';
```

### 6) Desestructuracion

Permite extraer valores rapidamente de objetos y arrays:

```js
const { nombre: nombrePersona } = perfil;
```

El alias (`nombrePersona`) ayuda a evitar conflictos de nombres.

### 7) Clases y objetos (POO)

- `class` define el molde.
- `constructor` inicializa estado.
- `extends` crea herencia.
- `super(...)` invoca al constructor/metodos de la clase base.

### 8) Clase `Date`

`Date` permite representar y manipular instantes de tiempo. Para resultados estables en tests se recomiendan fechas fijas (por ejemplo, con formato ISO UTC).

### 9) Asincronismo en JavaScript

JavaScript ejecuta codigo en un hilo principal, pero puede delegar tareas asincronas (timers, I/O, red) para no bloquear la interfaz o el flujo principal. Cuando esas tareas terminan, sus callbacks/promesas se encolan para ejecutarse despues.

### 10) Concurrencia vs paralelismo

- Concurrencia: multiples tareas progresan en periodos superpuestos (intercaladas en el tiempo).
- Paralelismo: multiples tareas se ejecutan literalmente al mismo tiempo (por ejemplo, en distintos nucleos o workers).

En JavaScript tradicional de navegador, lo mas comun es concurrencia en un solo hilo; el paralelismo requiere mecanismos extra (Web Workers o Worker Threads en Node).

### 11) Introduccion a promesas

Una promesa representa un resultado futuro de una operacion asincrona:

- `pending`: aun no resuelta.
- `fulfilled`: resuelta correctamente.
- `rejected`: fallo.

Permite encadenar operaciones de forma ordenada con `.then/.catch` o `async/await`.
0
