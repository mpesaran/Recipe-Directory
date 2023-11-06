import { Link } from 'react-router-dom'
import {useTheme} from '../hook/useTheme'

import './Navbar.css'
import SearchBar from './SearchBar'


export default function Navbar() {
  const { color } = useTheme()

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
