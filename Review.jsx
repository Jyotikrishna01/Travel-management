import color from '../CitiesIcon/color.jpg'
import equal from '../CitiesIcon/equal.jpg'
import bg from '../CitiesIcon/bg.jpg'

import './slider.css';



const Review = ()=>{
    const data=[

        {
            name:"Neha Patil",
            review:'Lorem ipsum dolor sit amet consectetur adipisicing elit. Expedita atque dolore repudiandae ad labore soluta earum molestiae, aliquam odit, blanditiis alias quia! Earum doloribus voluptatem neque facere itaque omnis odio?',
            image:color
        },
        {
            name:"Ramesh Mehara",
            review:'Lorem ipsum dolor sit amet consectetur adipisicing elit. Expedita atque dolore repudiandae ad labore soluta earum molestiae, aliquam odit, blanditiis alias quia! Earum doloribus voluptatem neque facere itaque omnis odio?',
            image:equal
        },
        {
            name:"Seema Thorat",
            review:'Lorem ipsum dolor sit amet consectetur adipisicing elit. Expedita atque dolore repudiandae ad labore soluta earum molestiae, aliquam odit, blanditiis alias quia! Earum doloribus voluptatem neque facere itaque omnis odio?',
            image:bg
        },
        /* {
            name:"sahil kumar",
            review:'Lorem ipsum dolor sit amet consectetur adipisicing elit. Expedita atque dolore repudiandae ad labore soluta earum molestiae, aliquam odit, blanditiis alias quia! Earum doloribus voluptatem neque facere itaque omnis odio?',
            image:img8
        },
        {
            name:"Rakhi Patel",
            review:'Lorem ipsum dolor sit amet consectetur adipisicing elit. Expedita atque dolore repudiandae ad labore soluta earum molestiae, aliquam odit, blanditiis alias quia! Earum doloribus voluptatem neque facere itaque omnis odio?',
            image:img9
        }, */
        
    ]
    return(
        <div className=" m-2  p-3">
            <div className="mt-3 border border-2-dark review ">
                {data.map((d)=>(
                    <div className=" border border-2-dark mt-2  text-black   rounded-xl-">
                        <div className="  rounded-t-xl bg-primary text-center img2">
                            <img src={d.image} alt="" className='img3'/>
                        </div>
                        <div className='p-2 mb-2  name'>
                            <p className='text-xl font-semibold'>{d.name} </p>
                            <p>{d.review} </p>
                            <button className='bg-info text-dark text-lg px-3 py-1 rounded-xl'>Read More</button>
                        </div>
                    </div>

                ))}

            </div>

        </div>
    )
}


export default Review