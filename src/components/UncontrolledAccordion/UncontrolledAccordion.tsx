import {useState} from "react";

type AccordionType = {
    titleValue: string
}

type AccordionTypeTitle = {
    title: string
    setCollapsed: () => void
}

function UncontrolledAccordion(props: AccordionType) {

    let [collapsed, setCollapsed] = useState(false);

    return (
        <div className="accordion">
            <AccordionTitle setCollapsed={() => {setCollapsed(!collapsed)}} title={props.titleValue}/>
            {!collapsed && <AccordionBody/>}
        </div>
    )
}

function AccordionTitle(props: AccordionTypeTitle) {
    return <button onClick={() => { props.setCollapsed() }}>
        <h2 className="accordion__title">{props.title}</h2>
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

export default UncontrolledAccordion