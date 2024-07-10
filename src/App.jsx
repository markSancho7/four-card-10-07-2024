import Card from './components/card/Card';
import CardsContainer from './components/cardsContainer/CardsContainer';
import Colum1 from './components/colum1/Colum1';
import Colum2 from './components/colum2/Colum2';
import Colum3 from './components/colum3/colum3';

import Title from './components/title/Title';

const App = () => {
	return (
		<>
			<Title />
			<CardsContainer>
				<Colum1>
					<Card
						cardTitle='Team Builder'
						cardSentence='Scans our talent network to create the optimal team for your project'
						cardImg='public/images/icon-team-builder.svg'
						color='red'
					/>
				</Colum1>
				<Colum2>
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
				</Colum2>
				<Colum3>
					<Card
						cardTitle='Karma'
						cardSentece='Regularly evaluates our talent to ensure quality'
						cardImg='public/images/icon-karma.svg'
						color='grey'
					/>
				</Colum3>
			</CardsContainer>
		</>
	);
};

export default App;
