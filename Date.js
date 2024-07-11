import React  from "react";

const Date = ()=>{

    const showdate = new Date();
    const displaytodaydate = showdate.getDate() + '/' +  (showdate.getMonth()+1) + '/' + showdate.getfullYear();
    
    return(
        <div>
            <input type="text" value={displaytodaydate} readOnly="true"/>
        </div>
    )

}

export default Date;