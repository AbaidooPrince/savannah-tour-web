import style from './Slider.module.css'

export const SlideItem = ({backgroundImage, cta, headline, subline}) => (<div>
    <div>
  <img className={style.banner} alt='rot'  src={backgroundImage}></img>
        {/* <h2>{headline}</h2>
        <p>{subline}</p>
        <a href={cta.page} className={style.ctaButton}>{cta.text}</a> */}
    </div>
</div>)

export const Slider = ({slides}) => {
    return (
        <div>
            {slides.length && slides.map(slide => <SlideItem {...slide}>
            </SlideItem>)}
        </div>
    )
}