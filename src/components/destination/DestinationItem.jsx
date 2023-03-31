import style from './Destination.module.css'

const DestinationItem = (props) => {
    const { image, link, text } = props
    return (
        <div className={style.destinationItem}>
        <div>
            <img alt='destination' src={image}></img>
        </div>
        <div>
            {text}
        </div>
        </div>
    )
}

export default DestinationItem