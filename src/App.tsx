import React from 'react';
import './App.css';
import Accordion from "./components/Accordion/Accordion";
import {Rating} from "./components/Rating/Rating";
import {OnOff} from "./components/OnOff/OnOff";

function App() {
  return (
    <div className="App">
        <AppTitle title={'Random text'}/>
        <Rating value={0}/>
        <Rating value={1}/>
        <Rating value={2}/>
        <Rating value={3}/>
        <Rating value={4}/>
        <Rating value={5}/>
        <Accordion titleValue={'Accordion title 1'} collapsed={true}/>
        <br/>
        <Accordion titleValue={'Accordion title 2'} collapsed={false}/>

        <OnOff/>
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
