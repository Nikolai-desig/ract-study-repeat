import { RecipeList } from './RecipeList/RecipeList';
import initialRecipes from '../recipes.json';
import { GlobalStyle } from './GlobalStyle';
import { Component } from 'react';
import { RecipeForm } from './RecipeForm/RecipeForm';

export class App extends Component {
  state = {
    recipes: initialRecipes,
  };

  addRecipe = newRecipe => {
    this.setState(prevState => {
      return {
        recipes: [...prevState.recipes, newRecipe]
      }
    })
  }

  deleteRecipe = recipeId => {
    this.setState(prevState => {
      return {
        recipes: prevState.recipes.filter(item => item.id !== recipeId),
      };
    });
  };

  render() {
    return (
      <div>
        <RecipeForm onSubmit={this.addRecipe}/>
        <RecipeList
          items={this.state.recipes}
          onDelete={this.deleteRecipe}
        />
        <GlobalStyle />
      </div>
    );
  }
}
