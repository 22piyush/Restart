import React from "react";

function withCardLook(WrappedComponent) {
  return () => {
    return (
      <>
        <h1>This is nested Component</h1>
        <div style={{ background: "gray" }}>
          <WrappedComponent />
        </div>
        ;
      </>
    );
  };
}

export default withCardLook;
