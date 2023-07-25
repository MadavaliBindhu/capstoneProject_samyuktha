import React, { useState } from 'react';
import './file_complaint.css';
import axios from 'axios';
function Filecomplaint() {
    const [name, setName] = useState('');
    const [phone, setPhone] = useState('');
    const [complaint, setComplaint] = useState('');
    const [image, setImage] = useState("");
    const handleSubmit = async () => {
        await axios.post('http://localhost:8080/users/create', {
            "user_id": 0,
            "user_name": name,
            "phone_number": phone,
            "complaint_theme": complaint

        }).then(function (response) {
            console.log(response)
        }).catch(function (error) {
            console.log(error);
        });

    }
    return (
        <div>
            <div className="userdata">
                <h1>Register The Complaint</h1>
                <h3>User Name:</h3>

                <input type="Name" className="name" placeholder="Name" value={name} onChange={e => setName(e.target.value)} />

                <h3>Phone Number:</h3>

                <input type="Phone" className="phone" placeholder="Phone Number" value={phone} onChange={e => setPhone(e.target.value)} />

                <h3>Complaint theme:</h3>

                <textarea className="complaint" type="review" placeholder="Complaint_Area" rows="4" cols="5" value={complaint} onChange={e => setComplaint(e.target.value)}></textarea><br />

                <button className="submit" onClick={handleSubmit}>Submit</button>
            </div>
        </div>
    )
}
export default Filecomplaint;

