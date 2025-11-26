import logo from './logo.svg';
import './App.css';
import { useEffect, useState, useRef } from 'react';


function App() {
	const [stage, setStage] = useState("wait");
	const numToTypeRef = useRef(Math.floor(Math.random() * 100000000000));	
	const [result, setResult] = useState(false);
	useEffect(() => {
		setTimeout(() => {
			setStage("type");

		}, 1000);

		setTimeout(() => {
			setStage("check");
		}, 5000);

	}, []);

	const iR = useRef("");

	const focousRef = useRef();

	useEffect(() => {
		if(stage == "type") {
			focousRef.current?.focus();
		}
		if(stage != "check") return;
			if (iR.current != numToTypeRef.current) {
				setResult(false);
			} else {
				setResult(true)
			}
	}, [stage]);

	switch(stage) {
		case 'wait':
			return <div>Wait</div>	
			break;
		case 'type':
			return <>
					<h1>Type {numToTypeRef.current}</h1>
					<input ref={focousRef}  onChange={(e) => {
						const value = e.target.value;
						iR.current = value;
					}}/>
				</>
			break;
		case 'check':
			if(result) {

				return <div>You win</div>
			} else {
				return <div>You died</div>
			}
			break;
		default:
			return <></>
			break;

	}

}

export default App;
