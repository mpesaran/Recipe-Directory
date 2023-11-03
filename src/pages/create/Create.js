import { useRef, useState } from 'react'

// styles
import './Create.css'


export default function Create() {
const [title , setTitle] = useState('')
const [method, setMethod] = useState('')
const[cookingTime , setCookingTime] = useState('')
const [newIngredients, setNewIngredients] = useState('') //adding new ingredient
const [ingredients , setIngredients] = useState([]) //array to keep ingredients list
const ingredientInput = useRef(null)

const handleSubmit = (e)=> {
  e.preventDefault()
  console.log(title, method, cookingTime)
  console.log(ingredients)
}

const handleadd = (e) => {
  e.preventDefault()
  const ing = newIngredients.trim()

  if (ing && !ingredients.includes(ing)) {  //checks if the new value entered and also checks the array for the new ingredient be unique
    setIngredients(prevIngredients => [...prevIngredients, ing])
  }
  setNewIngredients('')
  ingredientInput.current.focus()
}

  return (
    <div className='create'>
      <h2 className="page-title">Add a new Recipe</h2>
      <form onSubmit={handleSubmit}>
        <label>
          <span>Recipe Title</span>
          <input 
            type="text" 
            onChange={(e) => setTitle(e.target.value)}
            value={title}
            required
          />
        </label>

        <label>
          <span>Recipe ingeredients: </span>
          <div className="inggredients">
            <input 
              type="text"
              onChange={(e) => setNewIngredients(e.target.value)}
              value={newIngredients}
              ref = {ingredientInput}
            />
            <button onClick={handleadd} className="btn">Add</button>
          </div>
        </label>
        <p>Current Ingredients : {ingredients.map((i) => <em key = {i}>{i}, </em>)}</p> {/*when we have map all the items should have a key */}

        <label>
          <span>Recipe Methos:</span>
          <textarea 
            onChange={(e) => setMethod(e.target.value)}
            value = {method}
            required
          />
        </label>
        <label>
          <span>Cooking Time (minutes): </span>
          <input 
            type="number" 
            onChange={(e) => setCookingTime(e.target.value)}
            value ={cookingTime}
            required
          />
        </label>
        <button className="button">Submit</button>
      </form>

    </div>
  )
}
