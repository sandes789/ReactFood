import React, { useContext, useState } from 'react'
import { FoodContext } from '../contexts/Context'

const Nav = () => {
    const { actions } = useContext(FoodContext);
    const [search, setSearch] = useState('');

    const handleSubmit = async (e) => {
        e.preventDefault();

        await actions.setQuery(search);
        actions.getData();
        setSearch('')
    }


    return (
        <div className="nav">
            <>
                <h3>Food Items</h3>
                <form onSubmit={handleSubmit}>
                    <input type='text' placeholder="Search Food" value={search} onChange={e => setSearch(e.target.value)} />
                    <input type="submit" value="Search" />
                </form>
            </>
        </div>
    )
}

export default Nav