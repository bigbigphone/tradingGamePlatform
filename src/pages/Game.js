import { useParams, Link } from 'react-router-dom'
import { useState, useEffect } from 'react'
import { IoIosArrowBack } from "react-icons/io";
import {ImPriceTags} from "react-icons/im";
import { MdPerson, MdPlace, MdContactPhone} from "react-icons/md";
import Loading from '../components/Loading'
import config from "../config/default.json"
export default function Product() {
    const { id } = useParams()
    const [datetime,setdatetime]= useState("")
    const [loading, setLoading] = useState(true)
    const [game, setgame] = useState([])

    useEffect(() => {
      const fetchGame = async () => {
        setLoading(true)
        try {
          const response = await fetch(`${config.apiGame+id}`)
          const games = await response.json()
          setLoading(false)
          setgame(games)
          setdatetime(()=>{
            for (var i=0; i<games.date.length;i++){
              if (games.date[i]==="T"){
                return games.date.substring(0,i)
              }
            }
          })
        } catch (error) {
          setLoading(false)
        }
      }
      fetchGame()
    }, [])
    
    if (loading) {
        return (
          <main>
            <Loading />
          </main>
        )
    }
    else{
        const {name, title, price, place, contact, description, date} = game;
        return (
            <main className="Game_Page">
                <Link to='/' className="back"><IoIosArrowBack/></Link>
                <div className="game_canvas">
                    
                    <div >
                        <h3>{title}</h3>
                        <div className="game_information">
                          <div className="game_information_some">
                            <span><ImPriceTags/></span>
                            <p>${price}</p>
                          </div>
                          <p>{datetime}</p>
                        </div>
                        <div className="game_information">
                          <div className="game_information_some">
                            <span><MdPerson/></span>
                            <p>{name}</p>
                          </div>
                          <div className="game_information_some">
                            <span><MdPlace/></span>
                            <p>{place}</p>
                          </div>
                          <div className="game_information_some">
                            <span><MdContactPhone/></span>
                            <p >{contact}</p>
                          </div>
                        </div>
                        <p>{description}</p>
                    </div>
                </div>

                
            </main>
        )
    }
  }