import Slider from "react-slick"
import { Container, Row } from "../../layouts/grid/Grid"
import style from './Destination.module.css'
import DestinationItem from "./DestinationItem"


const DestinationList = () => {
    const settings = {
      infinite: true,
      speed: 500,
      slidesToShow: 6,
      slidesToScroll: 2,
      autoPlay: true
    }
    const list = [
        { image: 'https://source.unsplash.com/random', link: '/', text: 'Ethiopia'},
        { image: 'https://source.unsplash.com/random', link: '/', text: 'Brazil'},
        { image: 'https://source.unsplash.com/random', link: '/', text: 'Dehli'},
        { image: 'https://source.unsplash.com/random', link: '/', text: 'Dehli'},
        { image: 'https://source.unsplash.com/random', link: '/', text: 'Dehli'},
        { image: 'https://source.unsplash.com/random', link: '/', text: 'Dehli'},
        { image: 'https://source.unsplash.com/random', link: '/', text: 'Dehli'},
        { image: 'https://source.unsplash.com/random', link: '/', text: 'Dehli'}
    ]
    return (
        <Container className={style.destinationList}>
            <div>
                <h3>Top Destinations accross the world</h3>
            </div>
                <Slider className={style.destinationList} {...settings}>
                    {list.length && list.map(item => <DestinationItem {...item}  /> )}
                </Slider>
        </Container>
    )
}

export default DestinationList