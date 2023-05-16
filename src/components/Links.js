import React, { Component } from 'react'

function Links(props){
  
    return (
      <div className="links">
        <h3>Links</h3>
        <a href={props.github}>{props.github}</a>
        <a href={props.linkedin}>{props.linkedin}</a>
      </div>
    );
  }
  export default Links