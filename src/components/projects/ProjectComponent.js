import React from 'react';
import "./ProjectComponent.css";

function ProjectComponent(props) {
  return (
    <div className='container'>
        { props.img ? (<img src={props.img} alt="img" />) : null}
        <h4>{props.title}</h4>
        <p><br/><br/>{props.text}</p>

    </div>
  );
}

export default ProjectComponent;