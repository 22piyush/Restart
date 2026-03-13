import React, { memo, useEffect } from "react";

function Alpha({ data }) {
  useEffect(() => {
    console.log("rendering......");
  });

  return <div>Alpha <h1>{data}</h1></div>;
}

const EnhanceAlpha = memo(Alpha, (prevProp, nextProp ) => {
    return true
});

export default EnhanceAlpha;
