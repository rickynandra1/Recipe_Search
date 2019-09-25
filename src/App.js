import React, {useEffect, useState} from 'react';
import './App.css';

const App = () => {
const APP_ID ="2f21729c";
const APP_Key="0470844b0084e91269cf08961211cc90";

const [recipes, setRecipes] = useState();

useEffect(() => {
getRecipes();
}, []);

const getRecipes = async () => {
    const response = await fetch(`https://api.edamam.com/search?q=chicken&app_id=${APP_ID}&app_key=${APP_Key}`);
    const data = await response.json();
    console.log(data);
}

return (
    <div className="App">
        <form className="search-form">
            <input className="searc-bar" type="text"/>
            <button ClassName="search-button" type="submit">Search</button>
        </form>
    </div>

    )
}

export default App;
