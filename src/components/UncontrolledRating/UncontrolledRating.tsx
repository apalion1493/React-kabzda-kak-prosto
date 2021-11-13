import React, {useState} from "react";
import '../Rating/Rating.css'

export function UncontrolledRating() {
    let [value, setValue] = useState(0);

    return (
        <ul className="rating">
            <li>
                <Star setValue={() => {setValue(1)}} selected={value > 0} />
            </li>
            <li>
                <Star setValue={() => {setValue(2)}} selected={value > 1} />
            </li>
            <li>
                <Star setValue={() => {setValue(3)}} selected={value > 2} />
            </li>
            <li>
                <Star setValue={() => {setValue(4)}} selected={value > 3} />
            </li>
            <li>
                <Star setValue={() => {setValue(5)}} selected={value > 4} />
            </li>
        </ul>
    )
}

type StarPropsType = {
    selected: boolean
    setValue: () => void
}

let Star = (props: StarPropsType) => {
    return (
        <span onClick={() => {props.setValue()}}>
            {
                props.selected ? <b>STAR | </b> : 'STAR | '
            }
        </span>

    )
}