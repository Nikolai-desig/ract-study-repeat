import { RecipeList } from "./RecipeList";
import recipes from "../recipes.json"


export const App = () => {
  return <div style={{textAlign:"center"}}>
    <RecipeList items={recipes}/>
  </div>
};
