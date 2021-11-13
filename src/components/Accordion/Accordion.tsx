import React from "react";

type AccordionType = {
    titleValue: string
    collapsed: boolean
    onChange: (collapsed: any) => void
}

function Accordion(props: AccordionType) {
    return (
        <div className="accordion">
            <AccordionTitle collapsed={props.collapsed} onChange={props.onChange} titleValue={props.titleValue}/>
            { !props.collapsed && <AccordionBody/>}
        </div>
    )
}

function AccordionTitle(props: AccordionType) {
    const clickCollapsed = () => {
        props.onChange(!props.collapsed)
    }

    return <button onClick={clickCollapsed}>
        <h2 className="accordion__title">{props.titleValue}</h2>
    </button>
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