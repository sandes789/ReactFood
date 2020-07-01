import React, { useContext } from 'react'
import { FoodContext } from '../contexts/Context'

const ResultList = () => {
    const { recipes } = useContext(FoodContext)
    console.log(recipes)

    return recipes.length ? (
        <div className="food">
            {
                recipes.map((list, i) => {
                    return (
                        <p key={i}>{list.recipe.label}</p>
                    )
                })
            }
        </div>
    ) :
        (
            <p>No Food items</p>
        )
}

export default ResultList