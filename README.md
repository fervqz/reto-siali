# Reto Siali

## Ejecución el código

Clonar el repo y ejecutar un `npm install`, luego ejcutar el código `npm start` en la carpeta raíz del proeycto.


<br>

## Estructura del proyecto

```bash
.
└── src/
    ├── assets/
    ├── components/  # Componentes de la aplicación
    ├── mock/        # Datos que simulan la respuesta de la API
    ├── routes/      # Rutas de react-router-dom
    ├── services/    # Centralización de funciones y llamadas a la API
    ├── styles/      # Componentes de Tailwind
    ├── types/       # Interfaces, Enums y Types de la aplicación
    └── views/       # Pantallas de la aplicación
```

<br>

## Parte 1
### Requisitos
> - Crea un nuevo proyecto de React usando `create-react-app`, `vite` o cualquier otra herramienta de tu elección.
> - Instala las dependencias necesarias: `axios` y `react-dropzone`.
> - Crea un componente llamado `ImageUploader` en un archivo llamado `ImageUploader.jsx`.
> - Importa `react-dropzone` y `axios` dentro del componente `ImageUploader`.
> - Crea un componente funcional llamado `ImageUploader` que renderice un componente de `react-dropzone` con los props necesarios para habilitar el drag and drop de archivos. Dentro del prop onDrop de `react-dropzone`, usa `axios` para enviar una solicitud POST a una API gratuita que acepte archivos. Puedes usar la API de pruebas de `httpbin.org` para esto.
> - Muestra un mensaje de éxito o de error según la respuesta de la API.

El proyecto fue creado utilizando `create-react-app`, se instalaron las dependencias de `axios`, `react-router-dom`, `react-dropzone` y `tailwindcss`.

El componente funcional `ImageUploader` puede encontrarse en:
```bash
src/components/ImageUploader/index.tsx      # línea 10
```

La dependencia `react-dropzone` se utiliza en:
```bash
src/components/ImageUploader/index.tsx      # línea 58
```
La llamada axios se encuentra en el servicio `samplesService`:
```bash
src/services/samples.service.ts             # línea 14
```
Y el mensaje de éxito/error se encuentra en:
```bash
src/components/ImageUploader/utils.tsx      # línea 20
```

<br>

## Parte 2
### Requisitos
> - Crear un bloque de contenido con buscador y una lista de componentes que se cargan en este caso de un json.
> - El boton de importar no tendra funcionalidad.
> - El buscador solo buscara por fecha.
> - Calcula el numero de dias transcurridos desde que se creo el stack y el dia actual y muestralo.

El buscador se encuentra en el archivo:
```bash
src/components/Searcher/index.tsx           # línea 11
```
El búscador por fecha funciona de la siguiente forma:
- Se puede buscar por fecha *human readable*, por ejemplo *hace 2 días, hace 3 meses*.
- También se puede buscar por el valor original de la fecha, cuyo formato es `Fri, 01 Jan 2010 00:00:00 GMT`.

<br>

## Parte 3
### Requisitos
> - Dar estilo a la web para que se parezca lo mas posible a la imagen.
> - La barra de navegación deberan ser link enlazados con un react-router

Rutas de la aplicación
```bash
src/routes/routes.tsx                       # línea 8
```
Router
```bash
src/App.tsx                                 # línea 7
```
NavBar Links
```bash
src/components/NavBar/index.tsx             # línea 24
```

<br>

## Estilos
### Iconos
- '@mui/icons-material/Science'
- '@mui/icons-material/Search'

### Font family:
- Mukta

### Colors:
- **primary:** #9F86C0
- **textdark:** #111315
- **textgray:** #767676
- **background:** #EDEDED
