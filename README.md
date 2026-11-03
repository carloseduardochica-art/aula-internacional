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
| `foro-b1/` | AD · Foro de Fricción Epistémica · 8 pts · 3 rondas, nodos A (realista) y B (voluntarista) por paridad de cédula. Usa el Worker de `aula-mercantil`. Se regenera con `_fuentes/foro-b1/armar.py` | Publicado |
| `foro-b2/` | AD · Foro Adversarial «La trampa del orden público» · 7 pts | Pendiente |
| `docente-invitado/` | AD · Docente invitado, Dr. Azhir Sandoval · 5 pts | Pendiente |
| `guia-1/` | AP · Convenio de Viena sobre Relaciones Diplomáticas · 10 pts | Pendiente |
| `guia-2/` | AP · Audio sobre los sujetos del DIPr · 10 pts | Pendiente |
| `arbol-b1/` | AA · Árbol Ontológico «La Bóveda del Tratado» · 15 pts | Pendiente |
| `investigacion-formativa/` | AA · Ensayo, parte 2: cierre · 10 pts | Pendiente |
| `linea-tiempo/` | AA · Línea de tiempo y video-defensa · 15 pts | Pendiente |
| `caso-harvard/` | EF · Caso Harvard Estados Unidos–Camboya · 20 pts (8 + 12) | Pendiente |

Las tarjetas en «En preparación» se activan cuando su carpeta existe: se cambia
`pieza pendiente` por `pieza tarea` y el `span.btn.muerto` por un enlace.

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

- **Guía 2 (audio):** el sílabo pone la entrega el 06-11-2026, antes de la asignación del 23-11.
- **Investigación formativa:** el sílabo dice 09-12 y el cronograma marca «IF» el 10-11.
