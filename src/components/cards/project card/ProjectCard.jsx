import { useNavigate } from 'react-router';
import './project-card.css'

export default function ProjectCard({id, image, title, description, stacks, links}) {
    const navigate = useNavigate();

    const handleCardClick = () => {
        navigate(`/project/${id}`);
    };

    const handleLinkClick = (e) => {
        e.stopPropagation();
    };

    return(
        <div className="project-card-container" onClick={handleCardClick}>
            <img src={image} alt={title} title={title}/>
            <div className="project-info">
                <h3>{title}</h3>
                <p>{description}</p>
                <div className="bottom-project-info">
                    <div className="stacks-used">
                        {stacks.map((stack, index) => (
                            <img 
                                key={index} 
                                src={stack.icon} 
                                alt={stack.label} 
                                title={stack.label}/>
                        ))}
                    </div>
                    <div className="project-links">
                        {links.github && (
                            <a href={links.github} target="_blank" rel="noopener noreferrer" onClick={handleLinkClick}>
                                <i className='ti ti-brand-github'></i></a>
                        )}
                        {links["live-demo"] && (
                            <a href={links["live-demo"]} target="_blank" rel="noopener noreferrer" onClick={handleLinkClick}>
                                <i className='ti ti-world'></i></a>
                        )}
                    </div>
                </div>
            </div>
        </div>
    )
}