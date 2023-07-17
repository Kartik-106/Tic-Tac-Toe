
import './App.css';
import {useState,useEffect} from "react"
import Square from './Components/Square/Square';
import { Patterns } from './Patterns';
import {RotateCcw } from 'lucide-react'
function App() {
  const [board,setboard] = useState(["","","","","","","","",""])
  const [player,setPlayer] = useState("0")
  const [result,setResult] = useState({winner:"none",state:"none"})

  useEffect(()=>{
    checkWin();
    checkIfTie();
    if(player==="X"){
      setPlayer("0")
    }
    else{
      setPlayer("X")
    }
  },[board]);

  useEffect(()=>{
    if(result.state !== "none"){
      alert(`game Finished! Winning player: ${result.winner}`);
      restart();
    }
  },[result]);

  const chooseSquare=(square)=>{
    setboard( 
      board.map((val,idx) => {
        if(idx === square && val === ""){
          return player;
        }
        return val;
      })
    )
  }

  const checkWin = () => {
    Patterns.forEach((currPattern)=>{
      const firstPlayer = board[currPattern[0]];
      if(firstPlayer === "") {
        return;
      }
      let foundWinningPattern = true
      currPattern.forEach((idx)=>{
        if(board[idx]!==firstPlayer){
          foundWinningPattern = false
        }
      })

      if(foundWinningPattern){
        setResult({winner:player , state:"Won"})
      }
    })
  }

  const checkIfTie=()=>{
    let filled = true;
    board.forEach((square)=>{
      if(square === ""){
        filled=false
      }
    })
    if(filled){
      setResult({winner:"No One" , state:"Tie"})
    }
  }

  const restart = ()=>{
    setboard(["","","","","","","","",""])
    setPlayer("0")
  }

  return (
    <div className="App">
      <div className='Header'> Tic-Tac-Toe </div>
      <div className='board'>
        <div className='row'>
          <Square 
          val={board[0]} 
          chooseSquare ={() =>{
            chooseSquare(0);
          }}
          />
          <Square 
          val={board[1]}
          chooseSquare ={() =>{
              chooseSquare(1);
            }}
          />
          <Square 
          val={board[2]}
          chooseSquare ={() =>{
            chooseSquare(2);
          }}
          />
        </div>
        <div className='row'>
        <Square 
          val={board[3]} 
          chooseSquare ={() =>{
            chooseSquare(3);
          }}
          />
          <Square 
          val={board[4]}
          chooseSquare ={() =>{
              chooseSquare(4);
            }}
          />
          <Square 
          val={board[5]}
          chooseSquare ={() =>{
            chooseSquare(5);
          }}
          />
        </div>  
        <div className='row'>
        <Square 
          val={board[6]} 
          chooseSquare ={() =>{
            chooseSquare(6);
          }}
          />
          <Square 
          val={board[7]}
          chooseSquare ={() =>{
              chooseSquare(7);
            }}
          />
          <Square 
          val={board[8]}
          chooseSquare ={() =>{
            chooseSquare(8);
          }}
          />
        </div>    
      </div>
      <div className='Button'>
        <button onClick={restart} className='restart'> <RotateCcw /> Play-Again</button>
      </div>
    </div>
  );
}

export default App;
