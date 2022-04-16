import React from "react";
import "./Home.css";
import { Button, TextField } from "@material-ui/core";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import Error from "../../Error/Error";
const Home = () => {

    const[name,setName]=useState("");
    // console.log(name);
    const[error,setError]=useState(false);
    const navigate=useNavigate();
    const handleSubmit=()=>{
        if(!name){
            setError(true);
            return;
        }
        else{
            setError(navigate('/quiz'))
        }
    }
  return (
    <div className="content">
      <div className="settings">
        <span style={{ fontSize: 30 }}> </span>
        <div className="settings__select">
{ error && <Error> please Enter your name</Error>}
           {/* TextField takes here few props like label, variant  */}
         
          <TextField
            style={{ marginBottom: 45}}
            InputProps={{ style: { fontSize: 25 } }}
            InputLabelProps={{ style: { fontSize: 25 } }}
            label="Enter your name"
            variant="outlined"
            onChange={(e)=>setName(e.target.value)}
          ></TextField>
          <Button variant="contained" color="primary"  onClick={handleSubmit}>  
              Start Quiz
          </Button>
        </div>
      </div>
    </div>
  );
};

export default Home;
