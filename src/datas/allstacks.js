const allStacksImage = import.meta.glob('../assets/stacks/*.{svg,png,jpg,jpeg,webp}', { eager: true });

const getStackIconPath = (filename) => {
    const path = `../assets/stacks/${filename}`;
    return allStacksImage[path]?.default || null;
}

export const allStacks =[

    {"label": "Front-end", 
        "stack": [
            {"value": "React.js", "icon": getStackIconPath('react.svg'), "years": 1},
            {"value": "HTML5", "icon": getStackIconPath('html5.svg'), "years": 3},
            {"value": "CSS 3", "icon": getStackIconPath('css3.svg'), "years": 3},
            {"value": "Vite.js", "icon": getStackIconPath('vitejs.svg'), "years": 1},
            {"value": "Figma", "icon": getStackIconPath('figma.svg'), "years": 2},
            {"value": "JavaScript", "icon": getStackIconPath('js.svg'), "years": 2}
        ]
    },
    {"label": "Back-end", 
        "stack": [
            {"value": "Node.js", "icon": getStackIconPath('nodejs.svg'), "years": 1},
            {"value": "Java", "icon": getStackIconPath('java.svg'), "years": 3},
            {"value": "PHP", "icon": getStackIconPath('php.svg'), "years": 1}
        ]
    },
    {"label": "Database", 
        "stack": [
            {"value": "MySQL", "icon": getStackIconPath('mysql.svg'), "years": 2},      
            {"value": "Firebase", "icon": getStackIconPath('firebase.svg'), "years": 1},
            {"value": "MS SQL", "icon": getStackIconPath('mssql.svg'), "years": 2}    
        ]
    },
    {"label": "Version Control", 
        "stack": [
            {"value": "Git", "icon": getStackIconPath('git.svg'), "years": 2},
            {"value": "GitHub", "icon": getStackIconPath('github.svg'), "years": 2}
        ]
    },
    {"label": "Deployment & Hosting", 
        "stack": [
            {"value": "Vercel", "icon": getStackIconPath('vercel.svg'), "years": 1},
            {"value": "Infinity Free", "icon": getStackIconPath('infinityFree.svg'), "years": 2}
        ]
    },
    {"label": "Mobile Development", 
        "stack": [
            {"value": "Android", "icon": getStackIconPath('android.svg'), "years": 1}
        ]
    }
]