import React, { useState } from "react";
import axios from "axios";
var url = "https://api.dictionaryapi.dev/api/v2/entries/en/";
const Dictionary = () => {
    const [add, setAdd] = useState("");
    const [meaning, setMeaning] = useState([]);
    const Meaning = async () => {
        const { data } = await axios.get(url + add);
        console.log(data);
       setMeaning(data[0].meanings[0].definitions);
    };
    return (
        <div>
            <input type="text" onChange={(e) => { setAdd(e.target.value) }} />
            <button onClick={Meaning}>Search</button>
            {meaning.map((item) => {
                return (
                    <div>
                        <h1>{item.definition}</h1>
                        <h2>{item.example}</h2>
                    </div>
                )
            })}
        </div>
    );
}
export default Dictionary;