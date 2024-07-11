
 import React from 'react';

function EnquiryForm() {
  return (
    <div className='border border bg bg-dark'>
      <form>
        <div className="mb-3">
          <label className="form-label">Full Name:</label>
          <input type="text" className="form-control" name="name" required />
        </div>
        <div className="mb-3">
          <label className="form-label">Email ID:</label>
          <input type="email" className="form-control" name="email" required />
        </div>
        <div className="mb-3">
          <label className="form-label">Contact:</label>
          <input type="tel" className="form-control" name="contact" pattern="[0-9]{10}" maxLength="10" required />
        </div>
        <div className="mb-3">
          <label className="form-label">Description:</label>
          <textarea className="form-control" name="message" required></textarea>
        </div>
        <button type="submit" className="btn btn-primary">Submit Enquiry</button>
      </form>
    </div>
  );
}

export default EnquiryForm; 