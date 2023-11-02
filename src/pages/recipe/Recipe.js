import {useParams} from 'react-router-dom'
import { useFetch } from '../../hook/useFetch'
//styles
import './Recipe.css'


export default function Recipe() {
  const {id} = useParams()
  const url = 'http://localhost:3000/recipes/' +id
  const {data : recipe  , isPending , error} = useFetch(url)

  return (
    <div className='recipe'>
      {error && <p className='error' >{error}</p>}
      {isPending && <p className='loading'>Loading ...</p>}
      {recipe && <h2>{recipe.title}</h2> }
    </div>
  )
}
