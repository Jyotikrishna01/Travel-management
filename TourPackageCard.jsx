import React from 'react';
import '../index.css';
import Last from '../components/Last'
import TravelPackageCard from '../components/card/TravelPackageCard'
import FilterForm from '../components/FilterForm'
import FAQs from './FAQs'
import kerala from '../CitiesIcon/kerala.jpg'
import ReviewCard2 from '../components/ReviewCard2'
// import ReadMoreReact from 'read-more-react';


const TourPackageCard = ()=>{

    return (
        <>
            <div>
            <h2>Kerala Tour Packages</h2>
                        <p><strong>The coastal grandeur in the arms of mother 
                            earth, cloaked with serene love, lies India’s Southern 
                            surreal.</strong></p>
                    <p>
                        <img src={kerala} alt="Kerala" style={{width:'180px',height:'150px',float:'right'}}/>
                    Vasco da Gama’s discovery of India for the western
                             world began with his first step in this land. God’s own Country, Kerala,
                              leaves so many visitors spellbound. The record has peaked and Kerala has 
                              managed to top the numbers every year. Kerala manages to satisfy all the
                               desires to escape into pure nature. With the classic backwaters and 
                               leisurely feels of the destination, it has always been the traveller’s
                                favourite choice.
                        We bring you the best deals at the best prices with our Kerala tour packages.
                        Vasco da Gama’s discovery of India for the western
                             world began with his first step in this land. God’s own Country, Kerala,
                              leaves so many visitors spellbound. The record has peaked and Kerala has 
                              managed to top the numbers every year. Kerala manages to satisfy all the
                               desires to escape into pure nature. With the classic backwaters and 
                               leisurely feels of the destination, it has always been the traveller’s
                                favourite choice.
                        We bring you the best deals at the best prices with our Kerala tour packages.
                    </p>
                    <span className="d-flex">
        <FilterForm/>
        <TravelPackageCard/>
    </span>
    <Last/>
    <FAQs/>
            </div>
        </>
    )
}

export default TourPackageCard