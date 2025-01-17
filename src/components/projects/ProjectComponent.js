import React from 'react';
import "./ProjectComponent.css";
import { FaLongArrowAltRight } from "react-icons/fa";

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
          <div className='link'>
            {props.linkToDemo && (<a href={props.linkToDemo} target="blank"><FaLongArrowAltRight/> Play</a>)}
          </div>
          <div className='link'>
            {props.linkToRepo && (<a href={props.linkToRepo} target="blank"><FaLongArrowAltRight/> GitHub</a>)}
          </div>
        </div>
    </div>
  );
}

export default ProjectComponent;