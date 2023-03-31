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
                src='https://images.unsplash.com/photo-1679305289765-c899db4ce88a?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwxfDB8MXxyYW5kb218MHx8fHx8fHx8MTY4MDIxNDg5Mw&ixlib=rb-4.0.3&q=80&w=1080'
              />
            </div>
            <div>
              <img
                className={style.slideItem}
                alt='banner'
                src='https://images.unsplash.com/photo-1679305289765-c899db4ce88a?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwxfDB8MXxyYW5kb218MHx8fHx8fHx8MTY4MDIxNDg5Mw&ixlib=rb-4.0.3&q=80&w=1080'
              />
            </div>
          </Slider>
          {/* </Row> */}
        </Container>
      </div>
      <div className={style.otherSections}>
        <Container>
            <div className={style.otherSectionsContent}>       
                {children}
            </div>
        </Container>
      </div>
    </main>
  )
}

export default HomepageLayout
