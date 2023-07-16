import React, { useState } from 'react';
import './file_complaint.css';
function Filecomplaint() {
        const [name, setName] = useState('');
        const [phone, setPhone] = useState('');
        const [complaint, setComplaint] = useState('');
const handleSubmit = () =>{
    console.log(name,phone,complaint);
}
    return(
        <div>
                <div className="userdata">
                    <h1>Register The Complaint</h1>
                    <h3>User Name:</h3>
                    <input type="Name" className="name" placeholder="Name" value={name} onChange={e =>setName(e.target.value)} />
                    <h3>Phone Number:</h3>
                    <input type="Phone" className="phone" placeholder="Phone Number" value={phone} onChange={e =>setPhone(e.target.value)} />
                    <h3>Complaint theme:</h3>
                    <textarea className="complaint" type="review" placeholder="Complaint_Area" rows="4" cols="5" value={complaint} onChange={e =>setComplaint(e.target.value)}></textarea><br/>
                    <button className="submit" onClick={() => handleSubmit()}>Submit</button>
                </div> 
        </div>
    )
}
export default Filecomplaint;

