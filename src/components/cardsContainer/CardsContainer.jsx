import style from './cardsContainer.module.css';
const CardsContainer = props => {
	console.log(props);
	return <div className={style.cardsPosition}>{props.children}</div>;
};
export default CardsContainer;
