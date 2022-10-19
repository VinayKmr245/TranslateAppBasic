import React, { useState } from "react";
import axios from "axios";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import Divider from "@mui/material/Divider";
import ListItemText from "@mui/material/ListItemText";
import Typography from "@mui/material/Typography";

var url = "https://api.dictionaryapi.dev/api/v2/entries/en/";
const Dictionary = () => {
  const [add, setAdd] = useState("");
  const [meaning, setMeaning] = useState([]);
  const [header,setHeader]=useState("")
  const Meaning = async () => {
    const { data } = await axios.get(url + add);
    console.log(data);
    setMeaning(data[0].meanings[0].definitions);
    setHeader("Meanings")
  };

  return (
    <div className="Container">
      <TextField
        helperText=" "
        id="demo-helper-text-aligned-no-helper"
        label="Search Text"
        onChange={(e) => {
          setAdd(e.target.value);
        }}
      />

      <Button variant="contained" style = {{
        backgroundColor : "rgb(138,43,226)"
      }}onClick={Meaning}>
        Search
      </Button>
      <div className="Dictionary-Box">
        {<h1>{header}</h1>}
        <List
          sx={{ width: "100%", maxWidth: 360, bgcolor: "background.paper",display:"list-item" }}
        ></List>
        <ListItem alignItems="flex-start"></ListItem>
        {meaning.map((item) => {
          return (
            <div className="DisplayDictContent">
              <ListItemText
                primary={<li>{item.definition}</li>}
              />
            </div>
          );
        })}
      </div>
    </div>
  );
};
export default Dictionary;

//No Material UI
{
  /* <input
        type="text"
        onChange={(e) => {
          setAdd(e.target.value);
        }}
      /> */
}
{
  /* <button onClick={Meaning}>Search</button>
      {meaning.map((item) => {
        return (
          <div>
            <h1>{item.definition}</h1>
            <h2>{item.example}</h2>
          </div>
        );
      })} */
}

//   <div>
//     <h1>{item.definition}</h1>
//     <h2>{item.example}</h2>
//   </div>
//for examples
 // secondary={
                //   <React.Fragment>
                //     <Typography
                //       sx={{ display: "inline" }}
                //       component="span"
                //       variant="body2"
                //       color="text.primary"
                //     ></Typography>
                //     {item.example}
                //   </React.Fragment>
                // }