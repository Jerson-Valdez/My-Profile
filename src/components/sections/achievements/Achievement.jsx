import AchievementCard from '../../cards/achievement card/AchievementCard';
import './achievement.css';
import { achievements } from '../../../datas/achievements.js';
import { useState } from 'react';
import { IconChevronLeft, IconChevronRight } from '@tabler/icons-react';

export default function Achievement() {
    const [activeIndex, setActiveIndex] = useState(0);
    const total = achievements.length;

    const scrollLeft = () => {
        setActiveIndex((prev) => (prev - 1 + total) % total);
    };

    const scrollRight = () => {
        setActiveIndex((prev) => (prev + 1) % total);
    };

    const goToSlide = (index) => {
        setActiveIndex(index);
    };

    return (
        <section className='achievement-container' id='achievements'>
            <div className="header">
                <div className="title">
                    <h2>Milestone</h2>
                    <h2>& Recognition</h2>
                </div>
                <p>Defining moments and key achievements that shape my path as a developer.</p>
            </div>

            <div className="carousel-controls">
                <button aria-label="Previous Achievement" className="carousel-btn prev-btn" onClick={scrollLeft}>
                    <IconChevronLeft size={24}/>
                </button>
                <button aria-label="Next Achievement" className="carousel-btn next-btn" onClick={scrollRight}>
                    <IconChevronRight size={24}/>
                </button>
            </div>

            <div className="content coverflow-stage">
                {achievements.map((achievement, i) => (
                    <AchievementCard 
                        key={i}
                        index={i}
                        activeIndex={activeIndex}
                        totalCards={total}
                        image={achievement.image}
                        title={achievement.title}
                        description={achievement.description}
                        date={achievement.date}
                        where={achievement.where}
                        category={achievement.category}
                        onClick={() => goToSlide(i)}
                    />
                ))} 
            </div>

            <div className="carousel-dots">
                {achievements.map((_, index) => (
                    <i 
                        key={index} 
                        className={`dot ${index === activeIndex ? 'active' : ''}`}
                        onClick={() => goToSlide(index)}
                    />
                ))}
            </div>
        </section>
    );
}