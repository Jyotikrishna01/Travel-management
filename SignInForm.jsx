// Form.js
import {useNavigate} from 'react-router-dom'
import React, { useState } from 'react';

function Form() {
	const [formData, setFormData] = useState({
		username: '',
		email: '',
		password: '',
		confirmPassword: '',
	});
	const navigate = useNavigate();

	const [errors, setErrors] = useState({});

	const handleChange = (e) => {
		const { name, value } = e.target;
		setFormData({
			...formData,
			[name]: value,
		});
	};

	const handleSubmit = (e) => {
		e.preventDefault();
		const newErrors = validateForm(formData);
		setErrors(newErrors);

		if (Object.keys(newErrors).length === 0) {
			
			// Form submission logic here
			alert("Your data saved successfully!")
		} else {
			alert("Form submission failed due to validation errors.")
		}
	};

	const validateForm = (data) => {
		const errors = {};

		if (!data.username.trim()) {
			alert("Username is required")
		}

		if (!data.email.trim()) {
            alert("Email is required")
        } else if (!/\S+@\S+\.\S+/.test(data.email)) {
            alert("Email is invalid");
        }
	

		if (!data.password) {
            errors.password = 'Password is required';
        } else if (data.password.length < 8) {
            errors.password = `Password must be at 
            least 8 characters long`;
        }
 
        if (data.confirmPassword !== data.password) {
            errors.confirmPassword = 'Passwords do not match';
        }

		return errors;
	};

	return (
		<div className="form-container bg bg-secondary" style={{width:'50%'}}>
			<h2 className="form-title" style={{color:'black',textAlign:'center'}}>User Registration Form</h2>
			<form onSubmit={handleSubmit}>
				<div>
					<label htmlFor="fn" className="form-label" style={{color:'black'}}>Username:</label>
					<input className="form-control"
                        type="text"
                        name="username"
                        value={formData.username}
                        onChange={handleChange} required/>
					{errors.username &&
						<span className="error-message">
							{errors.username}
						</span>
					}
				</div>
				<div>
					<label htmlFor="em" className="form-label" style={{color:'black'}}>
						Email:
						</label>
					<input id="em" className="form-control" type="email" value={formData.email} 
                        onChange={(e)=>setFormData({...formData,email:e.target.value})} required
					/>
					{errors.email &&
						<span className="error-message">
							{errors.email}
						</span>
					}
				</div>
				<div>
					<label htmlFor="pw" className="form-label" style={{color:'black'}}>
						Password:
						</label>
					<input
						input id="pw" className="form-control" type="password" value={formData.password} 
                        onChange={(e)=>setFormData({...formData,password:e.target.value})} required
					/>
					{errors.password &&
						<span className="error-message">
							{errors.password}
						</span>
					}
				</div>
				<div>
					<label htmlFor="pw1" className="form-label" style={{color:'black'}}>
						Confirm Password:
					</label>
					<input id="pw1" className="form-control" type="password" value={formData.confirmPassword} 
                        onChange={(e)=>setFormData({...formData,confirmPassword:e.target.value})} required					/>
					{errors.confirmPassword &&
						<span className="error-message">
							{errors.confirmPassword}
						</span>
					}
				</div>
				<div style={{textAlign:'center'}}>
				<button  className="btn btn-warning" type="submit">Submit</button>
				</div>
				<button onClick={()=>navigate("/")} className='btn btn-success'>Back to home</button>
			</form>
		</div>
	);
 }

export default Form
