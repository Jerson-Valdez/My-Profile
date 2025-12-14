import { useParams } from 'react-router';
import './project.css';
import {projects} from '../../datas/projects.js';
import { useEffect, useState } from 'react';
import { 
    IconBrandGithub, 
    IconWorld, 
    IconArrowLeft, 
    IconCalendarMonth, 
    IconUsersGroup,
    IconCode  
} from '@tabler/icons-react';

export default function Project() {
    const projectID = useParams()
    const [projectData, setProjectData] = useState(null);

    useEffect(()=>{
        setProjectData(projects.find(project => project.id == projectID.id));
    }, [projectID])
    return(
        <main className="project-page-container">
            <a className={'back-btn'} href='/'>
                <IconArrowLeft size={24}/>
                Back to Projects
                </a>
            {projectData &&
                <div className="content">
                    <div className="header">
                        <h1>{projectData.title}</h1>
                        <p>{projectData.category}</p>
                    </div>
                    <p>{projectData["sub-title"]}</p>
                    <img src={projectData.image} alt={projectData.title} />
                    <div className="row">
                        <div className="row-box">
                            <h6><IconCalendarMonth size={24}/> Timeline</h6>
                            <p>{projectData["time-line"]}</p>
                        </div>
                        <div className="row-box">
                            <h6><IconUsersGroup size={24}/>Team Size</h6>
                            <p>{projectData["team-size"]}</p>                            
                        </div>
                        <div className="row-box">
                            <h6><IconCode size={24}/>My Role</h6>
                            <p>{projectData["my-role"]}</p>                            
                        </div>
                    </div>
                    <div className="tech-stacks">
                        <h2>Tech Stacks</h2>
                        <div className="stacks-list">
                            {projectData["tech-stacks"].map((stack, index) => (
                                <div className="stack-item" key={index}>
                                    <img 
                                        src={stack.icon} 
                                        alt={stack.label}
                                        title={stack.label}/>
                                    <h4>{stack.label}</h4>
                                </div>
                            ))}
                        </div>
                    </div>
                    <div className="overview">
                        <h2>Project Overview</h2>
                        <p>{projectData.overview}</p>
                    </div>
                    <div className="features">
                        <h2>Key Features</h2>
                        <ul className="features-list">
                            {projectData.features.map((feature, index) => (
                                <li 
                                    key={index}>
                                    <h4>{feature.label}:</h4> {feature.description}
                                </li>
                            ))}
                        </ul>
                    </div>
                    <div className="problem-solution">
                        <h2>Problem & Solution</h2>
                        <p>{projectData["problem-solution"]}</p>
                    </div>
                    <div className="actions">
                        <a href={projectData["project-links"].github} 
                            target="_blank" rel="noopener noreferrer">
                            <IconBrandGithub size={24}/>
                            Github
                            </a>
                        <a href={projectData["project-links"]["live-demo"]} 
                            target="_blank" rel="noopener noreferrer">
                            <IconWorld size={24}/>
                            Live Demo
                            </a>
                    </div>
                </div>
            }
        </main>
    )
}