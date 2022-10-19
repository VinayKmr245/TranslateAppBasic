import React ,{useCallback, useState} from "react";
import axios from "axios";
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';

const Synonym = () => {
    const [word, setWord] = useState("");
    const [ans,setAns]=useState([])
    const [header,setHeader]=useState("")
var url=`https://api.dictionaryapi.dev/api/v2/entries/en/${word}`
    const HandleSynonym = () => {
        axios.get(url)
        .then((response) => {
            const res = response.data
            let meanings = []
             res.map((item)=>{
                    meanings = [...meanings,...item.meanings]
             })
             let synonyms  = []
             meanings.map((items)=>{
                    synonyms = [...synonyms, ...items.synonyms]
             })
             setAns(synonyms);
        }).catch((error) => {
            console.log(error);}
        );
        setHeader("Synonyms :")
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
        <Button variant="contained" style = {{
        backgroundColor : "rgb(138,43,226)"
      }} onClick={HandleSynonym}>Search
      </Button>
      <div className="result-text">
        <h1>{header}</h1>
        <ul>
        {
            ans.map((item)=>{
                return <>
                <li><h2>{item}</h2></li>
                </>
            })
           
        }
        </ul>
      </div>
    </div>
);
}
export default Synonym;


{/* <input type="text" onChange={(e)=>{setWord(e.target.value)}}/> */}
{/* <button onClick={HandleSynonym}>Get-Synonym</button> */}