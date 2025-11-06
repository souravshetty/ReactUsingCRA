
import './App.css';
import React from 'react'
import Heading from './components/Heading';
import Footer from './components/Footer';
import Program1 from './Program1';
const element=(<span>Adding an element </span>)
function App() {
  
  return (
		<div>
			<Program1/>
			<Heading />
      {element}
			<div>Greaat</div>
      <Footer/>
		</div>
	);
}
 export default App;





