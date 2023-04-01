import style from '../collage/Collage.module.css'

const Collage = (props) => {
    return (
    <div className={style.container}>
    <div className={style.middle}>
       {props.middle}
    </div>
    <div className={style.box1}>
        {props.box1}
    </div>
    <div className={style.box2}>{props.box2}</div>
    <div className={style.box3}>{props.box3}</div>
    <div className={style.box4}>{props.box4}</div>
  </div>
    )
}

export default Collage