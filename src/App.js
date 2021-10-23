import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import axios from 'axios';

const MainWrapper = styled.div`
	.heading{
		color: #cebf7b;
		text-align: center;
    font-size: 42px;
    padding-top: 10px;
	}
	.app{
		padding: 30px 0;
		width: 1120px;
		margin: 0 auto;
		display: grid;
		grid-template-columns: repeat(4, 1fr);
		grid-gap: 20px;
		.card {
			width: 12rem auto;
			background: #444;
			color: #e4c439;
			padding: 1rem;
			border-radius: 10px;
			border-top: 0.5px solid #cebf7b;
			border-bottom: 0.5px solid #cebf7b;
			text-align: center;
			box-shadow: 0 3px 6px rgba(0, 0, 0, 0.16), 0 3px 6px rgba(0, 0, 0, 0.23);
			position: relative;
			overflow: hidden;
			transition: 0.2s ease-in-out all;
			&:hover {
				transform: scale(1.05);
			}
			.card--id {
				background: #cebf7b;
				width: 3rem;
				color: #333;
				padding: 0.1rem;
				font-weight: 700;
				position: absolute;
				border-radius: 0 0 10px 0;
				top: 0;
				left: 0;
			}
			.card--name {
				text-transform: capitalize;
				color: #fff;
				font-size: 2rem;
				font-weight: 700;
			}
			.card--image {
				width: 150px;
				display: block;
				margin: auto;
			}
			.card--details {
				font-size: 1.3rem;
				color: #dbca80;
			}
			.quote {
				color: #fff;
				font-size: 1.3rem;
				word-wrap: break-word;
			}
		}
	}
	footer{
		text-align: center;
		color: #fff;
	}

	/* responsive css */
	@media (max-width: 768px) {
    .app{
			width: 100%;
			grid-template-columns: repeat(3, 1fr);
			padding: 30px 10px;
		}
  }
	@media (max-width: 425px) {
    .app{
			width: 100%;
			grid-template-columns: 1fr;
			padding: 30px 10px;
		}
  }
`

const App = () => {

	const [data, setData] = useState([]);

	useEffect(()=>{
		axios.get(`https://api.sampleapis.com/futurama/characters`)
			.then(res => {
				console.log(res.data);
				setData(res.data)
			})
			.catch(error => 
				console.log(error)
			);
	}, [])

	return (
		<MainWrapper>
			<h1 className="heading">Meet the Futuramas</h1>
			<div className="app">
				{data.map(item => 
					<div key={item.id} className="card">
						<span className="card--id">{item.id}</span>
						<img className="card--image" src={item.images.main} alt={item.name.first} />
						<h1 className="card--name">{`${item.name.first} ${item.name.middle} ${item.name.last}`}</h1>
						<span className="card--detail">{item.gender} - </span>
						<span className="card--detail">{item.age} yrs</span>
						<p className="quote">"{item.sayings[0]}"</p>
					</div>
				)}
			</div>
			<footer className="footer">
				Made with love 💛 and coffee ☕
			</footer>
		</MainWrapper>
	);
}
 
export default App;
