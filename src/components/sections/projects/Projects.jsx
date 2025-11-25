import './projects.css' 
import ProjectCard from '../../cards/project card/ProjectCard'
import projectsData from '../../../datas/projects.json'

export default function Projects(){
    return(
        <section className='projects-container' id='projects' data-aos="fade-up" data-aos-duration="800">
            <div className="header">
                <div className="title">
                    <h2>Featured</h2>
                    <h2>Projects</h2>
                </div>
                <p>
                    Displayed below are projects, including academic and personal.
                     Take a closer look to witness my range of skills and expertise.
                </p>
            </div>
            <div className="content" data-aos="fade-up" data-aos-duration="800" data-aos-delay="200">
                {projectsData.map(project => (
                    <ProjectCard 
                        key={project.id}
                        id={project.id}
                        image={project.image} 
                        title={project.title} 
                        description={project.overview}
                        stacks={project["tech-stacks"]} 
                        links={project["project-links"]}/>
                ))} 
            </div>
        </section>
    )
}