import { useState } from 'react'
import {useHistory} from 'react-router-dom'

// styles
import './SearchBar.css'

export default function SearchBar() {
const [term , setTerm] = useState('')
const history = useHistory


const handleSubmit = (e) => {
    e.preventDefault()

    history.push(`/serach?q=${term}`)
}

  return (
    <div className="searchbar">
        <form onSubmit= {handleSubmit}>  {/*we need submit because we want to handle  */}
            <label htmlFor="serch">Search: </label>
            <input 
                type="text" 
                id = "search"
                onChange={(e) => setTerm(e.target.value)}
                required
            />
        </form>
    </div>
  )
}
