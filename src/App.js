
import './App.css';
import Header from './components/Header/Header';
import {BrowserRouter, Route, Routes} from 'react-router-dom'
import Footer from './components/Footer/Footer';
import Home from './components/Pages/Home/Home';
import Quiz from './components/Pages/Quiz/Quiz';
// import Data from './data/Quz.json'

import { useState } from 'react';
function App() {
  const[name,setName]=useState("");
  
  return (
    <BrowserRouter>
    <div className="app" > 


<Header/>

<Routes>
<Route path="/" element={<Home name={name} setName={setName}/>}> 
 </Route>
 <Route path="/quiz" element={<Quiz/>}> 
 </Route>

</Routes>
{/* {

  
  Data.questions.map((elem,id) =>{ 
    console.log(elem.questionText)
    return (
      <ul key={id}>
        <li>
          <h2>{elem.questionText}</h2>
          <h2>{elem.questionText.answerOptions}</h2>
        </li>
      </ul> 
    )
  })
} */}
    </div>
    <Footer/>
    </BrowserRouter>
  );
}

export default App;
