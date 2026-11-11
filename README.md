# Aula · Derecho Internacional Público y Privado

**Universidad Católica de Cuenca · Carrera de Derecho · Tercer ciclo · Paralelo 3A**
Prof. Carlos Eduardo Chica-Villacís · Septiembre 2026 – Febrero 2027

La segunda aula de la asignatura, con el material de lectura y las actividades que
corren fuera de Moodle. Sigue el mismo molde que `aula-mercantil` y `aula-filosofia`.

**Dirección publicada:** `https://carloseduardochica-art.github.io/aula-internacional/`

---

## Qué hay dentro

| Ruta | Qué es | Estado |
|---|---|---|
| `index.html` | La portada: los dos bloques y la evaluación final, con tareas y fechas del sílabo | Hecha |
| `contenido-b1/` | Contenido científico del Bloque 1 con forma de tratado (preámbulo, capítulos I–V, artículos 1.x.x, notas interpretativas y del docente, 3 esquemas SVG). Fuente del autocontrol B1. Se regenera con `_fuentes/contenido/armar.py` | Publicado |
| `contenido-b2/` | Contenido científico del Bloque 2, mismo formato (2 esquemas). Fuente del autocontrol B2 | Publicado |
| `foro-b1/` | AD · Foro de Fricción Epistémica · 8 pts · 3 rondas, nodos A (realista) y B (voluntarista) por paridad de cédula. Usa el Worker de `aula-mercantil`. Se regenera con `_fuentes/foro-b1/armar.py` | Publicado |
| `foro-b2/` | AD · Foro Adversarial «La trampa del orden público» · 7 pts · 3 rondas; magistrado Conservador (par) y Cosmopolita (impar); sucesión Laurent. Se regenera con `_fuentes/foro-b2/armar.py` | Publicado |
| `docente-invitado/` | AD · Docente invitado, Dr. Azhir Sandoval · 5 pts | Pendiente |
| `guia-1/` | AP · Convenio de Viena sobre Relaciones Diplomáticas · 10 pts | Pendiente |
| `guia-2/` | AP · Audio sobre los sujetos del DIPr · 10 pts | Pendiente |
| `autocontrol-b1/` | AA · Autocontrol del Bloque 1 · 15 pts · 17 apartados del Instrumento B1 con pregunta de control (variante par/impar por cédula, respuesta con hash), constancia PDF. Modelo Filosofía 2C. Se regenera con `_fuentes/autocontrol/armar.py` | Publicado |
| `investigacion-formativa/` | AA · Ensayo, parte 2: cierre · 10 pts | Pendiente |
| `autocontrol-b2/` | AA · Autocontrol del Bloque 2 · 15 pts · 18 apartados del Instrumento B2 | Publicado |
| `caso-harvard/` | Práctica sin nota previa al EF: **mapa de decisiones 3D** del caso Harvard EE. UU.–Camboya (globo Three.js r128 con 5 ciudades, rutas, HUD, 8 insignias, 4 finales; 5 nodos 1998-2004; sin WebGL funciona en 2D). Se regenera con `_fuentes/caso-harvard/armar.py` (plantilla3d.html + nodos de version2d.html). El EF (8 + 12) sigue en Moodle | Publicado |
| `docente/` | **Mesa del docente** (uso exclusivo del docente, no enlazada en la portada ni en el aula). Lee el ZIP «Descargar todas las entregas» de Moodle, los PDF sueltos o los códigos pegados a mano; verifica la firma de cada constancia, recalcula la nota desde el pase de avance, regenera la constancia en PDF y arma el reporte del grupo y la ficha de cada estudiante. Reconoce `PASE\|B1\|`, `PASE\|B2\|`, `B1\|`, `B2\|`, las actas de los foros (`PASEO\|AD1\|`, `PASEO\|AD2\|`, `AD1\|`, `AD2\|`) y el acta del mapa (`ARB\|`). Sale de la Mesa de Filosofía 2C; lee los bancos de los autocontroles publicados, así que no guarda copias que se queden viejas | Publicado |

Las tarjetas en «En preparación» se activan cuando su carpeta existe: se cambia
`pieza pendiente` por `pieza tarea` y el `span.btn.muerto` por un enlace.

## Láminas

Las imágenes de Google Flow van en `recursos/laminas/` con estos nombres exactos (16:9, JPG): `b1-portada.jpg`, `b1-westfalia.jpg`, `b2-portada.jpg`, `b2-bolonia.jpg`. Mientras no existan, la página oculta su lugar sola.

## Protección común

`recursos/proteccion.js` se incluye al final de cada actividad:
- bloquea copiar, cortar, seleccionar fuera de los campos, el clic derecho y los atajos Ctrl+P, Ctrl+S, Ctrl+U, Ctrl+C y Ctrl+X;
- si se imprime desde el menú, la hoja sale en blanco;
- difumina la página cuando la ventana pierde el foco, por ejemplo al abrir Recortes;
- firma la pantalla con el nombre y la cédula en cuanto el estudiante se identifica.

No puede impedir una foto con el celular ni la tecla Impr Pant del sistema; por eso firma la pantalla. Toda actividad nueva debe incluirla.

## Cómo se publica

Repositorio **público** `aula-internacional` → **Settings** → **Pages** → Source:
**Deploy from a branch** → Branch: **main**, carpeta **/ (root)** → **Save**.
El archivo `.nojekyll` evita que GitHub procese el sitio con Jekyll.

## Qué se cambia a mano y dónde

| Qué | Dónde |
|---|---|
| Fechas que muestra la portada | `index.html`, atributo `data-cierre` de cada tarjeta |
| Fecha de cierre de cada actividad | `*/index.html`, línea `var CIERRE_TAREA` |

Las fechas de la portada solo informan. Las que marcan una constancia como fuera
de plazo son las de `CIERRE_TAREA`. **Si cambia una, cambie las dos.**

## Fechas por confirmar

- **Guía 2 (audio):** el sílabo pone la entrega el 06-11-2026, antes de la asignación del 23-11. Se tomó como 06-12-2026 (día y mes invertidos); así está en Moodle 2067.
- **Investigación formativa:** el sílabo dice 09-12 y el cronograma marca «IF» el 10-11.
