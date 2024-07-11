
import { IoCall } from "react-icons/io5";
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import { useState } from 'react';

const CallNow = () =>{

    const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

    return(
        <>
        <Button onClick={handleShow}>
        <IoCall size={30}/>
      </Button>

      <Modal show={show} onHide={handleClose} animation={false}>
        <Modal.Header closeButton>
          <Modal.Title style={{color:'black'}}>Toll free no.</Modal.Title>
        </Modal.Header>
        <Modal.Body style={{color:'black'}}>+91 XXXXXXXXXX</Modal.Body>
        <Modal.Body style={{color:'black'}}>+91 XXXXXXXXXX</Modal.Body>
        <Modal.Body style={{color:'black'}}>+91 XXXXXXXXXX</Modal.Body>
        <Modal.Footer>
          <Button variant="primary" onClick={handleClose}>
            Call Now
          </Button>
        </Modal.Footer>
      </Modal></>
       
    )
}

export default CallNow