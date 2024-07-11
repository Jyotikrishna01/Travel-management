import {BrowserRouter,Route,Routes } from 'react-router-dom'
import Contact from '../components/contact/Contact'
import India from '../components/india/India'
import World from '../components/world/World'
import Home from '../components/Home'
import Last from '../components/Last'
import Special from '../components/Special/Special'
import Tour from '../components/Package/Tour'
import { FaUserAlt } from "react-icons/fa";
import TourNavBar from './TourNavBar'
import TourPack from '../components/Package/TourPack'
import SignInForm from '../components/SignInForm'
import Tour_Detail from '../components/Tour_Detail/Tour_Detail'
import TourPackageCard from '../components/tour-package-card/TourPackageCard'
import TravelPackageCard from '../components/card/TravelPackageCard'
import FilterForm from '../components/FilterForm'
import Itinerary from '../components/Itinerary/Itinerary'
const TourRouter = ()=>{
return(
    <BrowserRouter>
        <Routes>
            <Route path='/' element= {<TourNavBar/>}>
            <Route path='user' element={ <SignInForm />}/>
                <Route path='/' index element={ <Home />}/>

                <Route path='india' element={ <India />}/>

                <Route path='world' element={ <World />}/>

                <Route path='special' element={ <Special/>}/>

                <Route path='tour' element={ <Tour/>}/>
                <Route path='contact' element={<Contact/>}/>
            </Route>
        </Routes>
    </BrowserRouter>
)

}

export default TourRouter