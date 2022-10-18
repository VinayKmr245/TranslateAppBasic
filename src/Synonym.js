import React ,{useState} from "react";
import axios from "axios";
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';

const Synonym = () => {
    const [word, setWord] = useState("");
var url="https://wordsapiv1.p.mashape.com/words/"+word+"/synonyms";
    const HandleSynonym = () => {
        axios.get(url).then((response) => {
            console.log(response);
        }).catch((error) => {
            console.log(error);}
        );
    };
return(
    <div className="SynonymContainer">
        <TextField
        helperText=" "
        id="demo-helper-text-aligned-no-helper"
        label="Search"
        onChange={(e) => {
            setWord(e.target.value);
          }}
      />
        <Button variant="contained" color="success" onClick={HandleSynonym}>Search
      </Button>
    </div>
);
}
export default Synonym;


{/* <input type="text" onChange={(e)=>{setWord(e.target.value)}}/> */}
{/* <button onClick={HandleSynonym}>Get-Synonym</button> */}