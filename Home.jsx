import {Link,Outlet} from 'react-router-dom'
import Carousel from '../components/Carousel/Carousel'
import { useNavigate } from "react-router-dom";

const Home = ()=>{
    const navigate = useNavigate()

    return (<>
        <Carousel/>
           </>
    )
}

export default Home