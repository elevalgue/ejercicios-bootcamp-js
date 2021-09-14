import "./styles.css";
import * as DataBusiness from "./data-business";
import * as Utils from "./utils"; 

DataBusiness.getCharacters().then(data => {
        const characters = data;

        const nodes = [];
        

        for (const character of characters) {
            const node = Utils.createCharacterRow(characterCount);
            nodes.push(node);

            console.log(character.char_id);
        }

        for (const x of nodes) {
            document.getAnimations('root').append(x); 
        }
});