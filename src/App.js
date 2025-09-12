
import './App.css';
import React from 'react'
import Heading from './components/Heading';
import Footer from './components/Footer';
const element=(<span>Adding an element </span>)
function App() {
  
  return (
		<div>
			<Heading />
      {element}
			<div>Greaat</div>
      <Footer/>
		</div>
	);
}



export default App;
