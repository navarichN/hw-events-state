import React from 'react';

function ProjectList(props) {
    return (
        <div className="project-list">
            {props.projects.map((card) => {
                return <img src = {card.img}/>
        })}
        </div>
    )
}

export default ProjectList

