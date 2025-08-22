import './index.css';
import GlobalStyles from './styles/GlobalStyles';
import HomePage from './pages/HomePage';
import main from './styles/themes/main';
import { ThemeProvider } from 'styled-components';
import { useEffect } from 'react';

function App() {
  	useEffect(() => {
		document.title = 'Natanael Nogueira - Portfólio';
	}, []);
  
	return (
		<ThemeProvider theme={main}>
			<GlobalStyles />
			<HomePage />
		</ThemeProvider>
	);
}

export default App;
