import React from 'react';
import './App.css';
import Accordion from "./components/Accordion/Accordion";
import {Rating} from "./components/Rating/Rating";

function App() {
  return (
    <div className="App">
        <AppTitle title={'Random text'}/>
        <div>Article 1</div>
        <Rating value={3}/>

        <div>Article 2</div>
        <Rating value={5}/>
        <Accordion titleValue={'Accordion title 1'} collapsed={true}/>
        <br/>
        <Accordion titleValue={'Accordion title 2'} collapsed={false}/>
    </div>
  );
}

type AppTitleProps = {
    title: string
}

function AppTitle(props: AppTitleProps) {
    return <h1>{props.title}</h1>
}

export default App;
