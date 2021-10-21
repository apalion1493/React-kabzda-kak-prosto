import React from "react";
import './Rating.css';

export function Rating(props: any) {
    return (
        <ul className="rating">
            <li>
                <Star selected={props.value > 0}/>
            </li>
            <li>
                <Star selected={props.value > 1}/>
            </li>
            <li>
                <Star selected={props.value > 2}/>
            </li>
            <li>
                <Star selected={props.value > 3}/>
            </li>
            <li>
                <Star selected={props.value > 4}/>
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