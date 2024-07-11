import '../index.css'


const ReviewCard2 = () => {

    return (

        <>
            <div className='d-flex row' style={{color:'black'}}>
                <div className='justify-content-left ms-3 p-1 col'>
                    <div className="container d-flex border rounded bg-light" style={{ width: '480px', height: '500px' }}>
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
                                <p className="text-dark fw-bold mb-2">Higlights of Kerala</p>
                                <p className="text-dark mb-5">Good organization and planning. Good tour managers. Managers were supportive and well spoken. Nicely done.<br/>Keep it up.</p>
                                <p className="text-dark fw-bold mb-1">Mohan Sharma</p>
                                <p>Travelled in Mar, 2024</p>
                            </div>
                        </div>
                    </div>
                </div>

                <div className='justify-content-right ms-3 p-1 col'>
                <div className="container d-flex border rounded bg-light" style={{ width: '480px', height: '500px' }}>
                        <div className="justify-content-left">
                            <div className="d-flex mt-1">
                                <div className="justify-content-left mt-2 text-dark">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" color='#ea781a' fill="currentColor" class="bi bi-star-fill" viewBox="0 0 16 16">
                                        <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z" />
                                    </svg>
                                </div>
                                <div className="text-dark justify-content-right ms-2 mt-2 p-1">
                                    <p className="text-dark fw-bold">4</p>
                                </div>
                                <div className="text-dark justify-content-right ms-2 mt-2"><p className="text-danger border border-1 border-danger rounded p-1">Senior's Special</p></div>
                            </div>
                            <div>
                                <p className="text-dark fw-bold mb-2">Senior's Special Kerala</p>
                                <p className="text-dark mb-5">Tour was wonderful tour managers were very cooperative. They took good care of everyone. They explained all sight scenes nicely.</p>
                                <p className="text-dark fw-bold mb-1">Shanta</p>
                                <p>Travelled in Mar, 2024</p>
                            </div>
                        </div>
                    </div>
                </div>
                {/* <div className='text-dark justify-content-right ms-3 p-1 col'>
                <div className="text-darkcontainer d-flex border rounded bg-light" style={{ width: '480px', height: '500px' }}>
                        <div className="text-dark justify-content-left">
                            <div className="text-dark d-flex mt-1">
                                <div className="text-dark justify-content-left mt-2">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" color='#ea781a' fill="currentColor" class="bi bi-star-fill" viewBox="0 0 16 16">
                                        <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z" />
                                    </svg>
                                </div>
                                <div className="text-darkjustify-content-right ms-2 mt-2 p-1">
                                    <p className="text-dark fw-bold">3</p>
                                </div>
                                <div className="text-dark justify-content-right ms-2 mt-2"><p className="text-danger border border-1 border-danger rounded p-1">Senior's Special</p></div>
                            </div>
                            <div>
                                <p className="fw-bold mb-2">Senior's Special Kerala</p>
                                <p className="mb-5">Happy.<br/>Nice experience.<br/>Thank you.</p>
                                <p className="fw-bold mb-1">Girija</p>
                                <p>Travelled in Mar, 2024</p>
                            </div>
                        </div>
                    </div>
                </div> */}
            </div>
        </>

    )

}

export default ReviewCard2