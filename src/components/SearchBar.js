import { useState } from 'react'
import {useNavigate} from 'react-router-dom'

// styles
import './SearchBar.css'

export default function SearchBar() {
const [term , setTerm] = useState('')
const navigate = useNavigate()


const handleSubmit = (e) => {
    e.preventDefault()

    navigate(`/search?q=${term}`)
    setTerm('')
}

  return (
    <div className="searchbar">
        <form onSubmit= {handleSubmit}>  {/*we need submit because we want to handle  */}
            <label htmlFor="search">Search: </label>
            <input 
                type="text" 
                id = "search"
                onChange={(e) => setTerm(e.target.value)}
                value={term}
                required
            />
        </form>
    </div>
  )
}
