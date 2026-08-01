import './achievement-card.css';

export default function AchievementCard({
    image, 
    title, 
    description, 
    date, 
    where, 
    category,
    index,
    activeIndex,
    totalCards,
    onClick
}) {
    let offset = index - activeIndex;

    if (offset > totalCards / 2) offset -= totalCards;
    if (offset < -totalCards / 2) offset += totalCards;

    const absOffset = Math.abs(offset);

    const rotateY = offset === 0 ? 0 : offset > 0 ? -45 : 45;
    const translateX = offset * 180; 
    const translateZ = -absOffset * 120;
    const scale = Math.max(0.65, 1 - absOffset * 0.15);
    const opacity = absOffset > 3 ? 0 : 1 - absOffset * 0.25;

    const cardStyle = {
        transform: `translateX(${translateX}px) translateZ(${translateZ}px) rotateY(${rotateY}deg) scale(${scale})`,
        zIndex: 100 - absOffset,
        opacity: opacity,
        pointerEvents: offset === 0 ? 'auto' : 'all',
    };

    return (
        <div 
            className={`achievement-card-wrapper ${offset === 0 ? 'active' : ''}`} 
            style={cardStyle}
            onClick={onClick}
>
            <div className="achievement-card-container">
                <img src={image} alt={title} title={title} />
                <div className="achievement-info">
                    <div className="head">
                        <h3>{title}</h3>
                        <span>{category}</span>
                    </div>
                    <span className="date-location">{date} - {where}</span>
                    <p>{description}</p>
                </div>
            </div>
        </div>
    );
}