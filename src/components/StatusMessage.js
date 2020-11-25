import React from 'react'

const StatusMessage = ({winner ,current}) => {

    
// const message = winner	
// ? `Winner is ${winner}`	
// : `Next player is ${current.isXNext ? 'X' : 'O'}`;

const  noNextMove = current.board.every(el => el !== null );
        // Conditional rendering
    return (
        <h2>
            {winner && `Winner is ${winner}`}
            {!winner && !noNextMove &&`Next player is ${current.isXNext ? 'X' : 'O'}`}
            {!winner && noNextMove && 'X and O tied' }
        </h2>
    )
}

export default StatusMessage
