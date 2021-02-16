

export default function IconSwitch(props) {
    return (
        <>
            {props.icon ? 
                <div className="material-icons icon-switch" onClick = {props.onSwitch}>
                    view_list
                </div> :
                <div className="material-icons icon-switch" onClick = {props.onSwitch}>
                    view_module
                </div>                     
            }
        </>
    )
}