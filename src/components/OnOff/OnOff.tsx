import s from './OnOff.module.css';
import {useState} from "react";

type PropsType = {
    onChange: (value: boolean) => void
}

export const OnOff = (props: PropsType) => {

    let [on, setOn] = useState(false);

    const onStyle = {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        width: '300px',
        height: '100px',
        backgroundColor: on ? 'green' : 'white',
    }

    const offStyle = {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        width: '300px',
        height: '100px',
        backgroundColor: on ? 'white' : 'red',
    }

    const indicatorStyle = {
        backgroundColor: on ? 'green' : 'red',
    }

    const onClicked = () => {
        setOn(true);
        props.onChange(true)
    }

    const OffClicked = () => {
        setOn(false);
        props.onChange(false)
    }

    return (
        <div className={s.switch}>
            <button style={onStyle} onClick={onClicked}>
                <span>On</span>
            </button>
            <button style={offStyle} onClick={OffClicked}>
                <span>Off</span>
            </button>

            <div style={indicatorStyle} className={`${s.indicator}`}/>
        </div>
    )
}