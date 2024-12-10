import React from 'react';
import "./ProjectComponent.css";


function ProjectComponent(props) {
  return (
    <div className='container'>
        { props.img ? (<img src={props.img} alt="img" />) : null}
        <div className='text'>
          <p className='title'>{props.title}</p>
          <div className='tag-container'>
            {props.tags?.map((item, index) => (
              <p className='tag' key={index}>{item}</p>
            ))}
          </div>
          <p className='description'>{props.text}</p>
        </div>
    </div>
  );
}

export default ProjectComponent;