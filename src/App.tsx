import React from 'react';
import { Routes, Route } from 'react-router-dom';
import ListOfCards from './components/ListOfCards';
import ArticlePage from './components/ArticlePage';
import Navbar from './components/Navbar';
import About from './components/About';
import Footer from './components/Footer';
import './App.scss';
import { CardContext } from './store/card-context';
import { useState } from 'react';
import ScrollToTop from './components/ScrollToTop';

function App() {
	const [ data, setData ] = useState();
	return (
		<div className="App">
			<CardContext.Provider value={{ data, setData }}>
				<Navbar />
				<ScrollToTop>
					<Routes>
						<Route path="/" element={<ListOfCards />} />
						<Route path="/:id" element={<ArticlePage />} />
						<Route path="/about" element={<About />} />
					</Routes>
				</ScrollToTop>
				<Footer />
			</CardContext.Provider>
		</div>
	);
}

export default App;
