import '../style/main.scss';
import Header from "../component/LandingPage/Header";
const MyApp =({ Component, pageProps })=> {
    return (
   <Header>
       <Component {...pageProps} />;
   </Header>
    )
}

export default MyApp;