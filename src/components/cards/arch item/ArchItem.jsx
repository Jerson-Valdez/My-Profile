import './arch-item.css'

export default function ArchItem({icon, value, label}) {
    return (
        <div className="arch-item">
            <img src={icon} alt={value} className='stack-icon'/>
            <p>{value}</p>
            <p className='label'>{label}</p>
        </div>
    )
}