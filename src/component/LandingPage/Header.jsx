import React from 'react';
import ButtonReusable from "../ReusableItem/ButtonReusable.jsx";
// import styles from '../../style/main.scss'
import Menu from "./Menu.jsx";
import Link from "next/link";
import {useRouter} from "next/router";


const Header = ({children}) => {
    const router = useRouter()
const style = {
    display:'flex',
    alignItems:'flex-end',
    flexDirection:'column'
}

const goSingIn =()=>{
    router.push('/SingIn')

}
    const goRegistration =()=>{
        router.push('/Registration')

    }
    return (
        <div style={style}>
            <ButtonReusable functionOne={goSingIn} functionTwo={goRegistration} classScss='buttonSingIn' buttonTextOne={'Sing in'} buttonTextTwo={'Registration'}/>
            <Menu/>
            <main>{children}</main>
        </div>
    );
};

export default Header;