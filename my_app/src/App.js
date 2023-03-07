import './App.css';
import Main from './Main';
import {BrowserRouter } from "react-router-dom"
// import AllRoute from './AllRoute';

function App() {
  return (
    <>
    <BrowserRouter >
       <Main />
       {/* <AllRoute /> */}
    </BrowserRouter>
    </>
  );
}

export default App;
