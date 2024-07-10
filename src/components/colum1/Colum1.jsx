import style from './colum1Style.module.css';

const Colum1 = props => {
	return <div className={style.colum1}>{props.children}</div>;
};
export default Colum1;
