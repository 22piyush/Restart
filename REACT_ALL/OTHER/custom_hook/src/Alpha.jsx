import React, { memo, useEffect } from "react";

function Alpha({ count }) {
  useEffect(() => {
    console.log("rendering......");
  });

  return <div>Alpha <h1>{count}</h1></div>;
}

const EnhanceAlpha = memo(Alpha);

export default EnhanceAlpha;
