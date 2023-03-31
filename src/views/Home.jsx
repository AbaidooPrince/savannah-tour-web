import DestinationList from "../components/destination/DestinationList"
import { Container } from "../layouts/grid/Grid"
import HomepageLayout from "../layouts/homepage/HomepageLayout"

const Home = () => {
    return (
        <HomepageLayout>
            <div>
                <Container>
                    <DestinationList />
                </Container>
            </div>
        </HomepageLayout>
    )
}

export default Home