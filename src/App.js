
import './App.css';
import Navbar from './Componenets/Navbar.js'
import Textarea from './Componenets/Textarea.js'


function App() {
  return (
  <>
          <Navbar title="Textutils" about="About Us"/>
          <div className="container my-3">
     <Textarea heading = "Write the text below "/>
          </div>

  
</>  
);
}

export default App;
