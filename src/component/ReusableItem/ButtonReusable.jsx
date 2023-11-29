import React from 'react';

const ButtonReusable = ({buttonTextOne ,buttonTextTwo, classScss, functionOne,functionTwo,buttonTypeOne, buttonTypeTwo}) => {
    return (
        <div>
         <button type={buttonTypeOne} onClick={functionOne} className={classScss}>{buttonTextOne}</button>
         <button type={buttonTypeTwo} onClick={functionTwo} className={classScss}>{buttonTextTwo}</button>
        </div>
    );
};

export default ButtonReusable;