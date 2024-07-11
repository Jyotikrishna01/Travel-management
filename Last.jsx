import Tour_Detail from "./Tour_Detail/Tour_Detail"
import Itinerary from './Itinerary/Itinerary'
import DatePicker from './DatePicker'
import Tour_Information from './Tour_Information/Tour_Information'
import Need_To_Know from './Need_To_Know/Need_To_Know'
import Upgrade from './Upgrade/Upgrade'
const Last = () =>{

    return(
        <div className="bg bg-light row">
            <div className="col">
            <Itinerary/>
            </div>
           <div className="col">
           <Tour_Detail/>
           </div>
            <div className="row">
                <div className="col">
                    <DatePicker/>
                </div>
                <div className="col"> 
                <Need_To_Know/>
                <Upgrade/> 
                </div>

            </div>
        </div>
    )
}
export default Last