import s from './OnOff.module.css';

type OnOffType = {
    on: boolean
    setOn: (value: boolean) => void
}

export const ControlOnOff = (props: OnOffType) => {

    const onStyle = {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        width: '300px',
        height: '100px',
        backgroundColor: props.on ? 'green' : 'white',
    }

    const offStyle = {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        width: '300px',
        height: '100px',
        backgroundColor: props.on ? 'white' : 'red',
    }

    const indicatorStyle = {
        backgroundColor: props.on ? 'green' : 'red',
    }

    const onClicked = () => {
        props.setOn(true);
    }

    const OffClicked = () => {
        props.setOn(false);
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