import React, { Component } from 'react';
import './ContactButton.css'

import { FaLinkedinIn } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { FaEnvelope } from "react-icons/fa";
import { FaFileAlt } from "react-icons/fa";


class ContactButton extends Component {

    handleClick = () => {
      return window.open(this.props.url);
    }

    renderIcon = () => {
      switch(this.props.icon) {
        case 'linkedin': return <FaLinkedinIn className='button-icon'/>;
        case 'github': return <FaGithub className='button-icon'/>;
        case 'email': return <FaEnvelope className='button-icon'/>;
        case 'resume': return <FaFileAlt className='button-icon'/>;
      }
    }
 
    render() {
        return(
            <div className='button'>
                <button 
                    type="button"
                    className={"button"}
                    onClick={() => this.handleClick()}>
                    {this.renderIcon()}
                </button>
            </div>
        )
    }
 }
 
 export default ContactButton;