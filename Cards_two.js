import React, {useState} from 'react';
import { LuHotel } from "react-icons/lu";
import { GiMeal } from "react-icons/gi";
import { FaPlaneDeparture } from "react-icons/fa";
import { FaStar } from "react-icons/fa6";
import EnquiryForm from './EnquireForm';



const TravelPackageCardThree = () => {
  const [showForm, setShowForm] = useState(false);
  
  const handleEnquireClick = () => {
    setShowForm (true);
  }
  
  return (
    <div className='container mt-3'>

<div className='text-bg-light mb-3' style={styles.card}>

        <div className='mt-5' style={styles.imagePlaceholder}>
          <img className='' src='' alt=''/>
        </div>

        <div className='card-body' style={styles.info}>

          <h2>MUN 2</h2>

          <div className='d-flex justify-content-around my-3' style={styles.icons}>
            <div className='badge bg-info text-dark' style={styles.icon}><LuHotel size={20}/></div>
            <div className='badge bg-info text-dark' style={styles.icon}><GiMeal size={20}/></div>
            <div className='badge bg-info text-dark' style={styles.icon}><FaPlaneDeparture size={20}/></div>
          </div>
          <p className='card-text'>Travel Duration: 4 Days 3 Nights</p>

          <p className='card-text'>Rating: <span className='text-warning' style={styles.star}><FaStar /></span> 4.8</p>

          <a href="#reviews" className='card-link text-dark'>Reviews</a>
        </div>
        <div className='mt-2 justify-content-between ' style={styles.pricing}>

          <p className='card-text mt-3'>&#8377; Rupees 11000 per person</p>

          <a href=''><button className= 'btn btn-success btn-block' style={styles.button}>View Details</button></a>

          <button className='btn btn-secondary btn-block' style={styles.button} onClick={handleEnquireClick}>Enquire Now</button>

        </div>
      </div>

      {showForm && <EnquiryForm/>}

    </div>
  );
};

const styles = {

  card: {
    display: 'flex',
    border: '2px solid #000',
    padding: '20px',
    width: '600px',
    justifyContent: 'center',
    borderRadius: '10px',
    alignitems: 'center',
    marginBottom: '20px',   //
    boxShadow: '0 4px 8px rgba (0, 0, 0, 0.1)' //
  },

  imagePlaceholder: {
    width: '200px',
    height: '150px',
    backgroundColor: '#ccc',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    objectFit: 'cover'  //
  },
  info: {
    flex: 1,
    marginLeft: '20px',
    padding: '20px' //
  },
  icons: {
    display: 'flex',
    justifyContent: 'space-between',
    width: '150px',
  },
  icon: {
    border: '1px solid #000',
    padding: '10px',
  },
  star: {
    color: 'gold',
    marginRight: '5px' //
  },
  pricing: {
    textAlign: 'right',
    fontWeight: 'bold' //
  },
  button: {
    display: 'block',
    marginTop: '10px',
    padding: '10px 20px',
    width: '100%' //
  }
};

export default TravelPackageCardThree;