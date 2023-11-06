import { Link } from 'react-router-dom'
import {useContext} from 'react'
import { ThemeContext } from '../context/ThemeContext'

import './Navbar.css'
import SearchBar from './SearchBar'


export default function Navbar() {
  const {color } = useContext(ThemeContext)
  return (
    <div className='navbar' style = {{background : color}}>
        <nav>
            <Link className="brand" to = "/">
                <h1>Cooking</h1>
            </Link>
            <SearchBar />
            <Link to="/create" >Create new recipe</Link>
        </nav>
    </div>
  )
}
