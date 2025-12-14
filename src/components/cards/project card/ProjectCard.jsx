import { useNavigate } from 'react-router';
import './project-card.css'
import { IconBrandGithub, IconWorld } from '@tabler/icons-react'

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
                            <a href={links.github} aria-label={`${title} GitHub Link`} target="_blank" rel="noopener noreferrer" onClick={handleLinkClick}>
                                <IconBrandGithub size={24}/></a>
                        )}
                        {links["live-demo"] && (
                            <a href={links["live-demo"]} aria-label={`${title} Live Demo Link`} target="_blank" rel="noopener noreferrer" onClick={handleLinkClick}>
                                <IconWorld size={24}/></a>
                        )}
                    </div>
                </div>
            </div>
        </div>
    )
}