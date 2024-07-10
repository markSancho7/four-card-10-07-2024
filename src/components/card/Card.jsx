import style from './card.module.css';
const Card = props => {
	console.log(props.color);
	return (
		<>
			<div
				className={style.cardContainer}
				style={{ borderTop: `4px solid ${props.color}` }}
			>
				<p className={style.cardTitle}>{props.cardTitle}</p>
				<p className={style.cardSentence}>{props.cardSentence}</p>
				<img
					className={style.cardImg}
					src={props.cardImg}
					alt='imagenTarjeta'
				/>
			</div>
		</>
	);
};
export default Card;
