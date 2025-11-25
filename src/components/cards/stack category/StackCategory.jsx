import './stack-category.css';

export default function StackCategory({label, stack}) {
    return (
        <div className="stack-category">
                <h5>{label}</h5>
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