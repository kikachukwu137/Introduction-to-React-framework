import React from 'react';


function Footer(){
    const date =  new Date()
    const currentYear = date.getFullYear()

    return (
        <footer>
            <p>copyright @ {currentYear}</p>

        </footer>
    )
}


export default Footer;