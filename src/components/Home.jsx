import React from 'react';
import Header from './shared/Header';

const Home = () => {
    return (
        <>
            <Header title="Home" />
            <p>Welcome to Gillian's Taylor Swift lyrics React project! This is an assignment for COMP2068 (JavaScript Frameworks) and is made using React and some Bootstrap to style it. The JSON file is made completely on my own, though lyrics for Taylor Swift through reputation are used from <a href="https://data.world/promptcloud/taylor-swift-song-data-from-all-the-albums">data.world</a>, which has gotten the lyrics from Genius.</p>
            <p>You can find this project on GitHub <a href="https://github.com/gsthorne/COMP2068-reactProject">here</a>.</p>
        </>
    )
}
 
export default Home;