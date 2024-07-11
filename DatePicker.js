//import './slider.css'
import React , {useState} from 'react'


function DatePicker() {
    const [disable,setDisable] = useState(true)
    const [todate,setTodate] = useState([]);
    const [fromdate ,setFromdate] =useState([]);

    const [todateformat,setTodateformat] =useState(' ')
    const [fromdateformat,setFromdateformat]=useState(' ');

    const handletodate =(e)=>{
        const gettodatevalue = e.target.value;
        const setdateformat = gettodatevalue.split(' -');
        const settoyear=setdateformat[0];
        const settomonth = setdateformat[1]
        const settodate= setdateformat[2];
     
         const  settodateformat = settoyear+" "+settomonth+" "+settodate;
         
        setTodate(gettodatevalue);
        setTodateformat(settodateformat);
        setDisable(false)
        
        
       //console.log(setToDateFormat);
       }
    const handlefromdate =(e)=>{
        const getfromdatevalue = e.target.value;
        const setfromformat = getfromdatevalue.split(" - ");
        const setfromyear=setfromformat[0];
        const setfrommonth = setfromformat[1]
        const setfromdate= setfromformat[2];
     
         const  setfromformatdate = setfromyear+" "+setfrommonth+" "+setfromdate;
         setFromdate(getfromdatevalue)
         
        setFromdateformat(setfromformatdate);
       // console.log(setFromFormatDate);
    
    
    
    }

    const handleSubmit=(e)=>{
        e.preventDefault();

        //alert("todate "+toDate+ " form date" +fromDate)

        if(todateformat > fromdateformat)
            {

                alert("please select the valid date")
        }else{
            alert("Successfull!")
        }

    }
   
    return(

        
        
        <div className='row ft-hight m-2 mt-3 container border border-2 rounded w-100 p-2 bg-secondary'>
            <div className='co-sm-8 mt-3' style={{height:'600px'}}>
                <h4 className='mb-4 me-3' style={{backgroundColor:"pink" ,width:'300px'}}> Select Derparture Date</h4>

                <form onSubmit={handleSubmit}>
                    <div className='row-mb-4'>
                        <label className='col-sm-2 col-from-label'>To </label>
                        <div className='col-sm-5 w-50'>
                            <input type='date' className='form-control' name='todate' placeholder="dd/mm/yyyy"
                            onChange={(e)=>handletodate(e)} />

                        </div>
                        <label className='col-sm-2 col-form-label'>From</label>
                        <div className='col-sm-5 w-50'>
                            <input className='form-control' name='fromdate' placeholder='dd-mm-yyyy' type='date'
                            onChange={(e)=>handlefromdate(e)} disabled={disable} />

                        </div>
                       </div>
                       
                       <button className='btn btn-success 'style={{marginTop:'5px'}} >Submit</button>
                    
                       </form>
                </div>
                  </div>
                  
            
           
        
    );
}
export default DatePicker;