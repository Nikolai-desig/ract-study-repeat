import { Recipe } from './Recipe';
import { List } from './RecipeList.style';
import css from "./Recipe.module.css"

export const RecipeList = ({ items, onDelete, onZoom }) => {
  return (
    <List>
      {items.map(item => (
        <li key={item.id}>
          <Recipe item={item} onDelete={onDelete} onZoom={onZoom} />
        </li>
      ))}
    </List>
  );
};
