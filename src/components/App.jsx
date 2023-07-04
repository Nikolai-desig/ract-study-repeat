import { RecipeList } from "./RecipeList/RecipeList";
import recipes from "../recipes.json"
import { GlobalStyle } from "./GlobalStyle";


export const App = () => {
  return <div style={{textAlign:"center"}}>
    <RecipeList items={recipes}/>
    <GlobalStyle/>
  </div>
};
