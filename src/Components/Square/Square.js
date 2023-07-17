import React from 'react'
import '../Square/Square.css'

function Square({val , chooseSquare}){
    return(
        <div className='Square' onClick={chooseSquare}>
            {val}
        </div>
    )
}

export default Square