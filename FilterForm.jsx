import { useState } from "react";
import DepartBetween from "./DepBet";



const FilterForm = ()=>{

    // react hook to keep track of state of component
    const [filter,setFilter] = useState({
        priceRange:[],
        departBetween:[],
        tourDuration:[],
        departCity:[],
        specialityTour:''
    })

    const [isSubmitted,setIsSubmitted] = useState(false)

    // event handler to submit form
    const handleSubmit = (e)=>{
        e.preventDefault(); // to stop reloading the whole page after submitting the form
        alert("Filters Submitted")
        setIsSubmitted(true)
    }

    // event handler to handle price range
    const handlePriceRangeChange = (e)=>{
        const {checked,value} = e.target
        if(checked){
            setFilter({...filter,priceRange:[...filter.priceRange,value]})
        }
        else{
            setFilter({...filter,priceRange:filter.priceRange.filter(item=>item!==value)})
        }
    }

    

    // event handler to handle tour duration
    const handleTourDurationChange = (e)=>{
        const {checked,value} = e.target
        if(checked){
            setFilter({...filter,tourDuration:[...filter.tourDuration,value]})
        }
        else{
            setFilter({...filter,tourDuration:filter.tourDuration.filter(item=>item!==value)})
        }
    }

    // event handler to handle departure city
    const handleDepartureCityChange = (e)=>{
        const {checked,value} = e.target
        if(checked){
            setFilter({...filter,departCity:[...filter.departCity,value]})
        }
        else{
            setFilter({...filter,departCity:filter.departCity.filter(item=>item!==value)})
        }
    }

    // event handler to handle package type
    const handleSpecialityTourChange = (e)=>{
        setFilter({...filter,specialityTour:e.target.value})
    }

    return (
        <div>
            {
            !isSubmitted &&
            <div className="filter border rounded mt-3 ps-2 pe-2">
                <form className="m-1 p-1" onSubmit={handleSubmit}>
                    <div className="m-1 p-1 text-primary">
                        <label className="fw-bold fs-5 mt-1">Filter Your Tour</label>
                    </div>
                    <div className="mb-1 text-primary">
                        <label htmlFor="i1" className="form-label fw-bold text-primary" >Price Range</label>
                        <div className="form-check">
                            <input className="form-check-input text-primary" type="checkbox" id="pr1" name="priceRange" value="10000 - 20000" checked={filter.priceRange.includes("10000 - 20000")}
                            onChange= {handlePriceRangeChange}/>
                            <label className="form-check-label text-primary" htmlFor="pr1">&#8377; 10,000 - &#8377; 20,000</label>
                        </div>
                        <div className="form-check text-primary">
                            <input className="form-check-input text-primary" type="checkbox" id="pr2" name="priceRange" value="20000 - 30000" checked={filter.priceRange.includes("20000 - 30000")}
                            onChange= {handlePriceRangeChange}/>
                            <label className="form-check-label text-primary" htmlFor="pr2">&#8377; 20,000 - &#8377; 30,000</label>
                        </div>
                        <div className="form-check text-primary">
                            <input className="form-check-input text-primary" type="checkbox" id="pr3" name="priceRange" value="30000 - 40000" checked={filter.priceRange.includes("30000 - 40000")}
                            onChange= {handlePriceRangeChange}/>
                            <label className="form-check-label text-primary" htmlFor="pr3">&#8377; 30,000 - &#8377; 40,000</label>
                        </div>
                        <div className="form-check text-primary">
                            <input className="form-check-input text-primary" type="checkbox" id="pr4" name="priceRange" value="40000 - & above" checked={filter.priceRange.includes("40000 - & above")}
                            onChange= {handlePriceRangeChange}/>
                            <label className="form-check-label text-primary" htmlFor="pr4">&#8377; 40,000 - & above</label>
                        </div>
                    </div>
                    <hr/>
                    <div className="mb-1 text-primary">
                        <label htmlFor="i2" className="form-label fw-bold text-primary">Depart Between</label>
                        <div className="mb-1">
                            <DepartBetween/>
                        </div>
                    </div>
                    <hr/>
                    <div className="mb-1 text-primary">
                        <label htmlFor="i3" className="form-label fw-bold text-primary">Tour Duration</label>
                        <div className="form-check text-primary">
                            <input className="form-check-input text-primary" type="checkbox" id="td1" name="tourDuration" value="4 - 6 days" checked={filter.tourDuration.includes("4 - 6 days")}
                            onChange= {handleTourDurationChange}/>
                            <label className="form-check-label text-primary" htmlFor="td1">4 - 6 days</label>
                        </div>
                        <div className="form-check text-primary">
                            <input className="form-check-input text-primary" type="checkbox" id="td2" name="tourDuration" value="6 - 8 days" checked={filter.tourDuration.includes("6 - 8 days")}
                            onChange= {handleTourDurationChange}/>
                            <label className="form-check-label text-primary" htmlFor="td2">6 - 8 days</label>
                        </div>
                        <div className="form-check text-primary">
                            <input className="form-check-input text-primary" type="checkbox" id="td3" name="tourDuration" value="8 - 10 days" checked={filter.tourDuration.includes("8 - 10 days")}
                            onChange= {handleTourDurationChange}/>
                            <label className="form-check-label text-primary" htmlFor="td3">8 - 10 days</label>
                        </div>
                    </div>
                    <hr/>
                    <div className="mb-1 text-primary">
                    <label htmlFor="i4" className="form-label fw-bold text-primary">Departure City</label>
                        <div className="form-check text-primary">
                            <input className="form-check-input text-primary" type="checkbox" id="dc1" name="departCity" value="bangalore" checked={filter.departCity.includes("bangalore")}
                            onChange= {handleDepartureCityChange}/>
                            <label className="form-check-label text-primary" htmlFor="dc1">Bangalore</label>
                        </div>
                        <div className="form-check text-primary">
                            <input className="form-check-input text-primary" type="checkbox" id="dc2" name="departCity" value="cochin" checked={filter.departCity.includes("cochin")}
                            onChange= {handleDepartureCityChange}/>
                            <label className="form-check-label text-primary" htmlFor="dc2">Cochin</label>
                        </div>
                        <div className="form-check text-primary">
                            <input className="form-check-input text-primary" type="checkbox" id="dc3" name="departCity" value="goa" checked={filter.departCity.includes("goa")}
                            onChange= {handleDepartureCityChange}/>
                            <label className="form-check-label text-primary" htmlFor="dc3">Goa</label>
                        </div>
                        <div className="form-check text-primary">
                            <input className="form-check-input text-primary" type="checkbox" id="dc4" name="departCity" value="mumbai" checked={filter.departCity.includes("mumbai")}
                            onChange= {handleDepartureCityChange}/>
                            <label className="form-check-label text-primary" htmlFor="dc4">Mumbai</label>
                        </div>
                        <div className="form-check text-primary">
                            <input className="form-check-input text-primary" type="checkbox" id="dc5" name="departCity" value="kolkata" checked={filter.departCity.includes("kolkata")}
                            onChange= {handleDepartureCityChange}/>
                            <label className="form-check-label text-primary" htmlFor="dc5">Kolkata</label>
                        </div>
                    </div>
                    <hr/>
                    <div className="mb-1 text-primary">
                    <label htmlFor="i5" className="form-label fw-bold text-primary">Speciality Tour </label>
                        <div className="form-check">
                            <input id="st1" className="form-check-input text-primary" type="radio" name="specialityTour" value="customized holidays" checked={filter.specialityTour==="customized holidays"} onChange={handleSpecialityTourChange}/>
                            <label htmlFor="st1" className="form-check-label text-primary">Customized Holidays</label>
                        </div>
                        <div className="form-check text-primary">
                            <input id="st2" className="form-check-input text-primary" type="radio" name="specialityTour" value="family" checked={filter.specialityTour==="family"} onChange={handleSpecialityTourChange}/>
                            <label htmlFor="st2" className="form-check-label text-primary">Family</label>
                        </div>
                        <div className="form-check text-primary">
                            <input id="st3" className="form-check-input text-primary" type="radio" name="specialityTour" value="group tour" checked={filter.specialityTour==="group tour"} onChange={handleSpecialityTourChange}/>
                            <label htmlFor="st3" className="form-check-label text-primary">Group Tour</label>
                        </div>
                        <div className="form-check text-primary">
                            <input id="st4" className="form-check-input text-primary" type="radio" name="specialityTour" value="women special" checked={filter.specialityTour==="women special"} onChange={handleSpecialityTourChange}/>
                            <label htmlFor="st4" className="form-check-label text-primary">Women's Special</label>
                        </div>
                    </div>
                    <div className="mb-1 text-primary">
                        <button className="btn btn-success mx-1" type="submit">Save</button>
                        <button className="btn btn-secondary mx-1" type="reset" onClick=
                            { ()=>setFilter({
                                priceRange:[],
                                departBetween:[],
                                tourDuration:[],
                                departCity:[],
                                specialityTour:''
                            }) }>Clear All</button> 
                    </div>
                </form>
            </div>
            }
            
        </div>
    )

}

export default FilterForm