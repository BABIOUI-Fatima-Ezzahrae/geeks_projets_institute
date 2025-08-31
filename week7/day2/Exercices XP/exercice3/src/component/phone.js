import React, {useState} from 'react';

function Phone () {
    const [phone, setPhone] = useState({
        brand: "Samsung",
        model: "Galaxy S20",
        color: "black",
        year: 2020
    });
    const changeColor = () => {
        setPhone(prevPhone => ({
        ...prevPhone,
        color: prevPhone.color === "black" ? "blue" : "black"
    
    }));
    }

    return (
        <div style={{border: "1px solid black", width: "70%", marginLeft: "15%", marginTop: "3%"}}>
            <h1>My phone is a {phone.brand}</h1>
            <p>It is a {phone.color} {phone.model} from {phone.year}</p>
            <button onClick={changeColor }>Change Color</button>
        </div>
    )
}
export default Phone;