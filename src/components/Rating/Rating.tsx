import React from "react";
import './Rating.css';

export function Rating(props: RatingPropsType) {

    return (
        <ul className="rating">
            <li>
                <Star onClick={props.onClick} selected={props.value > 0} value={1}/>
            </li>
            <li>
                <Star onClick={props.onClick} selected={props.value > 1} value={2}/>
            </li>
            <li>
                <Star onClick={props.onClick} selected={props.value > 2} value={3}/>
            </li>
            <li>
                <Star onClick={props.onClick} selected={props.value > 3} value={4}/>
            </li>
            <li>
                <Star onClick={props.onClick} selected={props.value > 4} value={5}/>
            </li>
        </ul>
    )
}

export type RatingValueType = 0 | 1 | 2 | 3 | 4 | 5;

export type RatingPropsType = {
    value: RatingValueType
    onClick: (value: RatingValueType) => void
}

type StarPropsType = {
    selected: boolean
    onClick: (value: RatingValueType) => void
    value: RatingValueType
}

let Star = (props: StarPropsType) => {
    return (
        <span onClick={() => {props.onClick(props.value)}}>
            {
                props.selected ? <b>STAR | </b> : 'STAR | '
            }
        </span>

    )
}