import { Row } from "../../layouts/grid/Grid"
import style from './Destination.module.css'
import DestinationItem from "./DestinationItem"


const DestinationList = () => {
    const list = [
        { image: 'https://source.unsplash.com/random', link: '/', text: 'Ethiopia'},
        { image: 'https://source.unsplash.com/random', link: '/', text: 'Brazil'},
        { image: 'https://source.unsplash.com/random', link: '/', text: 'Dehli'},
        { image: 'https://source.unsplash.com/random', link: '/', text: 'Dehli'},
        { image: 'https://source.unsplash.com/random', link: '/', text: 'Dehli'},
        // { image: 'https://source.unsplash.com/random', link: '/', text: 'Dehli'},
        // { image: 'https://source.unsplash.com/random', link: '/', text: 'Dehli'},
        // { image: 'https://source.unsplash.com/random', link: '/', text: 'Dehli'}
    ]
    return (
        <Row>
            <menu className={style.destinationList}>
                {list.length && list.map(item => <li key={`${item.link}_dest`}><DestinationItem {...item}  /></li>)}
            </menu>
        </Row>
    )
}

export default DestinationList