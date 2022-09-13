import React, { useState ,useEvent } from "react";
import Cell from "./Cell";
import Tile from "./Tile";
import {Board} from "../helper";
import GameOverlay from "./GameOverlay";

const BoardView = () =>
{
    const [board,setboard]=useState( new Board ());

    const handelKeyDown = (event) => {
        if(board.hasWon())
        {
            return ;
        }

        if(event.keyCode>=37 && event.keyCode<=40){
            let direction = event.keyCode -37;
           // let boardClone= object.assign(object.create(object.getPrototypeOf(board)),board);
            //let newBoard = boardClone.move(direction);
           // setboard(newBoard);
        }
    }  
    
    useEvent("keydown" ,handelKeyDown);

    const cells = board.cells.map((row,rowIndex) =>{
        return (
            <div key={rowIndex}>
                {row.map((col,colIndex)=>{
                    return <Cell key={rowIndex + board.size + colIndex}/>
                })}
            </div>
        )
    })

    const tiles = board.tiles.filter((tile)=>tile.value!==0).map ((tile,index)=>{
        return <Tile tile={tile} key={index}/>;
    });

    const resetGame =()=>{
        setboard(new Board())
    }
    return  <div>
              <div className="details-box"> 
                <div  className="resetButton" onClick ={resetGame}>New Game</div>
                <div clasName ="score-box">
                    <div clasName ="score-header">SCORE</div>
                    <div>Score: {board.score}</div>
                </div>
              </div>
               <div className="board">
                 {cells}
                  {tiles}
                  <GameOverlay OnRestart={resetGame} board={board}/> ; 
                </div>
            </div>
};

export default BoardView ;
