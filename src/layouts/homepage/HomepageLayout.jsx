import Slider from 'react-slick'
import { Container } from '../grid/Grid'
import style from './HomepageLayout.module.css'
const HomepageLayout = (props) => {
  const { banner, children } = props
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoPlay: true
  }
  return (
    <main style={{ height: '100vh' }}>
      <div className={style.slideWrapper}>
        <Container className='fluid'>
          {/* <Row> */}
          <Slider {...settings}>
            <div>
              <img
                className={style.slideItem}
                alt='banner'
                src='https://images.pexels.com/photos/4913546/pexels-photo-4913546.jpeg?auto=compress&cs=tinysrgb&w=6000&dpr=1'
              />
            </div>
            <div>
              <img
                className={style.slideItem}
                alt='banner'
                src='https://images.pexels.com/photos/3661973/pexels-photo-3661973.png?auto=compress&cs=tinysrgb&w=6000'
              />
            </div>
          </Slider>
          {/* </Row> */}
        </Container>
      </div>
      <div>
        <Container>
            <div>       
                {children}
            </div>
        </Container>
      </div>
      <div>
      </div>
    </main>
  )
}

export default HomepageLayout
