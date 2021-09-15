import "./styles.css";
import * as DataBusiness from "./data-business";
import * as Utils from "./utils"; 

DataBusiness.getCharacters().then(data => {
    document.querySelector('#root').innerHTML = '';
    const characters = data;
    const nodes = [];
    
    for (const character of characters) {
        nodes.push(Utils.createCharacterRow(character))
    }

    for (const node of nodes) {
        document.querySelector('#root').append(node);
        node.addEventListener('click', () => {
            Utils.showCharacter(characters[nodes.indexOf(node)]);
        });
    }
});