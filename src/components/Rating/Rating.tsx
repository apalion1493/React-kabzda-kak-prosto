import React from "react";
import './Rating.css';

export function Rating(props: any) {
    return (
        <ul className="rating">
            <li>
                <Star selected={true}/>
            </li>
            <li>
                <Star selected={true}/>
            </li>
            <li>
                <Star selected={true}/>
            </li>
            <li>
                <Star selected={false}/>
            </li>
            <li>
                <Star selected={false}/>
            </li>
        </ul>
    )
}

function Star(props: any) {
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