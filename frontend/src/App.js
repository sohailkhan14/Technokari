import logo from './logo.svg';
import './App.css';
import Nav from './components/Nav';
import { BrowserRouter,Routes,Route } from 'react-router-dom';
import Footer from './components/Footer';
import Services from './components/Services';
import CaseStudies from './components/CaseStudies';
import About from './components/About';
import Blog from './components/Blog';
import Contact from './components/Contact';
import Index from './components/Index';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap-icons/font/bootstrap-icons.css';


{
  /* The following line can be included in your src/index.js or App.js file */
}
function App() {
  return (
    <div className="App">
<BrowserRouter>
<Nav/>
<Routes> 
<Route path = '/' element = {<Index/>}>  </Route>
<Route path='/services' element = {<Services/>}> </Route>
<Route path = '/case-studies' element = {<CaseStudies/>}> </Route>
<Route path='/about' element ={<About/>}>  </Route>
<Route path = '/blog' element = {<Blog/>}>   </Route>
<Route path = '/contact' element ={ <Contact/>}>    </Route>
</Routes>
</BrowserRouter>
<Footer/>
    </div>
  );
}

export default App;
