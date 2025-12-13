const archStacksImage = import.meta.glob('../assets/stacks/*.{svg,png,jpg,jpeg,webp}', { eager: true });

const getImagePath = (filename) => {
    const path = `../assets/stacks/${filename}`;
    return archStacksImage[path]?.default || null;
}

export const archStacks =[
    {"label": "Deploy", "value": "Vercel", "icon": getImagePath('vercel.svg')},
    {"label": "JsRE", "value": "Node.js", "icon": getImagePath('nodejs.svg')},
    {"label": "Styling", "value": "CSS 3", "icon": getImagePath('css3.svg')},
    {"label": "Structure", "value": "HTML5", "icon": getImagePath('html5.svg')},
    {"label": "Library", "value": "React.js", "icon": getImagePath('react.svg')}
]