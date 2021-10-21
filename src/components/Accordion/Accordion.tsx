import React from "react";

type AccordionType = {
    titleValue: string
    collapsed: boolean
}

type AccordionTypeTitle = {
    title: string
}

function Accordion(props: AccordionType) {
    return (
        <div className="accordion">
            <AccordionTitle title={props.titleValue}/>
            {!props.collapsed && <AccordionBody/>}
        </div>
    )
}

function AccordionTitle(props: AccordionTypeTitle) {
    console.log('Accordion Title')
    return <h2 className="accordion__title">{props.title}</h2>
}

function AccordionBody() {
    return (
        <ul className="accordion__body">
            <li>1</li>
            <li>2</li>
            <li>3</li>
        </ul>
    )
}

export default Accordion