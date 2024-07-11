import { useState } from "react"

const NewsletterForm = () => {

    // react hook to keep track of state of component
    const [newsletter, setNewsletter] = useState({
        fullName: '',
        contactNo: '',
        emailId: ''

    })

    const [isSubmitted, setIsSubmitted] = useState(false)

    // event handler to submit form
    const handleSubmit = (e) => {
        e.preventDefault(); // to stop reloading the whole page after submitting the form
        alert("Form Submitted")
        setIsSubmitted(true)
    }

    // event handler to handle full name change
    const handleFullNameChange = (e) => {
        setNewsletter({ ...newsletter, fullName: e.target.value })
    }

    // event handler to handle contact number
    const handleContactChange = (e) => {
        setNewsletter({ ...newsletter, contactNo: e.target.value })
    }


    return (

        <>
            {
                !isSubmitted &&
                <div className="container">
                    <form onSubmit={handleSubmit}>
                        <div className="d-flex">
                        <div className="justify-content-left mb-3">
                        <div className="mb-1">
                            <label htmlFor="it" className="form-label">Full Name</label>
                            <input id="it" className="form-control" value={newsletter.fullName} onChange={handleFullNameChange} required />
                        </div>
                        <div className="mb-1">
                            <label htmlFor="cn" className="form-label">Contact No</label>
                            <input id="cn" className="form-control" type="tel" value={newsletter.contactNo} onChange={handleContactChange} pattern="[0-9]{10}" maxLength={10} required />
                        </div>
                        </div>
                        <div className="justify-content-right ms-3">
                        <div className="mb-1">
                        <label htmlFor="em" className="form-label">Email Id</label>
                        <input id="em" className="form-control" type="email" value={newsletter.emailId} onChange={(e)=>setNewsletter({...newsletter,emailId:e.target.value})} required />
                    </div>
                    <button className="btn btn-warning mt-1 p-2" type="submit">Subscribe</button>
                        </div>
                        </div>
                        
                        
                    </form>
                </div>
            }
        </>
    )

}

export default NewsletterForm