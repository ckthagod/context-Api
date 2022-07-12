import React, { useContext } from 'react'
import { AppCon } from './App';

const Child = () => {
    
    const { name } = useContext(AppCon);
    return (
        <div>
            <h1>{name}</h1>
        </div>
    )
}

export default Child