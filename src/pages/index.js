import React from 'react';
import MainContentLeft from "../component/LandingPage/MainContentLeft";
import MainContentRight from "../component/LandingPage/MainContentRight";

const Index = () => {
    const style = {
        display:'flex',
        justifyContent:'space-between'
    }
    return (
        <div >
            <div style={style}>
            <MainContentLeft/>
            <MainContentRight/>
            </div>
        </div>
    );
};

export default Index;