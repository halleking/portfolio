import React from "react";

function StringList(props) {
    const {strings} = props;
  
    return (
      <ul>
        {strings?.map((str, index) => (
          <li key={index}>{str}</li>
        ))}
      </ul>
    )
  }
  export default StringList;