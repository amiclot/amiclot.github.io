import React from 'react';
import "./Logo.css";
import portImg from '../../images/portfolio_img.jpg';


const logo = (props) => (
    <div>
        <img className="port_img" src={portImg} alt="port_img" />
    </div>
);

export default logo;