import './stacks.css';
import ArchItem from '../../cards/arch item/ArchItem';
import tech from '/assets/float/tech.webm';
import StackCategory from '../../cards/stack category/StackCategory';
import archStacks from '../../../datas/archstacks.json';
import allStacks from '../../../datas/allstacks.json';

export default function Stacks() {

    return(
        <section className="stacks-container" id='skills'>
            <div className="header">
                <div className="title">
                    <h2>Tech</h2>
                    <h2>Stacks</h2>
                    <video autoPlay loop muted playsInline className="tech-video">
                        <source src={tech} type="video/webm" />
                    </video>
                </div>
                <p>Technologies I work with to build exceptional digital experiences</p>
                <p>This website is made with:</p>
            </div>
            <div className="architecture-component">    
                
                <div className="arch-list" data-aos="fade-right" data-aos-duration="1000">
                    {archStacks.map((stack, index) => (
                        <ArchItem 
                        key={index}
                        label={stack.label} 
                        icon={stack.icon} 
                        value={stack.value} 
                        />
                    ))} 
                </div>
            </div>
            <p>The tools I leverage to engineer practical solutions</p>
            <div className="all-stacks-container" data-aos="fade-up" data-aos-duration="1000">
                {allStacks.map((category, idx) => {
                    return (
                        <StackCategory
                            key={idx}
                            label={category.label}
                            stack={category.stack}
                        />
                    )
                })}
            </div>
        </section>
    )
}