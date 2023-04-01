import style from './Collage.module.css'
const CollageItem = ({backgroundImage, place}) => (<div style={{backgroundImage: `url(${backgroundImage})`}} className={style.collageItem}>
    <div className={style.collageItemContent}>
        <p clas>I'm a paragraph. Click here to add your own text and edit me. I'm a paragraph. Click here to add your own text and edit me.</p>
        <h3>{place}</h3>
    </div>
</div>)

export default CollageItem