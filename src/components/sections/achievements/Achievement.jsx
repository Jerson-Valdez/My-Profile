import AchievementCard from '../../cards/achievement card/AchievementCard';
import './achievement.css';
import achievementData from '../../../datas/achievements.json';
import { useRef, useEffect, useState } from 'react';

export default function Achievement() {
    const contentRef = useRef(null);
    const [activeIndex, setActiveIndex] = useState(0);

    const scrollLeft = () => {
        if (contentRef.current) {
            contentRef.current.scrollBy({ left: -500, behavior: 'smooth' });
        }
    };
    
    const scrollRight = () => {
        if (contentRef.current) {
            contentRef.current.scrollBy({ left: 500, behavior: 'smooth' });
        }
    };

    const goToSlide = (index) => {
        const scrollAmount = contentRef.current.children[index].offsetLeft - contentRef.current.offsetLeft;
        contentRef.current.scrollTo({
            left: scrollAmount,
            behavior: 'smooth'
        });
    };

    const handleScroll = () => {
        if (contentRef.current && contentRef.current.children.length > 0) {
            const scrollLeft = contentRef.current.scrollLeft;
            const card = contentRef.current.children[0];
            
            const style = window.getComputedStyle(contentRef.current);
            const gap = parseFloat(style.gap) || 0;
            
            const slideWidth = card.offsetWidth + gap;

            let newIndex = Math.round(scrollLeft / slideWidth);

            const maxIndex = achievementData.length - 1;
            if (newIndex > maxIndex) {
                newIndex = maxIndex;
            }

            setActiveIndex(newIndex);
        }
    };

    useEffect(() => {
        const content = contentRef.current;
        content.addEventListener('scroll', handleScroll);
        return () => {
            content.removeEventListener('scroll', handleScroll);
        };
    }, []);

    return(
        <section className='achievement-container' id='achievements'>
            <div className="header">
                <div className="title">
                    <h2>Milestone</h2>
                    <h2>& Recognition</h2>
                </div>
                <p>Defining moments and key achievements that shape my path as a developer.</p>
            </div>
            <div className="carousel-controls">
                <button className="carousel-btn prev-btn" onClick={scrollLeft}>
                    <i className="ti ti-chevron-left"></i>
                </button>
                <button className="carousel-btn next-btn" onClick={scrollRight}>
                    <i className="ti ti-chevron-right"></i>
                </button>
            </div>
            <div className="content" ref={contentRef} data-aos="fade-left" data-aos-duration="800" data-aos-delay="200">
                {achievementData.map((achievement, i) => (
                    <AchievementCard 
                        key={i}
                        image={achievement.image}
                        title={achievement.title}
                        description={achievement.description}
                        date={achievement.date}
                        where={achievement.where}
                        category={achievement.category}
                    />
                ))} 
            </div>
            <div className="carousel-dots">
                {achievementData.map((_, index) => (
                    <i 
                        key={index} 
                        className={`dot ${index === activeIndex ? 'active' : ''}`}
                        onClick={() => goToSlide(index)}>
                        </i>
                ))}
            </div>
        </section>
    )
}