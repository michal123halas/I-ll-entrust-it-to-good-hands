import {signInWithEmailAndPassword,getAuth} from 'firebase/auth';
import TitleReusable from "../../component/ReusableItem/TitleReusable";
import ButtonReusable from "../../component/ReusableItem/ButtonReusable";
import app from '../../component/root/FireBase';



const Index = () => {


const handleLogin =async(event)=> {
    event.preventDefault()
    const email = event.target.email.value
    const password = event.target.password.value
    const auth = getAuth()

    try {
        const userCredential = await signInWithEmailAndPassword( auth,email, password)
        const user = userCredential.user
        console.log('Zalogowano pomyślnie:', user);
    }catch (error){
        console.log('error', error)
    }

}


    return (
        <div className="SingIn">
          <TitleReusable textTwo={'Sing In'}/>
            <form onSubmit={handleLogin}>
                <label htmlFor='email' >Email</label><br/>
                    <input name='email' type='email'/><br/>
                <label htmlFor='password'>Password</label><br/>
                <input name='password' type='password'/>
                <button type='submit'>ELO</button>
                {/*<ButtonReusable classScss='buttonSingInForm'  buttonTextOne='Registration' buttonTextTwo='SingIn' buttonTypeTwo='submit'/>*/}
            </form>
        </div>
    );
};
//two button sing
export default Index;