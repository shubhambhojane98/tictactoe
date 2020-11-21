import React from 'react';
import Square from './Square'


const Board = () => {
    return (
        <div>
            
           <div>
               <Square value = {2} />
               <Square value = {3} />
               <Square value = {4} />
            </div>
           <div>
               <Square value = {5} />
               <Square value = {6} />
               <Square value = {7} />
            </div>
           <div>
               <Square value = {8} />
               <Square value = {9} />
               <Square value = {10} />
               
            </div>
        </div>
    )
}

export default Board;
