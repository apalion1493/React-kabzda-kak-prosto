import React, {useState} from "react";
import './Rating.css';

export function Rating() {
    let [value, setValue] = useState(0)

    return (
        <ul className="rating">
            <li>
                <Star selected={value > 0}/>
                <button onClick={() => {setValue(1)}}>1</button>
            </li>
            <li>
                <Star selected={value > 1}/>
                <button onClick={() => {setValue(2)}}>2</button>
            </li>
            <li>
                <Star selected={value > 2}/>
                <button onClick={() => {setValue(3)}}>3</button>
            </li>
            <li>
                <Star selected={value > 3}/>
                <button onClick={() => {setValue(4)}}>4</button>
            </li>
            <li>
                <Star selected={value > 4}/>
                <button onClick={() => {setValue(5)}}>5</button>
            </li>
        </ul>
    )
}

type StarPropsType = {
    selected: boolean
}

function Star(props: StarPropsType) {
    if (props.selected) {
        return (
           <span><b>STAR-</b> </span>
        )
    } else {
        return (
            <span>STAR-</span>
        )
    }

}