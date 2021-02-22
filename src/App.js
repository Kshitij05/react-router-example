import logo from './logo.svg';
import './App.css';
import Menu from './Menu';
import About from './About'; 
import Contact from './Contact';
import './Menustyle.css';
// we need  to import this in order to do routing
import {BrowserRouter, Route, Switch} from 'react-router-dom';



function App() {
  return (
    <BrowserRouter>
      <div>
        <Menu/>
        <Switch>
          <Route path = "/" exact component = {Home}/>
          <Route path = "/about" component = {About}/>
          <Route path = "/contact" component = {Contact}/>
        </Switch>
      </div>
    </BrowserRouter>

  );
}


// function App() {
//   return (
//     <BrowserRouter>
//     <div>
//       {/* we want menu on every page */}
//       <Menu/>
//       <Switch>
//       {/* exact means that i want home to be there by default but when i go on some other component, then dont show home */}
//         <Route path = "/" exact component = {Home}/>
//         <Route path = "/about" component = {About}/>
//         <Route path = "/contact" component = {Contact}/>
//       </Switch>
//     </div>
//     </BrowserRouter>
//   );
// }

// we wouldn't need to export this because we are using this in the same page
const Home = () => {
  return (
    <div className = "Contactstyle">
      <h2> Welcome to Home page </h2>
    </div>
  )
}

export default App;
