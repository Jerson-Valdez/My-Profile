import './stacks.css';
import css3 from '../../../assets/stacks/css3.svg';
import html5 from '../../../assets/stacks/html5.svg';
import nodejs from '../../../assets/stacks/nodejs.svg';
import reactjs from '../../../assets/stacks/react.svg';
import vercel from '../../../assets/stacks/vercel.svg';
import android from '../../../assets/stacks/android.svg';
import figma from '../../../assets/stacks/figma.svg';
import firebase from '../../../assets/stacks/firebase.svg';
import git from '../../../assets/stacks/git.svg';
import github from '../../../assets/stacks/github.svg';
import javascript from '../../../assets/stacks/js.svg';
import infinityFree from '../../../assets/stacks/infinityFree.svg';
import java from '../../../assets/stacks/java.svg';
import mysql from '../../../assets/stacks/mysql.svg';
import php from '../../../assets/stacks/php.svg';
import vite from '../../../assets/stacks/vitejs.svg';
import ArchItem from '../../cards/arch item/ArchItem';
import tech from '../../../assets/float/tech.webm';
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