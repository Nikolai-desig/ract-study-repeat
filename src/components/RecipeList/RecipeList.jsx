import { Recipe } from './Recipe';
import { List } from './RecipeList.style';

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
