import React from 'react';
import './App.css';
import Accordion from "./components/Accordion/Accordion";
import {Rating} from "./components/Rating/Rating";

function App() {
  return (
    <div className="App">
        <h1>
            <AppTitle title={'Random text'}/>
        </h1>
        <div>Article 1</div>
        <Rating value={3}/>

        <div>Article 2</div>
        <Rating value={5}/>
        <Accordion title={'Accordion title'}/>
    </div>
  );
}

function AppTitle(props: any) {
    return props.title
}

export default App;
