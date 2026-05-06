import React from "react";

// HOC 
import withCardLook from "./HOC/withCardLook";
import withBorder from "./HOC-2/withBorder";

import Alpha from "./HOC/Alpha";
import Beta from "./HOC/Beta";


// import Practice from "./useCustom/Practice";
// import Api from "./useCustom/Api";
// import Practice from "./useMemo/Practice"
// import Practice from "./useMemo/ProperMemo"
// import Practice from "./useCallback/ProperCallback"

// HOC
// const WithCardLookComponent = withCardLook(Alpha);
// const WithCardLookComponentBeta = withCardLook(Beta);

const Border = withBorder(Beta)

function App() {
  return (
    <div>
      {/* HOC  */}
      {/* <WithCardLookComponent />
      <WithCardLookComponentBeta /> */}
      <Border/>
    </div>
  );
}

export default App;
