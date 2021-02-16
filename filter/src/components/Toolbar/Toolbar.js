import React from 'react';

function Toolbar(props) {
    return (
        <div className="toolbar">
            {props.filters.map((filter, i) => {
                return <button 
                            className = "checked-tag"
                            onClick = {() => {
                                props.onSelectFilter(filter)}}
                            key = {i}
                        >
                            {filter}
                        </button>
            })}
        </div>
    )
}

export default Toolbar

