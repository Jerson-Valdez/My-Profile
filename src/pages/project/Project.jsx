import { useParams } from 'react-router';
import './project.css';
import projectsData from '../../datas/projects.json';
import { useEffect, useState } from 'react';

export default function Project() {
    const projectID = useParams()
    const [projectData, setProjectData] = useState(null);
    const initialSrc = '../../';

    useEffect(()=>{
        setProjectData(projectsData.find(project => project.id == projectID.id));
    }, [projectID])
    return(
        <main className="project-page-container">
            <a className={'back-btn'} href='/'>
                <i className='ti ti-arrow-left'></i>Back to Projects
                </a>
            {projectData &&
                <div className="content">
                    <div className="header">
                        <h1>{projectData.title}</h1>
                        <p>{projectData.category}</p>
                    </div>
                    <p>{projectData["sub-title"]}</p>
                    <img src={initialSrc + projectData.image} alt={projectData.title} />
                    <div className="row">
                        <div className="row-box">
                            <h6><i className='ti ti-calendar-month'></i> Timeline</h6>
                            <p>{projectData["time-line"]}</p>
                        </div>
                        <div className="row-box">
                            <h6><i className='ti ti-users-group'></i>Team Size</h6>
                            <p>{projectData["team-size"]}</p>                            
                        </div>
                        <div className="row-box">
                            <h6><i className='ti ti-code'></i>My Role</h6>
                            <p>{projectData["my-role"]}</p>                            
                        </div>
                    </div>
                    <div className="tech-stacks">
                        <h2>Tech Stacks</h2>
                        <div className="stacks-list">
                            {projectData["tech-stacks"].map((stack, index) => (
                                <div className="stack-item" key={index}>
                                    <img 
                                        src={initialSrc + stack.icon} 
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
                            <i className="ti ti-brand-github"></i>
                            Github
                            </a>
                        <a href={projectData["project-links"]["live-demo"]} 
                            target="_blank" rel="noopener noreferrer">
                            <i className="ti ti-world"></i>
                            Live Demo
                            </a>
                    </div>
                </div>
            }
        </main>
    )
}