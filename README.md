

# Challenge Técnico Dream Match 📱

>¿Alguna vez soñaste con ver un partido de fútbol en donde se enfrenten tus jugadores
favoritos? Imaginate poder armar dos equipos de 5 jugadores cada uno, en donde no
tengas ninguna limitación... posición, presupuesto, contrato, club, edad... tu mente es tu
límite.

## Funcionalidades implementadas ⚙️

1. Darle la bienvenida al usuario
2. Poder listar los equipos creados
3. Crear equipos
4. Darle un nombre a cada equipo y poder editarlo si es necesario
5. Poder eliminar un equipo creado
6. Impedir la creación de más de dos equipos
7. Ver el detalle de un equipo (listado de jugadores vinculado)
8. Poder vincular jugadores a un equipo
9. Poder comunicar gráficamente cuando ambos equipos están &quot;formados y completos&quot;

## Limitaciones contempladas 💥

1. No puede crearse más de 2 equipos.
3. No puede repetirse un mismo jugador en el equipo ni en el equipo adversario.
4. El listado de jugadores disponible debe cargarse de la API
5. Se entiende como equipo completo al equipo que tiene 5 jugadores.
6. Se entiende como equipo formado a un equipo creado y nombrado.
## ¿Cómo hacer funcionar este proyecto? 🚀

>Este proyecto cuanta con el consumo de un servicio de API, específicamente [API Football](https://apifootball.com/documentation/) del cual tendrás que registrarte y conseguir tu **FOOTBALL_API_KEY** que deberás colocar en un archivo **.env** en **la carpeta raíz del proyecto**.
 <br></br>*( Si eres un evaluador del challenge, este archivo .env lo encontrarás adjunto al email 😉 )*

```bash
# Luego de descargarte el proyecto

cd Dream-Match/Challenge

# instalamos dependencias

npm i

# Iniciamos el proyecto en nuestro emulador de Android (¡Debes abrir el emulador previamente!)

npx react-native run-android
```

