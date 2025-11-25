import './achievement-card.css'

export default function AchievementCard({image, title, description, date, where, category}) {
    return(
        <div className="achievement-card-container">
            <img src={image} alt={title} title={title}/>
            <div className="achievement-info">
                <div className="head">
                    <h3>{title}</h3>
                    <span>{category}</span>
                </div>
                <span className="date-location">{date} - {where}</span>
                <p>{description}</p>
            </div>
        </div>
    )
}