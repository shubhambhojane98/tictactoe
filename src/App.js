import React , {useState} from "react";
import Board from './components/Board';
import History from './components/History';
import StatusMessage from "./components/StatusMessage";
import { calculateWinner } from "./helpers";
import './styles/root.scss';



const NEW_GAME =[
  {board :Array(9).fill(null),isXnext: true},
];


 const App = () =>{
  const [history , setHistory] = useState(NEW_GAME);

  // keep track on Current move
  const [currentMove, setCurrentMove] = useState(0);

  // Current game state
  const current = history[currentMove];

  
  const {winner, winningSquare} = calculateWinner(current.board);

  
  // handle logic of onclick event
  const handleSquareClick = position => {
  
          if(current.board[position] || winner){
              return;
          }    
          setHistory(prev => {	
            // latest board State	
            const last = prev[prev.length - 1];		
            const newBoard = last.board.map((square, pos) => {		
              if (pos === position) {		
                return last.isXNext ? 'X' : 'O';		
              }		
              return square;		
            });		
            return prev.concat({ board: newBoard, isXNext: !last.isXNext });	});
      setCurrentMove(prev => prev + 1);
      
  }; 

  const moveTo =(move) =>{
    setCurrentMove(move);
  }

  const onNewGame = () => {
        setHistory(NEW_GAME);
        setCurrentMove(0);
  }


   return (
    <div className="app">
      <h1>TIC<span className="text-green"> TAC</span>  TOE</h1>
      <StatusMessage winner={winner} current={current} />
      <Board board={current.board} handleSquareClick={handleSquareClick} winningSquare={winningSquare} />
      <button type="button" onClick={onNewGame} className={`btn-reset ${winner ? 'active' : ''}`}>Start new Game</button>
      <h2 style={{fontWeight: 'normal'}}>Current Game History</h2>
      <History history={history} moveTo={moveTo}  currentMove={currentMove}/>
      <div className="bg-balls" />
    </div>
  );
  
 };

 export default App;