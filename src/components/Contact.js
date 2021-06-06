import React, { useEffect, useState } from "react";
import "../App.css";
import { db } from "../firebase";

const Contact =() =>{
    const [fname, setfname] = useState("");
    const [lname, setlname] = useState("");
    const [email, setEmail] = useState("");
    const [address, setAddress] = useState("");
    const [message, setMessage] = useState("");

    const [loader, setLoader] = useState(false);

    const handleSubmit = (e) => {
        e.preventDefault();
        setLoader(true);
        db.collection("contacts")
          .add({
            fname: fname,
            lname: lname,
            email: email,
            address: address,
            message: message,
          })
          .then(() => {
            setLoader(false);
            alert("Your message has been submitted👍");
          })
          .catch((error) => {
            alert(error.message);
            setLoader(false);
          });
    
        setfname("");
        setlname("");
        setEmail("");
        setAddress("");
        setMessage("");
        
      };

    
        return (

            <form className="form" onSubmit={handleSubmit} >
            <h1>Contact Form</h1>
            <label>First Name</label>
            <input placeholder="First Name" 
            value={fname}
            onChange={(e) => setfname(e.target.value)}
            />
            <label>Last Name</label>
            <input placeholder="Last Name" 
            value={lname}
            onChange={(e) => setlname(e.target.value)}
            />

            <label>E-Mail</label>
            <input placeholder="E-Mail" 
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            />
            <label>Address</label>
            <input placeholder="Address" 
            value={address}
            onChange={(e) => setAddress(e.target.value)}
            />
          
            <label>Message</label>
            <textarea placeholder="Message"
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            ></textarea>

            <label>Storage Medium</label>
            <select name="storageMedium" id="storageMedium">  
             <option value="Database">Database</option>
             <option value="Local File">Local File</option>
            </select>
          
  

            <button type="submit" style={{ background: loader ? "#ccc" : " rgb(2, 2, 110)" }}>
            Submit</button>
           
            
            </form>
        );
}

export default Contact;
