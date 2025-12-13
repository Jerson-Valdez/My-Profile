import './stacks.css';
import ArchItem from '../../cards/arch item/ArchItem';
import tech from '../../../assets/float/tech.webm';
import StackCategory from '../../cards/stack category/StackCategory';
import {archStacks} from '../../../datas/archstacks.js';
import {allStacks} from '../../../datas/allstacks.js';
import { useState, useEffect } from 'react';

export default function Stacks() {
    const [selectedCategories, setSelectedCategories] = useState([]);

    function getRandomColor() {
        const letters = '0123456789ABCDEF';
        let color = '#';
        for (let i = 0; i < 6; i++) {
            color += letters[Math.floor(Math.random() * 16)];
        }
        return color;
    }

    useEffect(() => {
        console.log('Selected Categories from parent:', selectedCategories);
    }, [selectedCategories]);

    function handleCategoryToggle(label) {
        setSelectedCategories(prevSelected => {
            if (prevSelected.includes(label)) {
                return prevSelected.filter(item => item !== label);
            } else {
                return [...prevSelected, label];
            }
        });
    }

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
                            onToggle={handleCategoryToggle}
                            isActive={selectedCategories.includes(category.label)}
                        />
                    )
                })}
            </div>
            {
                selectedCategories.length > 0 && (
                    <div className="selected-categories">
                        <h2>Stacks Experience</h2>
                        <div className="label">
                            <h3>Stacks</h3>
                            <h3>Years</h3>
                        </div>
                        <ul>
                            {allStacks.filter(category => selectedCategories.includes(category.label)).map((category, index) => (
                                category.stack.map((stackItem, i) => (
                                    <div className="stack" key={`${index}-${i}`} style={{'--random-color': getRandomColor()}}>
                                        <img src={stackItem.icon} alt={stackItem.value} title={stackItem.value} />
                                        <p>{stackItem.years}</p>
                                    </div>
                                ))
                            ))}
                        </ul>
                    </div>
                )
            }
        </section>
    )
}