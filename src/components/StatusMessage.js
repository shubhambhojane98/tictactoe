import React from 'react'

const StatusMessage = ({winner ,current}) => {

    
// const message = winner	
// ? `Winner is ${winner}`	
// : `Next player is ${current.isXNext ? 'X' : 'O'}`;

const  noNextMove = current.board.every(el => el !== null );
        // Conditional rendering
    return (
        <div className="status-message">
            {winner && <>Winner is {''} 
            <span className={winner === 'X' ? 'text-green' : 'text-orange'}>
                {winner}
                </span>
                </>
                }
            {!winner &&  !noNextMove && <>Next player is <span className={current.isXNext ? 'text-greenn' : 'text-orange'}>{current.isXNext ? 'X' : 'O'}{''}</span> </>}
            {!winner &&  noNextMove && <> <span className="text-green">X</span> <span className="text-orange">O</span> tied </> }
        </div>
    )
}

export default StatusMessage
