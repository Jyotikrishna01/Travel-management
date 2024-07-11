import NewsletterForm from "./NewsletterForm"

const Footer = () => {

    return (
        <>

            <div className="" style={{ backgroundColor: '#317256',height:'700px'}}>
                <div className="d-flex">
                <div className="justify-content-left m-1">
                    <div className="text-light m-1">
                        <h2 className="fw-bold m-1 p-1">Travello</h2>
                        <div className="p-3 m-1">
                            <h5>Travel, Discover and Explore!</h5>
                            <p>Subscribe to our newsletter to discover travel inspiration in your inbox.</p>
                        </div>
                    </div>
                    <div className="text-light m-1">
                        <NewsletterForm />
                    </div>
                </div>
                <div className="justify-content-right m-1">
                <div className="d-flex text-light">
                <div className="justify-content-left m-1">
                    <h5 className="fw-bold mb-3">About Us</h5>
                    <ul className="list-unstyled">
                        <li><a className="link-light text-decoration-none" href="#">Reviews</a></li>
                        <li><a className="link-light text-decoration-none" href="#">Tour Managers</a></li>
                        <li><a className="link-light text-decoration-none" href="#">Our Branches</a></li>
                        <li><a className="link-light text-decoration-none" href="#">Sales Partners</a></li>
                        <li><a className="link-light text-decoration-none" href="#">Careers</a></li>
                    </ul>
                </div>
                <div className="justify-content-right m-1">
                    <h5 className="fw-bold mb-3">Contact Us</h5>
                    <ul className="list-unstyled">
                        <li><a className="link-light text-decoration-none" href="#">Support</a></li>
                        <li><a className="link-light text-decoration-none" href="#">Feedback</a></li>
                        <li><a className="link-light text-decoration-none" href="#">Travel Offers</a></li>
                        <li><a className="link-light text-decoration-none" href="#">FAQ</a></li>
                        <li><a className="link-light text-decoration-none" href="#">Annual Return</a></li>
                    </ul>
                    
                </div>
                <div className="justify-content-right m-1">
                    <h5 className="fw-bold mb-3">Resources</h5>
                    <ul className="list-unstyled">
                        <li><a className="link-light text-decoration-none" href="#">Tour Status</a></li>
                        <li><a className="link-light text-decoration-none" href="#">Blog</a></li>
                        <li><a className="link-light text-decoration-none" href="#">Video Blogs</a></li>
                        <li><a className="link-light text-decoration-none" href="#">Articles</a></li>
                        <li><a className="link-light text-decoration-none" href="#">Travel Planner</a></li>
                        <li><a className="link-light text-decoration-none" href="#">Customized Travel Planner</a></li>
                    </ul>
                </div>
                </div>
                

            </div>
                </div>
                
                </div>
                


        </>
    )
}

export default Footer