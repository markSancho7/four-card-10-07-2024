import Card from './components/card/Card';
import CardsContainer from './components/cardsContainer/CardsContainer';
import FirstColum from './components/firstColum/FirstColum';
import Title from './components/title/Title';

const App = () => {
	return (
		<>
			<Title />
			<CardsContainer>
				<FirstColum>
					<Card
						cardTitle='Team Builder'
						cardSentence='Scans our talent network to create the optimal team for your project'
						cardImg='public/images/icon-team-builder.svg'
						color='red'
					/>
				</FirstColum>
				<Card
					cardTitle='Supervisor'
					cardSentence='Monitors activity to identify project roadblocks'
					cardImg='public/images/icon-supervisor.svg'
					color='orange'
				/>
				<Card
					cardTitle='Calculator'
					cardSentence='Uses data from past projects to provide better delivery estimates'
					cardImg='public/images/icon-calculator.svg'
					color='blue'
				/>
				<Card
					cardTitle='Karma'
					cardSentece='Regularly evaluates our talent to ensure quality'
					cardImg='public/images/icon-karma.svg'
					color='grey'
				/>
			</CardsContainer>
		</>
	);
};

export default App;
