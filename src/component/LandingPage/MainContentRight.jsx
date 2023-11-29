import React from 'react';
import TitleReusable from "../ReusableItem/TitleReusable.jsx";
import ButtonReusable from "../ReusableItem/ButtonReusable.jsx";


const MainContentRight = () => {
    return (
        <div style={{marginRight:'200px'}}>
            <TitleReusable style={{textAlign:'center'}} textOne={'Start Helping!'} textTwo={' Donate Unwanted Items'}/>
            <ButtonReusable classScss='buttonMainContent' buttonTextOne={'Donate Items'} buttonTextTwo={'Organize Collection'}/>
        </div>
    );
};

export default MainContentRight;