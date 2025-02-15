import React, { useState, useEffect ,} from "react";
import 'bootstrap/dist/css/bootstrap.min.css';

interface Recipe {
    id: string;
    name: string;
    cuisine: string;
    prepTimeMinutes: number;
    image: string;
}

const RecipeList: React.FC = () => {
    const API_URL = "https://dummyjson.com/recipes";
    const [recipeList, setRecipeList] = useState<Recipe[]>([]);
    
    const fetchRecipeList = async () => {
        const response = await fetch(API_URL);
        const data = await response.json();
        setRecipeList(data.recipes);
    };

    useEffect(() => {
        fetchRecipeList();
    }, []);

    

    return (
        <div className="container">
            <h1>Recipe List</h1>
            <div className="row row-cols-1 row-cols-md-2 g-4">
                {recipeList.map(recipe => (
                    <div key={recipe.id} className="col-md-4">
                        <div className="card mb-4">
                            <img src={recipe.image} className="card-img-top" alt={recipe.name} />
                            <div className="card-body">
                                <h5 className="card-title">{recipe.name}</h5>
                                <p className="card-text">Cuisine: {recipe.cuisine}</p>
                                <p className="card-text">Preparation Time: {recipe.prepTimeMinutes} minutes</p>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default RecipeList;