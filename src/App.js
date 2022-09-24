import React from 'react';
import TrackChangesIcon from '@material-ui/icons/TrackChanges';
import PhonelinkEraseIcon from '@material-ui/icons/PhonelinkErase';
import ListAltIcon from '@material-ui/icons/ListAlt';
import {createTheme, ThemeProvider} from '@material-ui/core';

import HeaderCard from './components/Header_Card';
import DoubtsCard from './components/Doubts_card';
import Carousel from './components/Carousel';
import DataStructCard from './components/DataStruct_Card';

const theme = createTheme({
	palette: {
		primary: {
			main: "#006666",
		},
		secondary: {
			main: "#a6a6a6",
		},
	}
})

function App() {
	return (
	<ThemeProvider theme={theme}>
		<div className='container'>
			<div className='row header'>
				<div className='col'><HeaderCard 
					icon={<TrackChangesIcon />}
					heading="1/11"
					subHead="Daily Target"
					// theme={theme}
				/></div>
				<div className='col'><HeaderCard 
					icon={<PhonelinkEraseIcon />}
					heading="0/4"
					subHead="Doubt Rejected"
					//theme={theme}
				/></div>
				<div className='col'><HeaderCard 
					icon={<ListAltIcon />}
					heading="0/11"
					subHead="Projects Evaluated"
					//theme={theme}
				/></div>
			</div>

			<div className='row'>
				<div className='col'> 
					<DoubtsCard />
					<Carousel />
				</div>
				<div className='col'>
					<DataStructCard />
				</div>
			</div>
		</div>
	</ThemeProvider>
	);
}

export default App;
