import React from 'react';

function ProjectList(props) {
    return (
        <div className="project-list">
            {props.projects.map((card, i) => {
                return <img src = {card.img} key = {i}/>
        })}
        </div>
    )
}

export default ProjectList

