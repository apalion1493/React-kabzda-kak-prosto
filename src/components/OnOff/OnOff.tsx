import s from './OnOff.module.css';

export const OnOff = () => {
    return (
        <div className={s.switch}>
            <button>
                <span>On</span>
            </button>
            <button>
                <span>Off</span>
            </button>

            <div className={`${s.indicator}`}/>
        </div>
    )
}