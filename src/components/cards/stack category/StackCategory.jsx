import './stack-category.css';

export default function StackCategory({label, stack, onToggle, isActive}) {
    return (
        <div className={`stack-category ${isActive ? 'active' : ''}`} onClick={() => onToggle(label)}>
            <h2>{label}</h2>
            <div className="stack-items">
                {stack.map((stackItem, i) => {
                    return (
                        <div className="stack-item" 
                            key={i}>
                            <img 
                                src={stackItem.icon} 
                                alt={stackItem.value} 
                                title={stackItem.value}/>
                        </div>
                        )
                    }
                    )}
            </div>
        </div>
    )
}