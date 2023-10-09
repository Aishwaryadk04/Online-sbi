import './App.css';
import Banner1 from './Components/Banner1';
import Cardone from './Components/Cardone';
import Cards from './Components/Cards';
import Footer from './Components/Footer';
import NavBar from './Components/NavBar';
import Row from './Components/Row';
import ScrollingText from './Components/ScrollingText';

function App() {
  return (
    <div  className="d-flex justify-content-center align-items-center w-100 bg-$secondary: $gray-100">
    
      <div style={{width:'95%'}} className='bg-light p-5 shadow h-100  '>
        <Banner1/>
        <NavBar/>
        <Row/>
        <Cards/>
        <ScrollingText/>
        <Footer/>
        <Cardone/>
      </div>
    </div>
  );
}

export default App;
