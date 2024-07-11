import '../index.css'
import Kerala_family_review_pic from '../images/Kerala_family_review_pic.png'

const ReviewCard1 = () => {

    return (

        <>
            <div className='d-flex bg bg-dark'>
                <div className='justify-content-left ms-1 p-1'>
                    <div className="container d-flex border rounded bg-light" style={{ width: '480px', height: '270px' }}>
                        <div className="justify-content-left">
                            <div className="d-flex mt-1">
                                <div className="justify-content-left mt-2">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" color='#ea781a' fill="currentColor" class="bi bi-star-fill" viewBox="0 0 16 16">
                                        <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z" />
                                    </svg>
                                </div>
                                <div className="justify-content-right ms-2 mt-2 p-1">
                                    <p className="fw-bold text-dark">5</p>
                                </div>
                                <div className="text-dark justify-content-right ms-2 mt-2"><p className="text-danger border border-1 border-danger rounded p-1">Family</p></div>
                            </div>
                            <div>
                                <p className="fw-bold mb-2">Wonders of Kerala</p>
                                <p className="mb-5">We had a wonderful Kerala trip, everything was well organized, would like to visit again. Thank you for a memorable trip.</p>
                                <p className="fw-bold mb-1">Daksha</p>
                                <p>Travelled in Mar, 2024</p>
                            </div>
                        </div>
                    </div>
                </div>

                <div className='justify-content-right ms-2 p-1'>
                <div className="container d-flex border rounded bg-light" style={{ width: '480px', height: '270px' }}>
                        <div className="justify-content-left">
                            <div className="d-flex mt-1">
                                <div className="justify-content-left mt-2">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" color='#ea781a' fill="currentColor" class="bi bi-star-fill" viewBox="0 0 16 16">
                                        <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z" />
                                    </svg>
                                </div>
                                <div className="justify-content-right ms-2 mt-2 p-1">
                                    <p className="fw-bold">5</p>
                                </div>
                                <div className="justify-content-right ms-2 mt-2"><p className="text-danger border border-1 border-danger rounded p-1">Family</p></div>
                            </div>
                            <div>
                                <p className="fw-bold mb-2">Higlights of Kerala</p>
                                <p className="mb-5">Very well professionally planned, communicated & executed by our tour managers. Keep it up.</p>
                                <p className="fw-bold mb-1">Vivek Gupta</p>
                                <p>Travelled in Mar, 2024</p>
                            </div>
                        </div>
                        <div className="justify-content-right">
                            <img className="review-image" src={Kerala_family_review_pic} alt="family_pic" style={{ width: '150px', height: '100px' }} />
                        </div>
                    </div>
                </div>
                </div>
        </>








    )

}

export default ReviewCard1