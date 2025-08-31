import React, {useState} from 'react';
import '../App.css';
import Garages from './garage.js'

function Cars(props) {
      const [color, setColor] = useState('red');
    return (
        <div>
            <h1>This car is {color} {props.carInfo.model}</h1>
            <Garages size="small" />
        </div>
    );
};

export default Cars;