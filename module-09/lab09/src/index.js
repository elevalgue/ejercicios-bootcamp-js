import "./styles.css";
import * as DataBusiness from "./data-business";
import * as Utils from "./utils"; 


DataBusiness.getCharacters()
.then((data) => {
    const characters = data;
    
    // const nodes = [];
    
   
    renderCharacters(characters);
    })
    
    const renderCharacters = (characters) => {
        const appRoot = document.querySelector("#root");
 
    for (let character of characters) {
            const node = Utils.createCharacterRow(character);
            nodes.push(node);
        
            console.log(character.char_id[0]);
        }

        
}