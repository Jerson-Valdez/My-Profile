import { useEffect } from 'react';
import './cursor.css';

export default function Cursor() {
    useEffect(() => {
        const cursorOuter = document.querySelector('.cursor-circle-outer');
        const cursorInner = document.querySelector('.cursor-circle-inner');
        const customCursor = document.querySelector('.custom-cursor');

        const handleMouseMove = (e) => {
            if (cursorOuter && cursorInner) {
                
                cursorOuter.style.transform = `translate(${e.clientX}px, ${e.clientY}px)`;
                cursorInner.style.transform = `translate(${e.clientX}px, ${e.clientY}px)`;
            }
        };

        window.addEventListener('mousemove', handleMouseMove);

        const interactiveElements = document.querySelectorAll(
            'a, button, .nav-link, .contact-btn, .theme-icon, .logo, [role="button"], [data-aos]'
        );

        const handleMouseEnter = () => {
            if (customCursor) {
                customCursor.classList.add('active');
            }
        };

        const handleMouseLeave = () => {
            if (customCursor) {
                customCursor.classList.remove('active');
            }
        };

        interactiveElements.forEach(el => {
            el.addEventListener('mouseenter', handleMouseEnter);
            el.addEventListener('mouseleave', handleMouseLeave);
        });

        return () => {
            window.removeEventListener('mousemove', handleMouseMove);
            interactiveElements.forEach(el => {
                el.removeEventListener('mouseenter', handleMouseEnter);
                el.removeEventListener('mouseleave', handleMouseLeave);
            });
        };
    }, []);

    return (
        <div className="custom-cursor">
            <div className="cursor-circle cursor-circle-outer"></div>
            <div className="cursor-circle cursor-circle-inner"></div>
        </div>
    );
}