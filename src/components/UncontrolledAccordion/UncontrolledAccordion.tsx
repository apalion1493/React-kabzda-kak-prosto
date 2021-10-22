import {useState} from "react";

type AccordionType = {
    titleValue: string
}

type AccordionTypeTitle = {
    title: string
}

function UncontrolledAccordion(props: AccordionType) {

    let [collapsed, setCollapsed] = useState(false);

    return (
        <div className="accordion">
            <AccordionTitle title={props.titleValue}/>
            <button onClick={() => {setCollapsed(!collapsed)}}>TOGGLE</button>
            {!collapsed && <AccordionBody/>}
        </div>
    )
}

function AccordionTitle(props: AccordionTypeTitle) {
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

export default UncontrolledAccordion