# Entrenador C172 v3 — Escuela de vuelo

Versión 2: añade el mando circular (botón dentro de un aro: izquierda/derecha = alerones, arriba/abajo = cabeceo). Se puede volver al yoke clásico en Ajustes → «Mando circular».

La versión anterior (v1) se mantiene aparte, sin cambios.

## Cambios v3
- Morro de cabina más pequeño (tapa menos el exterior).
- Mando elíptico por defecto: elipse con el volante dibujado; arrastra a los lados = alerones, arriba/abajo = cabeceo (arriba = morro arriba), con curva suave en el centro. Al soltar vuelve a neutro. En Ajustes puedes volver al mando circular o al volante clásico.
- Vista de cabina propia (colores y marcos de cada modelo).
- Panel de mandos y escenario ~1/3 más bajo; instrumentos redondos ocupan el ancho del móvil; (Arrow/L-39) tren como palanca vertical.


## Terreno procedural (c172-v4)
Paisaje: **Valle atlántico**. Costa al oeste (mar), prados con setos y parcelas irregulares, bosque mixto y de coníferas, ríos, pueblos con casas e iglesia, caseríos. Colinas hasta ~200 m. Cielo/niebla azul-húmedos.
- Relieve real en la física: el suelo, el efecto suelo y el choque leen la altura del terreno. La altitud del altímetro sigue siendo sobre el nivel del aeródromo (MSL); `aglFt` (altura sobre el suelo) está en el estado. Choque si la velocidad de cierre contra el terreno supera 6 m/s o la pendiente es >35° a más de 12 m/s.
- El aeródromo y su entorno son llanos (rampa suave), así que despegue, aterrizaje y lecciones no cambian.
- Detalle por shader (campos, caminos, bosque, agua, roca/nieve) + árboles, casas, iglesias... instanciados en trozos de 400 m alrededor del avión.
- Ajustes → «Relieve»: completo / ligero (menos objetos) / no (suelo plano anterior).
- Si el shader falla, cae a colores por vértice; si todo el terreno falla, queda el suelo plano antiguo.
- Procedural: no es un lugar real. La versión anterior se mantiene aparte, sin cambios.
