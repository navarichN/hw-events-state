

export default function IconSwitch(props) {
    return (
        <>
            {props.icon ? 
                <button className="material-icons" onClick = {props.onSwitch}>
                    view_list
                </button> :
                <button className="material-icons" onClick = {props.onSwitch}>
                    view_module
                </button>                     
            }
        </>
    )
}