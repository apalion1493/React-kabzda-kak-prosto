import s from './OnOff.module.css';
import {useState} from "react";

// type PropsType = {
//     on: boolean
// }

export const OnOff = () => {

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

    return (
        <div className={s.switch}>
            <button style={onStyle} onClick={() => { setOn(true) }}>
                <span>On</span>
            </button>
            <button style={offStyle} onClick={() => { setOn(false) }}>
                <span>Off</span>
            </button>

            <div style={indicatorStyle} className={`${s.indicator}`}/>
        </div>
    )
}