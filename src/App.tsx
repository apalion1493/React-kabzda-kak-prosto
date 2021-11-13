import React, {useState} from 'react';
import './App.css';
import Accordion from "./components/Accordion/Accordion";
import {Rating, RatingValueType} from "./components/Rating/Rating";
import {OnOff} from "./components/OnOff/OnOff";
import UncontrolledAccordion from "./components/UncontrolledAccordion/UncontrolledAccordion";
import {UncontrolledRating} from "./components/UncontrolledRating/UncontrolledRating";
import {ControlOnOff} from "./components/OnOff/ControlOnOff";

function App() {
    let [ratingValue, setRatingValue] = useState<RatingValueType>(4);
    let [accordionCollapsed, setAccordionCollapsed] = useState<boolean>(false);
    let [on, setOn] = useState<boolean>(false);

  return (
    <div className="App">
        <AppTitle title={'Random text'}/>

        {/*<Rating value={ratingValue} onClick={setRatingValue}/>*/}

        <br/>
        <br/>
        
        {/*<UncontrolledRating/>*/}
        
        <br/>
        <br/>

        <UncontrolledAccordion titleValue={'Accordion menu 1'}/>

        <br/>

        <Accordion titleValue={'Accordion menu 2'} collapsed={accordionCollapsed} onChange={setAccordionCollapsed}/>

        <br/>
        <br/>
        <br/>
        <br/>

        <OnOff onChange={setOn} />

        <br/>
        <br/>
        <br/>

        <ControlOnOff on={on} setOn={setOn}/>
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
