import React from 'react';
import './logo.css';
//style //
const imgStyle = {
    width:"250px",
    height:"90px",
    marginBottom:"-20px",
    marginTop:"-20px",
    marginRight:"-20px",
    textAlign:"center",
    paddingInlineStart: "0"};

// This is static top section of the page and gives it semantic value.
function Header({ cssClass, fillOne, fillTwo, animation }) {

    return (

        <img
            style={imgStyle}
            ref={animation}
            src="/assets/images/Parker-Dell.png" alt="Logo" className={cssClass} />




    )
}


export default Header;