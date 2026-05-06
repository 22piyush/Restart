import React from "react";

// HOC 
import withCardLook from "./HOC/withCardLook";
import Alpha from "./HOC/Alpha";
import Beta from "./HOC/Beta";

// import Practice from "./useCustom/Practice";
// import Api from "./useCustom/Api";
// import Practice from "./useMemo/Practice"
// import Practice from "./useMemo/ProperMemo"
// import Practice from "./useCallback/ProperCallback"

// HOC
const WithCardLookComponent = withCardLook(Alpha);
const WithCardLookComponentBeta = withCardLook(Beta);

function App() {
  return (
    <div>
      {/* HOC  */}
      <WithCardLookComponent />
      <WithCardLookComponentBeta />
    </div>
  );
}

export default App;
