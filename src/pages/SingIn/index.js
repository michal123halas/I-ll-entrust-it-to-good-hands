import React from 'react';
import TitleReusable from "../../component/ReusableItem/TitleReusable";
import ButtonReusable from "../../component/ReusableItem/ButtonReusable";
import {signInWithEmailAndPassword} from 'firebase/auth';

const Index = () => {


const handleLogin =async(event)=> {
    event.preventDefault()
    const email = event.target.password.value
    const password = event.target.password.value

    try {
        const userCredential = await signInWithEmailAndPassword(email, password, auth)
        const user = userCredential.user
    }catch (error){
        console.log('error', error)
    }

}


    return (
        <div className="SingIn">
          <TitleReusable textTwo={'Sing In'}/>
            <form>
                <label htmlFor='email' >Email</label><br/>
                    <input name='email' type='email'/><br/>
                <label htmlFor='password'>Password</label><br/>
                <input name='password' type='password'/>
            </form>
            <ButtonReusable classScss='buttonSingInForm'  buttonTextOne='Registration' buttonTextTwo='SingIn' buttonTypeTwo='submit'/>
        </div>
    );
};
//two button sing
export default Index;