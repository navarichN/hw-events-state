import React from 'react';

function Toolbar(props) {
    return (
        <div className="toolbar">
            {props.filters.map((el, i) => {
                return <button 
                            className = "checked-tag"
                            onClick = {(e) => {
                                props.onSelectFilter(e.target.innerHTML)}}
                            key = {i}
                        >
                            {el}
                        </button>
            })}
        </div>
    )
}

export default Toolbar

