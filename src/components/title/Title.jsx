import style from './title.module.css';
const Title = () => {
	return (
		<div className={style.center}>
			<h1 className={style.principalTitle}>Reliable, efficient delivery</h1>
			<h2 className={style.subtitle}>Powered by Technology</h2>
			<p className={style.lastSentence}>
				Our ARtufucual intelligence powered tools use millions of project data
				points to ensure that your project is successful
			</p>
		</div>
	);
};
export default Title;
