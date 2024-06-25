import { useLocation } from 'react-router-dom'
import RecipeList from '../../components/RecipeList'
import {projectFirestore} from '../../firebase/config'
import  { useState, useEffect } from 'react';


//styles
import './Search.css'


// 
export default function Search() {
 // Use useLocation to get the current URL and search query
 const location = useLocation();
 const queryParams = new URLSearchParams(location.search);
 const searchQuery = queryParams.get('q'); // Extract the 'q' parameter from the URL

 const [data, setData] = useState(null);
 const [isPending, setIsPending] = useState(true);
 const [error, setError] = useState(null);

 // useEffect to fetch data from Firestore when the search query changes
 useEffect(() => {
   const fetchData = async () => {
     setIsPending(true); 
     setError(null); 

     try {
       const recipesRef = projectFirestore.collection('recipes');
       const snapshot = await recipesRef.where('title', '==', searchQuery).get();

        // Process the snapshot to extract recipe data
       const recipes = [];
       snapshot.forEach(doc => {
         recipes.push({ id: doc.id, ...doc.data() });
       });

       // Update state with fetched recipes
       setData(recipes);
       setIsPending(false);
     } catch (err) {
       // Handle any errors that occur during the fetch
       setError(err.message);
       setIsPending(false);
     }
   };

   fetchData();
 }, [searchQuery]); // Dependency array to re-run the effect when the search query changes

  return (
    <div>
      <h2 className="page-title">Recipes including "{searchQuery}"</h2>
      {error && <p className="error"> {error}</p>}
      {isPending && <p className="loading">Loading ...</p>}
      {data && <RecipeList recipes={data} />}
    </div>
  );
}