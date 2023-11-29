import React from 'react';
import HomeHeroImage from '../../assets/Home-Hero-Image.jpg';


const MainContentLeft = () => {
const style = {
    backgroundImage:`url(${HomeHeroImage.src})`,
    backgroundSize:'cover',
    height:'500px',
    width:'700px',

}
    return (
        <div style={style}>

        </div>
    );
};

export default MainContentLeft;