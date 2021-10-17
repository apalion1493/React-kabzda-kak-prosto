import React from "react";

function Accordion(props: any) {
    return (
        <div className="accordion">
            <h3 className="accordion__title"><AccordionTitle title={props.title}/></h3>
            <AccordionBody/>
        </div>
    )
}

function AccordionTitle(props: any) {
    console.log('Accordion Title')
    return props.title
}

function AccordionBody() {
    console.log('Accordion Body')
    return (
        <ul className="accordion__body">
            <li>1</li>
            <li>2</li>
            <li>3</li>
        </ul>
    )
}

export default Accordion