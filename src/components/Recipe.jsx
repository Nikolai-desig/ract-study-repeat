import { IoFastFoodSharp } from 'react-icons/io5';
import { BudgedSpot } from './RecipeList/RecipeList.style';

export const Recipe = ({ item: { name, img, dificult } }) => {
  return (
    <div style={{ border: '1px solid black', borderRadius: '4px' }}>
      <img src={img} alt={name} width="250px"></img>
      <h2 style={{ margin: '0' }}>{name}</h2>
      <div>
        <span>
          <IoFastFoodSharp size="30" />
        </span>
      </div>
      <div
        style={{
          marginBottom: '10px',
          display: 'flex',
          gap: '15px',
          justifyContent: 'center',
        }}
      >
        <BudgedSpot isActive={dificult === 'easy'} value={dificult}>Easy</BudgedSpot>
        <BudgedSpot isActive={dificult === 'hard'} value={dificult}>Hard</BudgedSpot>
      </div>
    </div>
  );
};
