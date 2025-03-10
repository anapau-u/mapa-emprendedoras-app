## Descripción del Proyecto
Este proyecto es una aplicación web que permite a los emprendedores registrar su negocio, mostrar sus productos y conectarse con otros emprendedores en su comunidad. Utiliza **React** para el frontend y **Supabase** para la base de datos y la autenticación de usuarios.
## Tecnologías Utilizadas
- **Frontend:** React
- **Backend:** Supabase (para base de datos y autenticación)
- **Estilos:** CSS personalizado
- **Rutas:** React Router
## Instalación y Configuración
1. Clonar el repositorio
	Primero, clona este repositorio en tu máquina local:
```
	`git clone https://github.com/anapau-u/mapa-emprendedoras-app.git`
```
2. Instalación de dependencias
	Navega a la carpeta del proyecto y ejecuta el siguiente comando para instalar las dependencias necesarias:
```
	cd mapa-emprendedoras-app
	npm install
```
3. Configuración de Supabase
	1. Inicia sesión en Supabase
		Correo: [ana.paula@soytihui.com]
		Contraseña: *r%XIG84fg4E61nF*
		Company Name: Yo CoCreo
		Project Name: MapaEmprendedoras
		Contraseña Base de Datos: *r%XIG84fg4E61nF*
	2. Verifica las credenciales
		- Verifica que el archivo `.env` se encuentra en la raíz del proyecto.
		- Verifica que las variables `REACT_APP_SUPABASE_URL` y `REACT_APP_SUPABASE_ANON_KEY` estén correctas con los valores de tu proyecto en Supabase.
		- Si ya has instalado las dependencias con `npm install`, puedes proceder a iniciar la aplicación con `npm start` y debería conectar correctamente con Supabase.
## Estructura de la Base de Datos

### Tabla: `auth.users`
Esta tabla es gestionada automáticamente por Supabase y almacena la información de los usuarios autenticados en la plataforma.

| Nombre             | Tipo de dato | Descripción                                                                                      |
| ------------------ | ------------ | ------------------------------------------------------------------------------------------------ |
| id                 | uuid         | Identificador único del usuario. Se usa en `partners.user_id` para vincular socios con usuarios. |
| email              | text         | Correo electrónico del usuario.                                                                  |
| encrypted_password | text         | Contraseña encriptada del usuario (manejada automáticamente por Supabase).                       |
| created_at         | timestamptz  | Fecha y hora de creación del usuario.                                                            |
| last_sign_in_at    | timestamptz  | Última fecha y hora en que el usuario inició sesión.                                             |

### Tabla: `partners`
Esta tabla almacena la información de los socios registrados en la plataforma.

| Nombre              | Tipo de dato | Descripción                                                                             |
| ------------------- | ------------ | --------------------------------------------------------------------------------------- |
| id                  | int4         | Identificador único de cada socio (autoincremental).                                    |
| company_name        | varchar      | Nombre de la empresa/emprendimiento.                                                    |
| representative_name | varchar      | Nombre del representante de la empresa.                                                 |
| state               | varchar      | Estado de México donde opera la empresa.                                                |
| category            | varchar      | Categoría principal del negocio.                                                        |
| second_category     | varchar      | Categoría secundaria del negocio (opcional).                                            |
| product_photo_urls  | _text        | Lista de URLs de imágenes de productos.                                                 |
| description         | _text        | Lista de descripciones correspondientes a cada imagen de `product_photo_urls`.          |
| user_id             | uuid         | Identificador del usuario que registró la empresa (relación con la tabla `auth.users`). |
| created_at          | timestamptz  | Fecha y hora en que se creó el registro.                                                |
| updated_at          | timestamptz  | Fecha y hora de la última actualización del registro.                                   |
### Notas sobre la autenticación

- **Ingreso mediante Google:** El sistema de autenticación actual está configurado para permitir el ingreso ==únicamente== a través de cuentas de Google.

## Tareas Pendientes

1. **Login con Email:** Implementar el sistema de autenticación mediante correo electrónico.
2. **Integración del Mapa Interactivo de SimpleMaps:** Comprar la licencia y añadir el código del mapa de la República Mexicana al proyecto.
3. **Desplegar los Datos Recolectados en los Formularios en el Mapa Interactivo:** Mostrar la información de los socios en el mapa según los datos recolectados.
4. **Añadir Filtros en el Despliegue del Mapa:** Permitir filtrar los socios en el mapa por estado, categoría, etc.
5. **Redacción de Manual para Vendedores:** Especificar cómo los vendedores deben registrarse, añadir productos, subir imágenes, establecer precios, etc.

## Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).
### Available Scripts

In the project directory, you can run:
#### `npm start`

Runs the app in the development mode.  
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make changes.  
You may also see any lint errors in the console.
#### `npm test`

Launches the test runner in the interactive watch mode.  
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.
#### `npm run build`

Builds the app for production to the `build` folder.  
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.  
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.
#### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can't go back!**

If you aren't satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you're on your own.

You don't have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn't feel obligated to use this feature. However we understand that this tool wouldn't be useful if you couldn't customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).
#### Code Splitting

This section has moved here: [https://facebook.github.io/create-react-app/docs/code-splitting](https://facebook.github.io/create-react-app/docs/code-splitting)
#### Analyzing the Bundle Size

This section has moved here: [https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size](https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size)
#### Making a Progressive Web App
This section has moved here: [https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app](https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app)
#### Advanced Configuration

This section has moved here: [https://facebook.github.io/create-react-app/docs/advanced-configuration](https://facebook.github.io/create-react-app/docs/advanced-configuration)
#### Deployment
This section has moved here: [https://facebook.github.io/create-react-app/docs/deployment](https://facebook.github.io/create-react-app/docs/deployment)
#### `npm run build` fails to minify

This section has moved here: [https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify](https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify) 