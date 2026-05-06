import React from "react";

// HOC 
import withCardLook from "./HOC/withCardLook";
import Alpha from "./HOC/Alpha";

// import Practice from "./useCustom/Practice";
// import Api from "./useCustom/Api";
// import Practice from "./useMemo/Practice"
// import Practice from "./useMemo/ProperMemo"
// import Practice from "./useCallback/ProperCallback"

// HOC
const WithCardLookComponent = withCardLook(Alpha);

function App() {
  return (
    <div>
      {/* HOC  */}
      <WithCardLookComponent />
    </div>
  );
}

export default App;
