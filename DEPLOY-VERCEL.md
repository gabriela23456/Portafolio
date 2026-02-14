# Desplegar tu portafolio en Vercel

Sigue estos pasos para que tu portafolio esté en línea con una URL como `tu-portafolio.vercel.app`.

---

## Paso 1: Subir el proyecto a GitHub

1. Crea un repositorio nuevo en GitHub:
   - Ve a [github.com/new](https://github.com/new)
   - Nombre sugerido: `portafolio` o `mi-portafolio`
   - Elige **Public**
   - No marques "Add a README" (ya tienes archivos)
   - Clic en **Create repository**

2. En la carpeta de tu portafolio (donde está `index.html`), abre **PowerShell** o **Terminal** y ejecuta:

   ```powershell
   cd "C:\Users\zamor\Downloads\Portafolio"
   git init
   git add .
   git commit -m "Portafolio listo para Vercel"
   git branch -M main
   git remote add origin https://github.com/TU_USUARIO/TU_REPOSITORIO.git
   git push -u origin main
   ```

   Sustituye `TU_USUARIO` por **gabriela23456** y `TU_REPOSITORIO` por el nombre del repo que creaste (ej: `portafolio`).

   Si te pide usuario y contraseña, en GitHub ya no se usa contraseña: usa un **Personal Access Token** como contraseña, o configura Git con SSH.

---

## Paso 2: Conectar el repo con Vercel

1. Entra a [vercel.com](https://vercel.com) e inicia sesión (con tu cuenta de GitHub).
2. Clic en **Add New...** → **Project**.
3. En "Import Git Repository" elige el repo **portafolio** (o el nombre que le hayas puesto).
4. En **Configure Project**:
   - **Framework Preset:** Other
   - **Build Command:** déjalo vacío
   - **Output Directory:** `.` (un punto) o déjalo vacío
   - **Root Directory:** déjalo vacío
5. Clic en **Deploy**.

---

## Paso 3: Listo

En 1–2 minutos Vercel te dará una URL como:

`https://portafolio-xxxx.vercel.app`

Esa es la URL de tu portafolio. Puedes compartirla con empleadores.

- Para cambiar el nombre del proyecto o la URL: en el dashboard de Vercel → Project Settings → Domains.
- Cada vez que hagas `git push` a `main`, Vercel volverá a desplegar solo.

---

## Si no quieres usar Git todavía

1. Instala Vercel CLI: `npm i -g vercel`
2. En la carpeta del portafolio: `vercel`
3. Sigue las preguntas (login si hace falta, nombre del proyecto).
4. Te dará una URL de despliegue.

Si algo falla (error de build, 404, etc.), copia el mensaje de error y lo revisamos.
