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
            <AccordionTitle title={props.titleValue} />
            <AccordionBody show={props.collapsed}/>
        </div>
    )
}

function AccordionTitle(props: AccordionTypeTitle) {
    console.log('Accordion Title')
    return <h2 className="accordion__title">{props.title}</h2>
}

type AccordionBodyProps = {
    show: boolean
}

function AccordionBody(props: AccordionBodyProps) {
    console.log('Accordion Body')
    if (props.show) {
        return (
            <ul className="accordion__body">
                <li>1</li>
                <li>2</li>
                <li>3</li>
            </ul>
        )
    } else {
        return <></>
    }
}

export default Accordion