import logo from './logo.svg';
import './App.css';
import Navbar from './components/Navbar';
import Textform from './components/Textform';


function App() {
  return (
    <>
   <Navbar title="CASE CONVERTER" ></Navbar>
   <br/>

   <div className='container'>
   <Textform heading="Enter the text to analyze: "></Textform>
   </div>
    </>
  );
}

export default App;
