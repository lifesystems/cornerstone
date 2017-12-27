import * as React from "react";
import * as DOM from "react-dom";

class Hello extends React.Component<object, object> {
  render() {
    return (
      <div>
        <h1>Hey!</h1>
      </div>
    );
  }
}

DOM.render(<Hello />, document.getElementById("root"));
