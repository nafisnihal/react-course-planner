import React from 'react';
import './QandA.css'

const QandA = () => {
    return (
      <div className="qna">
        <div>
          <h2 className="question">How React works?</h2>
          <p className="ans">
            {" "}
            React uses a declarative paradigm that makes it easier to reason
            about your application and aims to be both efficient and flexible.
            It designs simple views for each state in your application, and
            React will efficiently update and render just the right component
            when your data changes.
          </p>
        </div>
        <div>
          <h2 className="question">Difference between props and state?</h2>
          <p className="ans">
            Props are used to pass data from one component to another. The state
            is a local data storage that is local to the component only and
            cannot be passed to other components. The this.setState property is
            used to update the state values in the component
          </p>
        </div>
        <div>
          <h2 className="question">Where do we use USeEffect?</h2>
          <p className="ans">
            UseEffect can be used in many cases like updating the DOM, and
            timers,runs on every render, fetching data.
          </p>
        </div>
      </div>
    );
};

export default QandA;