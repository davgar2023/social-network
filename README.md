# Social Network Data Structure 🌐

[![JavaScript](https://img.shields.io/badge/language-JavaScript-yellow?logo=javascript)](https://developer.mozilla.org/en-US/docs/Web/JavaScript)
[![MIT License](https://img.shields.io/badge/license-MIT-blue.svg)](LICENSE)
[![Node.js](https://img.shields.io/badge/node-%3E%3D%2014.0.0-brightgreen)](https://nodejs.org/)
[![Status](https://img.shields.io/badge/status-active-success)](https://github.com/davgar2023/social-network)

Una implementación de una red social usando estructuras de datos gráficas en JavaScript. Los individuos se representan como nodos y las amistades como aristas. Este proyecto incluye funcionalidades para gestionar individuos, establecer amistades y calcular grados de separación entre usuarios.

**[🔗 Ver Demo en Vivo](#demo)** | **[📖 Documentación Completa](#table-of-contents)** | **[💻 Código Fuente](https://github.com/davgar2023/social-network)**

---

## 📋 Tabla de Contenidos

- [Descripción del Proyecto](#descripción-del-proyecto)
- [Características](#características)
- [Requisitos](#requisitos)
- [Instalación](#instalación)
- [Uso](#uso)
- [API](#api)
- [Ejemplos](#ejemplos)
- [Pruebas](#pruebas)
- [Estructura del Proyecto](#estructura-del-proyecto)
- [Demo](#demo)
- [Contribuir](#contribuir)
- [Licencia](#licencia)
- [Autor](#autor)

---

## 📖 Descripción del Proyecto

Este proyecto implementa una estructura de datos de red social utilizando clases de JavaScript. Permite:

- ✅ Agregar individuos a la red
- ✅ Establecer y gestionar amistades bidireccionales
- ✅ Calcular el grado de separación entre dos personas (Número de Erdős)
- ✅ Actualizar información de individuos
- ✅ Visualizar todas las relaciones en la red
- ✅ Eliminar amistades

El algoritmo utiliza **BFS (Búsqueda en Amplitud)** para calcular el camino más corto entre dos nodos, implementando el concepto del "Número de Erdős" o "Grado de Separación de Seis".

---

## ✨ Características

| Característica | Descripción |
|---|---|
| 👥 Gestión de Usuarios | Agregar, actualizar y gestionar individuos en la red |
| 🔗 Amistades Bidireccionales | Las amistades se establecen en ambas direcciones automáticamente |
| 📊 Análisis de Conexiones | Calcula el grado de separación entre cualquier par de usuarios |
| 🔍 Búsqueda BFS | Algoritmo eficiente para encontrar el camino más corto |
| 🧪 Pruebas Unitarias | Suite completa de tests con Jest |
| 📝 Documentación | Código bien documentado y ejemplos claros |

---

## 📦 Requisitos

- **Node.js** >= 14.0.0
- **npm** >= 6.0.0
- Navegador moderno (para versiones web futuras)

---

## 🚀 Instalación

1. **Clonar el repositorio:**
```bash
git clone https://github.com/davgar2023/social-network.git
cd social-network
```

2. **Instalar dependencias:**
```bash
npm install
```

3. **Verificar la instalación:**
```bash
npm test
```

---

## 💻 Uso

### Ejecutar el Ejemplo Básico

```bash
node index.js
```

### Uso en tu Proyecto

```javascript
const SocialNetwork = require('./modules/SocialNetwork');

// Crear una instancia de la red social
const network = new SocialNetwork();

// Agregar individuos
network.addIndividual('1', 'Alice');
network.addIndividual('2', 'Bob');
network.addIndividual('3', 'Charlie');

// Establecer amistades
network.addFriendship('1', '2'); // Alice ↔ Bob
network.addFriendship('2', '3'); // Bob ↔ Charlie

// Calcular grado de separación
const degree = network.calculateDegreeOfSeparation('1', '3');
console.log(`Grado de separación entre Alice y Charlie: ${degree}`); // Output: 2

// Ver todas las relaciones
network.printRelationships();
```

---

## 📚 API

### Clase SocialNetwork

#### `addIndividual(id, name)`
Agrega un nuevo individuo a la red social.

| Parámetro | Tipo | Descripción |
|-----------|------|-------------|
| id | string | Identificador único del individuo |
| name | string | Nombre del individuo |

```javascript
network.addIndividual('1', 'Alice');
```

---

#### `addFriendship(id1, id2)`
Establece una amistad bidireccional entre dos individuos.

| Parámetro | Tipo | Descripción |
|-----------|------|-------------|
| id1 | string | ID del primer individuo |
| id2 | string | ID del segundo individuo |

```javascript
network.addFriendship('1', '2'); // Alice y Bob son amigos
```

---

#### `removeFriendship(id1, id2)`
Elimina la amistad entre dos individuos.

| Parámetro | Tipo | Descripción |
|-----------|------|-------------|
| id1 | string | ID del primer individuo |
| id2 | string | ID del segundo individuo |

```javascript
network.removeFriendship('1', '2');
```

---

#### `updateIndividual(id, newName)`
Actualiza el nombre de un individuo.

| Parámetro | Tipo | Descripción |
|-----------|------|-------------|
| id | string | ID del individuo |
| newName | string | Nuevo nombre |

```javascript
network.updateIndividual('4', 'Dave');
```

---

#### `calculateDegreeOfSeparation(startId, targetId)`
Calcula el grado de separación (camino más corto) entre dos individuos usando BFS.

| Parámetro | Tipo | Descripción |
|-----------|------|-------------|
| startId | string | ID del individuo inicial |
| targetId | string | ID del individuo objetivo |

**Retorna:** `number` - Grado de separación o `-1` si no hay conexión

```javascript
const degree = network.calculateDegreeOfSeparation('1', '4');
console.log(degree); // 3 (si hay conexión) o -1 (si no hay)
```

---

#### `printRelationships()`
Imprime todas las amistades en la red.

```javascript
network.printRelationships();
// Output:
// Alice: Bob
// Bob: Alice, Charlie
// Charlie: Bob, David
// David: Charlie
```

---

### Clase Individual

#### `addFriend(friend)`
Agrega un amigo a la lista de amigos del individuo.

| Parámetro | Tipo | Descripción |
|-----------|------|-------------|
| friend | Individual | Objeto Individual a agregar como amigo |

---

#### `updateName(newName)`
Actualiza el nombre del individuo.

| Parámetro | Tipo | Descripción |
|-----------|------|-------------|
| newName | string | Nuevo nombre del individuo |

---

## 🎯 Ejemplos

### Ejemplo 1: Red Social Simple

```javascript
const SocialNetwork = require('./modules/SocialNetwork');

const network = new SocialNetwork();

// Crear una red de 4 personas
network.addIndividual('1', 'Alice');
network.addIndividual('2', 'Bob');
network.addIndividual('3', 'Charlie');
network.addIndividual('4', 'David');

// Establecer amistades
network.addFriendship('1', '2'); // Alice - Bob
network.addFriendship('2', '3'); // Bob - Charlie
network.addFriendship('3', '4'); // Charlie - David

// Actualizar nombre
network.updateIndividual('4', 'Dave');

// Calcular grado de separación
console.log('Grado de separación entre Alice y Dave:', 
            network.calculateDegreeOfSeparation('1', '4')); // Output: 3

// Mostrar todas las relaciones
console.log('\nAmistades:');
network.printRelationships();
```

### Ejemplo 2: Red Más Compleja

```javascript
const SocialNetwork = require('./modules/SocialNetwork');

const network = new SocialNetwork();

// Agregar 6 personas
for (let i = 1; i <= 6; i++) {
  network.addIndividual(String(i), `Person${i}`);
}

// Crear conexiones
network.addFriendship('1', '2');
network.addFriendship('2', '3');
network.addFriendship('3', '4');
network.addFriendship('4', '5');
network.addFriendship('5', '6');
network.addFriendship('1', '6'); // Crear un ciclo

// Analizar conexiones
console.log('Separación 1→6:', network.calculateDegreeOfSeparation('1', '6')); // 1
```

---

## 🧪 Pruebas

### Ejecutar Tests

```bash
npm test
```

### Cobertura de Tests

El proyecto incluye pruebas para:
- ✅ Agregar individuos a la red
- ✅ Establecer amistades
- ✅ Eliminar amistades
- ✅ Calcular grado de separación
- ✅ Manejar individuos no existentes

**Resultados esperados:**
```
Social Network Tests
  ✔ should add individuals to the network
  ✔ should establish friendships
  ✔ should remove a friendship
  ✔ should calculate the degree of separation
  ✔ should handle non-existent individuals in removeFriendship

5 passing
```

---

## 📁 Estructura del Proyecto

```
social-network/
├── index.js                    # Punto de entrada - ejemplo de uso
├── package.json               # Configuración de npm
├── package-lock.json          # Dependencias bloqueadas
├── README.md                  # Este archivo
├── LICENSE                    # Licencia MIT
├── .gitignore                 # Archivos ignorados por git
├── modules/
│   ├── SocialNetwork.js       # Clase principal de la red social
│   └── Individual.js          # Clase para representar individuos
└── __test__/
    └── SocialNetwork.test.js  # Suite de tests
```

---

## 🔗 Demo

### Opción 1: Ejecutar Localmente

```bash
# Clonar y configurar
git clone https://github.com/davgar2023/social-network.git
cd social-network
npm install

# Ejecutar el ejemplo
node index.js
```

### Opción 2: Visualización en Línea

Puedes interactuar con el código en plataformas como:

- **[RunKit](https://runkit.com)** - Ejecuta código Node.js en línea
- **[Replit](https://replit.com)** - Crea un proyecto forked del repositorio
- **[CodePen](https://codepen.io)** - (con ajustes para Node.js)

### Opción 3: Playground Interactivo

Para una experiencia interactiva completa, se recomienda usar:
```bash
node -i -e "const SocialNetwork = require('./modules/SocialNetwork'); const network = new SocialNetwork();"
```

---

## 🤝 Contribuir

¡Las contribuciones son bienvenidas! Para contribuir:

1. **Fork** el repositorio
2. **Crea una rama** para tu feature (`git checkout -b feature/amazing-feature`)
3. **Commit** tus cambios (`git commit -m 'Add some amazing feature'`)
4. **Push** a la rama (`git push origin feature/amazing-feature`)
5. **Abre un Pull Request**

### Directrices de Contribución

- Sigue el estilo de código existente
- Agrega tests para nuevas funcionalidades
- Actualiza la documentación según sea necesario
- Asegúrate de que todos los tests pasen (`npm test`)

---

## 📄 Licencia

Este proyecto está bajo la Licencia MIT. Ver archivo [LICENSE](LICENSE) para más detalles.

```
MIT License

Copyright (c) 2024 davgar2023

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.
```

---

## 👤 Autor

**David García** (davgar2023)

- 🐙 GitHub: [@davgar2023](https://github.com/davgar2023)
- 📧 Contacto a través de GitHub

---

## 📞 Soporte

Si tienes preguntas o problemas, por favor:

1. Revisa los [Issues existentes](https://github.com/davgar2023/social-network/issues)
2. [Crea un nuevo Issue](https://github.com/davgar2023/social-network/issues/new) con descripción detallada
3. Incluye ejemplos de código si es posible

---

## 🗺️ Roadmap Futuro

- [ ] Interfaz web (React)
- [ ] API REST con Express
- [ ] Base de datos (MongoDB)
- [ ] Visualización de la red (D3.js)
- [ ] Búsqueda de caminos alternativos
- [ ] Análisis de comunidades
- [ ] Métrica de centralidad

---

## ⭐ Si este proyecto te fue útil, considera darle una estrella!

**[⬆ Volver al inicio](#social-network-data-structure-)**
