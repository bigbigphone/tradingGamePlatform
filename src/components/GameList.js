import { useState, useEffect, useRef } from 'react'
import { BiSearch } from "react-icons/bi";
import SingleGame from './SingleGame';
import config from "../config/default.json"

const GameList = ({filter}) => {
    const [search,setSearch] = useState("");
    const [gameList, setgameList] = useState([]);
    const [oldgameList, setoldgameList] = useState([]);
    const inputEl = useRef("");

    useEffect(() => {
      const fetchGameList = async (type) => {
        try {
          const response = await fetch(config.apiGameList)
          const games = await response.json()
          if (filter!== undefined){
            const newgames = games.filter((game) => game.type === type)
            setgameList(newgames)
            setoldgameList(newgames)
          }else{
            setgameList(games)
            setoldgameList(games)
          }
        } catch (error) {
          console.log(error)
        }
      }
      fetchGameList(filter)
    }, [filter])

    const SearchHandler=()=>{
      setSearch(inputEl.current.value)
      console.log("Fuck you")
      GiveResult()

    };

    const GiveResult=()=>{
      
      if (inputEl.current.value!==""){
        const newGameList = oldgameList.filter((game)=>{
          return Object.values(game.title)
            .join("")
            .toLowerCase()
            .includes(inputEl.current.value.toLowerCase());
        })
        setgameList(newGameList)
        
      }else{
        setgameList(oldgameList);
      }
    }
 
    return (
      <section className="game-section">
          <div className="section-center">
              <div className="search">
                <i><BiSearch/></i>
                <input ref={inputEl} type="text" placeholder="Search Games" value={search} onChange={SearchHandler} ></input>
                
              </div>
              {gameList.map((gameitem) => {
                  return(

                      <SingleGame key={gameitem._id} 
                      {...gameitem} 
                       />

                  );
              })}
          </div>
          
      </section>
    )
    }
      
            
  export default GameList;