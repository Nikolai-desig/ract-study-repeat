import { IoFastFoodSharp } from 'react-icons/io5';
import { BudgedSpot } from './RecipeList.style';
import css from './Recipe.module.css';
import { Component } from 'react';
import { Modal } from './Modal';

export class Recipe extends Component {
  state = {
    isOpen: false,
  };

  openModal = () => {
    this.setState({
      isOpen: true,
    });
  };

  closeModal = () => {
    this.setState({
      isOpen: false,
    });
  };

  render() {
    const {
      item: { id, name, img, dificult },
      onDelete,
    } = this.props;

    return (
      <div className={css.card}>
        <img src={img} alt={name} width="250px"></img>
        <h2 style={{ margin: '0' }}>{name}</h2>
        <div>
          <span>
            <IoFastFoodSharp size="30" />
          </span>
        </div>
        <div className={css.difLvl}>
          <BudgedSpot isActive={dificult === 'easy'} value={dificult}>
            Easy
          </BudgedSpot>
          <BudgedSpot isActive={dificult === 'hard'} value={dificult}>
            Hard
          </BudgedSpot>
          <BudgedSpot isActive={dificult === 'mid'} value={dificult}>
            Mid
          </BudgedSpot>
        </div>
        <div className={css.action_buttons}>
          <button onClick={() => onDelete(id)}>Delete</button>
          <button onClick={this.openModal}>Zoom</button>
        </div>

        {this.state.isOpen && (
          <Modal
            img={img}
            isOpen={this.state.isOpen}
            onClose={this.closeModal}
          />
        )}
      </div>
    );
  }
}
