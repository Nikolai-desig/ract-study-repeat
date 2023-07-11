import { RecipeList } from './RecipeList/RecipeList';
import initialRecipes from '../recipes.json';
import { GlobalStyle } from './GlobalStyle';
import { Component } from 'react';

export class App extends Component {
  state = {
    recipes: initialRecipes,
  };

  deleteRecipe = recipeId => {
    this.setState(prevState => {
      return {
        recipes: prevState.recipes.filter(item => item.id !== recipeId),
      };
    });
  };

  render() {
    return (
      <div style={{ textAlign: 'center' }}>

        <RecipeList
          items={this.state.recipes}
          onDelete={this.deleteRecipe}
        />
        <GlobalStyle />
      </div>
    );
  }
}
