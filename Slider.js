import './slider.css';

import img1 from "../images/img1.jpg"
import img2 from "../images/img2.jpg"
import img3 from "../images/img3.jpg"
import img4 from "../images/img4.jpg"
import {  useState } from 'react'



const Slider =()=>{
    const [slider,setSlider]=useState(0) //use state
  
    const data=[img1,img2,img3,img4]

    const handlePlus = ()=>{
      setSlider(slider ==data.length-1? 0: slider+1)
    }

    const handleMinus = ()=>{
        setSlider(slider== 0? data.length-1:slider-1)
    }

    return(
        <div className='slider  m-1 container w-75 '>
        <div className='slider-img'>
            <img src={data[slider]} alt=' kerala' style={{width:"100%" ,height:"40vh"}}/>
           
           
            
            <div className='btn'>
        <button onClick={handleMinus}>-</button>
            <button onClick={handlePlus}>-</button>
          
           <div className=' w-100'>
             Kerala, a state on India's tropical Malabar Coast,
              has nearly 600km of Arabian Sea shoreline. 
              It's known for its palm-lined beaches and backwaters, a network of canals. 
              Inland are the Western Ghats, mountains whose 
              slopes support tea, coffee and spice plantations as well as wildlife.
               National parks like Eravikulam and Periyar, plus Wayanad and other sanctuaries
                are home to elephants, langur monkeys and tigers...more
        </div>
        </div>
        </div>
        </div>
        
    )

}
export default Slider