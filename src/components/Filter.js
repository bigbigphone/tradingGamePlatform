import { useParams,Link } from 'react-router-dom'
import { links } from '../data';
import { useState, useEffect } from 'react'

const Filter = () => {
    const { filter } = useParams()
    const [title, setTitle] = useState("All");
    const changefilter = (filter) => {
        if (filter!== undefined){
            setTitle(filter)
          }else{
            setTitle("All")
          }
    }

    useEffect(() => {
      changefilter(filter)
    }, [filter])
    return (
        <div className="filter_canvas">
            <h3>{title}</h3>
            <ul className='filter'>
                {links.map((link) => {
                    const { id, url, text} = link;
                        return (
                            <li key={id}>
                            <Link to= {url}>{text}</Link>
                            </li>
                        );
                })}
            </ul>
        </div>
    )
}
   
export default Filter