import "../App.css";
import React, { Component } from 'react';


class Exercice extends Component {
    render() {
        const style_header = {
            color: "white",
            backgroundColor: "DodgerBlue",
            padding: "10px",
            fontFamily: "Arial"
        };
        const style_para = {
             backgroundColor: "#282c34",
             color: "white",
             padding: "40px",
             fontFamily: "Arial",
             textAlign: "center"
            }

        return (
            <div>
                <h1 style={style_header}>This is a Header</h1>
                <p style={style_para} className="para">This is a Paragraph</p>
                <a href="link">This is a Link</a>
                <form>
                    <label>Enter your name:</label>
                    <input type="text" />
                    <button type="submit">Submit</button>
                </form>
                <div style={{ backgroundColor: "white", padding: "20px" }}>
                    <img src="https://upload.wikimedia.org/wikipedia/commons/a/a7/React-icon.svg"
                    alt="React Logo"
                    style={{ backgroundColor: "black", padding: "20px", width: "40%" }}/>
                </div>
                <h1>This is a List</h1>
                <ul style={{ listStylePosition: "inside", display: "inline-block", textAlign: "left" }}>
                    <li>Coffee</li>
                    <li>Tea</li>
                    <li>Milk</li>
                </ul>
            </div>
        );
    }
}

export default Exercice;