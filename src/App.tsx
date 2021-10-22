import React from 'react';
import './App.css';
import Accordion from "./components/Accordion/Accordion";
import {Rating} from "./components/Rating/Rating";
import {OnOff} from "./components/OnOff/OnOff";
import UncontrolledAccordion from "./components/UncontrolledAccordion/UncontrolledAccordion";

function App() {
  return (
    <div className="App">
        <AppTitle title={'Random text'}/>
        <Rating/>
        <Rating/>
        <Rating/>
        <Rating/>
        <Rating/>
        <Rating/>
        <UncontrolledAccordion titleValue={'Accordion title 1'}/>
        <br/>
        <UncontrolledAccordion titleValue={'Accordion title 2'}/>

        <OnOff />
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
