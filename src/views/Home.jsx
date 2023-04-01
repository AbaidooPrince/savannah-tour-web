import DestinationList from "../components/destination/DestinationList"
import Tour from "../components/tours/Tour"
import Collage from "../layouts/collage/Collage"
import CollageItem from "../layouts/collage/CollageItem"
import { Container } from "../layouts/grid/Grid"
import ThreeColumnSection from "../layouts/grid/ThreeColumnSection"
import HomepageLayout from "../layouts/homepage/HomepageLayout"

const Home = () => {
    return (
        <HomepageLayout>
            <div>
                <Container>
                    <section>
                    <Collage
                        box1={<CollageItem place='Hawaii Island' backgroundImage="https://images.pexels.com/photos/206648/pexels-photo-206648.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" />}
                        middle={<CollageItem place='County Forest' backgroundImage='https://images.pexels.com/photos/3601456/pexels-photo-3601456.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1' />}
                        box2={<CollageItem place='Cape Coast Castle' backgroundImage="https://images.pexels.com/photos/1036148/pexels-photo-1036148.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"/>}
                        box3={<CollageItem place='Icy Plai' backgroundImage="https://images.pexels.com/photos/1036148/pexels-photo-1036148.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"/>}
                        box4={<CollageItem place='Twin Tower' backgroundImage="https://images.pexels.com/photos/1036148/pexels-photo-1036148.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"/>}
                    />
                    </section>
                    {/* <DestinationList /> */}
                    <section>
                    </section>
                </Container>
            </div>
        </HomepageLayout>
    )
}

export default Home