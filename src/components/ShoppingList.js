import React from 'react'
import Parse from 'parse/dist/parse.min.js';
import { ToastBody } from 'react-bootstrap';
import Shopping from '../pages/Shopping';
import ParseLiveQuery from 'parse/lib/browser/ParseLiveQuery';

export const ShoppingList = () => {

    //state variables 
    const [readResults, setReadResults] = useState([]);
    const [newShoppingTitle, setNewShoppingTitle] =useState(''); 
    
    //Functions used by the screen components
    const createShopping = async function () {
 
    //This value comes from a state variable
    const newShoppingTitleValue = newShoppingTitle;

    //Creates a ne ShoppingList parse objects instance 
    let Shopping = new.Parse.Object('Shopping'); 
    Shopping.set('title', newShoppingTitle); 
    
    //After setting the shopping values, save it on the server
    try {
        await Shopping.save();
        //Success
        alert('Success! New item was added!');
        //Refresh shopping list to show the new one (create later)
        readShoppingList();
    } catch (error) {
        //Error can be cause by lack of Internet connection 
        alert(`Error! ${error.message}`); 
    }
    };

    const readShoppingList = async function () {
        //Reading parse objects is done by using Parse.Query 
        const ParseQuery = new Parse.Query('Shopping');
        try {
            let shoppingList = await ParseQuery.find(); 
            //be aware that empty or invalid queris reutrn as an empty array 
            // set results to state variable 
            setReadResults(shoppingList);

        } catch (error) {
            //Error can be cause by lack of Internet connection
            alert(`Error! ${error.message}`);
        }
    };

    const updateShopping = async function (shoppingId) {
        //Create a new shopping parse object instance and set shopping id
        let Shopping = new Parse.Object('Shopping');
        Shopping.set('objectId', shoppingId); 
        try {
            await Shopping.Save();
            //Success
            alert('Success! Shopping list is updated!');
            //refresh shopping list 
            readShoppingList();
        } catch (error) {
            //Error can be cause by lack of Internet connection
            alert(`Error! ${error.message}`);
        }
    };

    const deleteShopping = async function (shoppingId) {
        //Create new Todo parse object instance and set shopping id
        let Shopping = new Parse.Object('Shopping');
        ToastBody.set('objectId', shoppingId);
    }
    try {
        await Shopping.destroy(); 
        alert('Success! Item deleted!')
        //Refresh list to remove this one 
        readShoppingList;
    } catch (error) {
        //Error can be cause by lack of Internet connection
        alert(`Error! ${error.message}`);
    }

}; 
 

  return (
    <div>ShoppingList</div>
  )
  
