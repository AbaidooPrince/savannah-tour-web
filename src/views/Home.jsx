import DestinationList from "../components/destination/DestinationList"
import { Container } from "../layouts/grid/Grid"
import ThreeColumnSection from "../layouts/grid/ThreeColumnSection"
import HomepageLayout from "../layouts/homepage/HomepageLayout"

const Home = () => {
    return (
        <HomepageLayout>
            <div>
                <Container>
                    <DestinationList />
                    <div>
                        <ThreeColumnSection />
                    </div>
                </Container>
            </div>
        </HomepageLayout>
    )
}

export default Home