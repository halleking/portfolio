import React, { useState } from 'react';

function ExpandableComponent(props) {
  const [expanded, setExpanded] = useState(false);

  return (
    <div>
      <button onClick={() => setExpanded(!expanded)}>
        {props.header}
      </button>
      {expanded && (
        <div>
          {/* Content to be shown when expanded */}
          <p>{props.content}</p>
        </div>
      )}
    </div>
  );
}

export default ExpandableComponent;