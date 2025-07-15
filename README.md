# 📦 Web Components desde Cero

Este repositorio contiene una serie de ejemplos prácticos para aprender **Web Components** de forma progresiva. Está
pensado para quienes quieren dominar esta tecnología **desde cero y con ejemplos reales**.

👨‍💻 Aprendemos juntos en cada paso, entendiendo cómo funcionan y **por qué vale la pena usarlos** para crear componentes
web modernos, encapsulados y reutilizables.

---

## 🎯 Objetivos del proyecto

- Comprender qué son los **Custom Elements**
- Aprender cómo y por qué usar el **Shadow DOM**
- Encapsular estilos y estructura del DOM
- Pasar **atributos dinámicos** a los componentes
- Reutilizar componentes desde otros módulos
- Prepararse para trabajar con **slots**, templates y eventos personalizados (próximamente)

---

## 🧩 Estructura del proyecto

```
wc-intro/
│
├── 01-first-web-component/
│   └── Ejemplo sin Shadow DOM (riesgos de no encapsular)
│
├── 02-shadow-encapsulado/
│   └── Ejemplo usando Shadow DOM correctamente
│
├── practica/
│   ├── modal/
│   └── card-click/
│       └── Integración entre componentes (card usa modal)
│
└── index.html
```

---

## 🚀 Cómo usarlo

1. Clona el proyecto:

```bash
git clone https://github.com/tuusuario/web-components-intro.git
```

2. Abre con Live Server (o tu navegador preferido)

```bash
cd web-components-intro
```

3. Abre cualquier carpeta `01`, `02`, etc. con tu navegador y explora.

---

## 🛠 Tecnologías utilizadas

- JavaScript nativo (sin frameworks)
- HTML5
- Web Components API (`customElements`, `attachShadow`, `connectedCallback`, etc.)
- CSS encapsulado

---

## 📺 En vivo por Twitch

📡 Este proyecto se desarrolla en directo por [Twitch](https://twitch.tv/dianfer19).  
¡Acompáñame mientras aprendemos, fallamos y creamos cosas útiles juntos! 😄

---

## 💡 Contribuye

¿Tienes ideas para más ejemplos o quieres practicar creando tus propios componentes? ¡Haz un fork y propón cambios!

---

## 📌 Próximos temas

- Uso de `slots` para contenido dinámico
- Observación de atributos (`observedAttributes`)
- Comunicación entre componentes (custom events)
- Testing básico y mejores prácticas

---

> ✨ Este es un proyecto abierto para compartir conocimiento, enseñar y aprender juntos sobre desarrollo moderno con Web
> Components.