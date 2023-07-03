import { IoFastFoodSharp } from 'react-icons/io5';

export const Recipe = ({ item: { name, img } }) => {
  return (
    <div>
      <img src={img} alt={name} width="250px"></img>
      <h2 style={{ margin: '0' }}>{name}</h2>
      <div>
        <span>
          <IoFastFoodSharp size="30" />
        </span>
      </div>
      <div style={{ marginBottom: '20px' }}>
        <span style={{ marginRight: '20px' }}>Easy</span>
        <span>Hard</span>
      </div>
    </div>
  );
};
