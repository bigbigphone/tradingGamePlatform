import { useState } from 'react'
import axios from 'axios'
import { IoIosArrowBack } from "react-icons/io";
import {  Link } from 'react-router-dom'
import config from "../config/default.json"

export default function AddGame() {
    const [name,setName] = useState('');
    const [title,setTitle] = useState('');
    const [type, setType] = useState('ps');
    const [price,setPrice] = useState(0);
    const [place,setPlace] = useState('');
    const [contact,setContact] = useState('');
    const [description,setDescription] = useState('');
    const [problem,setProblem] = useState(true);
    const [problemDetail,setProblemDetail] = useState('');

    const handleSubmit = (e) =>{
      console.log("submitting")
      e.preventDefault();
      const data ={name, title, price, place, contact, type, description};
      const options = {
        url: 'https://gametradingplatform.herokuapp.com/api/products',
        method: 'POST',
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json;charset=UTF-8'
        },
        data: data
      };
      axios(options)
            .then(response=>{
                alert("Successfully created a new post.");   
                setProblem(true)
            })
            .catch(err=>{
              setProblem(false)
              setProblemDetail(err.response.data)})
    }
    return (
      <main className="add_main">
            <div className="Game_Page">
              <Link to='/' className="back"><IoIosArrowBack/></Link>
              <form onSubmit={handleSubmit} className="add_main_form_part">
                <h2>Create a Game Post</h2>
                <div className="add_main_content_part">
                    <div className="add_main_content_part_block1">
                        <p>Name:</p>
                        <input type="text" placeholder="Name" value={name} onChange={(e)=>setName(e.target.value)}/>
                        <p>Listing Title:</p>
                        <input type="text" placeholder="Title" value={title} onChange={(e)=>setTitle(e.target.value)}/>
                        <p>Price:</p>
                        <input type="number" min="0.00" max="10000.00" step="1" placeholder="Price" value={price} onChange={(e)=>setPrice(e.target.value)}/>
                        <p>Meet up Place:</p>
                        <input type="text" placeholder="Place" value={place} onChange={(e)=>setPlace(e.target.value)}/>
                        <p>Contact Method:</p>
                        <input type="text" placeholder="TG/Phone Number" value={contact} onChange={(e)=>setContact(e.target.value)}/>
                    </div>
                    <div className="add_main_content_part_block2">
                        <p>Suit for Console:</p>
                        <select onChange={(e)=>setType(e.target.value)}>
                            <option value="ps">PlayStation</option>
                            <option value="xbox">Xbox</option>
                            <option value="ns">Nintendo</option>
                        </select>
                        <p>Description (Optional):</p>
                        <textarea  placeholder="You may jot down anything necessary here." value={description} onChange={(e)=>setDescription(e.target.value)} cols="30" rows="10"></textarea>
                        <br/>
                        <input type="submit" value="Create a New Post" />
                    </div>
                </div>
                <div className="Game_Page_warning">
                  {!problem && <div>{problemDetail}</div>}
                </div>
              </form>
            </div>

      </main>
    )
  }