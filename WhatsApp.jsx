const WhatsApp = ()=>{

    const handleClick= ()=>{

    }
    return(
        <div>
            <form>
                <div>
                <label className="form-label">Send Message</label>
                <input type="text" className="form-control" placeholder="message"/>
                </div>
                <button className=" btn btn-outline-success border border-none  "
                onClick={handleClick} style={{marginLeft:'800px' ,marginTop:'310px'}}>&#xf232;<br/>send<br/> itinerary</button>
            </form>

        </div>
    )
}
export default WhatsApp
