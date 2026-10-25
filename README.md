# Entrenador Aero L-39 Albatros — Escuela de vuelo

App independiente (no toca C172 ni Arrow). Turborreactor de entrenamiento: motor con respuesta lenta (ralentí→95 % ≈ 6 s), EGT, arranque con secuencia (batería, bombas, llave, arranque), reencendido en vuelo, aerofrenos, tren/flaps con límites, control con presión dinámica, efecto Mach, 24 lecciones y 4 checklists.

Publicar: sube la carpeta entera (index.html, manifest.json, sw.js, iconos) a Netlify Drop / GitHub Pages / Vercel. iPhone: Safari → Compartir → Añadir a pantalla de inicio.

## Límites (honestos)
- Modelo simplificado, NO validado contra un avión real. Inercias, tren y curva de empuje estimados.
- Ascenso a nivel del mar ~4500 fpm (real ~4100), Vmax ~391 kt, carrera de despegue ~600 m (real ~530 m).
- Velocidades en kt (no km/h). Límites (tren/flaps 190/170 kt), arranque y reencendido: aproximaciones didácticas; verifica con el manual de vuelo.
- Sin eyección, un solo depósito, sin depósitos de punta de ala en la física.
- Solo para aprender procedimientos y sensaciones; no sustituye instrucción real.

## Cambios v2
- Morro de cabina más pequeño.
- Mando elíptico por defecto con una palanca (stick) dibujada con botones rojos: lados = alerones, arriba/abajo = cabeceo. Ajustes permite volver al circular.

## Ajuste a datos publicados (v2)
Fuentes: especificaciones públicas del L-39C (no el manual de vuelo original).
- Vs1 97 kt, Vs0 84 kt, Vs 25° ≈ 90 kt (publicado 97/84/90).
- Masa vacía 3565 kg, combustible interno 824 kg.
- Ascenso a nivel del mar ~4370 fpm (publicado 4330), Vmax a nivel del mar ~385 kt (publicado 378).
- Despegue con flaps 25°, rotación a 100 kt y tirón firme: ~480 m (publicado 480 m a 4300 kg). Si rotas tarde o flojo, más.
- NO encontrado en fuentes públicas: límites de tren/flaps (190/170 kt), velocidades de aproximación y toma (120/105 kt), parámetros de arranque y reencendido. Siguen siendo estimaciones didácticas: verifícalas con el manual.
- Corregido: el arranque en caliente ahora daña el motor tras 3 s por encima de 780 °C (en la primera versión no lo hacía).
- Vista de cabina propia (colores y marcos de cada modelo).
