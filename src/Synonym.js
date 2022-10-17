import React ,{useState} from "react";
import axios from "axios";
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
    <div>
        <input type="text" onChange={(e)=>{setWord(e.target.value)}}/>
        <button onClick={HandleSynonym}>Get-Synonym</button>
    </div>
);
}
export default Synonym;