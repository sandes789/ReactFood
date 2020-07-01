import React, { createContext, useState, useEffect } from 'react'
import Axios from 'axios'

export const FoodContext = createContext()

const FoodContextProvider = (props) => {
    const [query, setQuery] = useState('');
    const [recipes, setRecipes] = useState([])

    // config
    const APP_ID = "90cbe988"
    const APP_KEY = "c4b2bb041d64f53a0dbd2f22879151e8"
    const url = `https://api.edamam.com/search?q=${query}&app_id=${APP_ID}&app_key=${APP_KEY}&from=0&to=3&calories=591-722&health=alcohol-free`


    const getData = async () => {
        const result = await Axios.get(url)
        setRecipes(result.data.hits)
        console.log(result)
    }

    const actions = {
        getData,
        setQuery,
    }

    return (
        <FoodContext.Provider value={{ actions, recipes }}>
            {props.children}
        </FoodContext.Provider>
    )
}

export default FoodContextProvider
