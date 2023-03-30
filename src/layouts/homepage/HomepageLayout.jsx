import { Slider } from "../../components/slider/Slider"
import style from './HomepageLayout.module.css'

const HomepageLayout = (props) => {
    const { slides, children } = props
    return (
        <main>
            <section className={style.header}>
            <Slider slides={[]}></Slider>
            </section>
            <div className={style.otherSections}>
                <div>Hello</div>
                {children}
            </div>
        </main>
    )
}

export default HomepageLayout