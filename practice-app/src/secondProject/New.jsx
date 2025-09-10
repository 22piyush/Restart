import Card from "./Card"
import Header from "./Header"
import { data, filterData } from "./Data"
import { useState } from "react";

function New() {

  const [category, setCategory] = useState("all"); // default: All

  // filter logic
  const filteredData =  category == "all"  ? data : data.filter((course) => course.id === category);

  return (
    <div>
      <Header filterData={filterData} category={category} setCategory={setCategory} />
      <div>
        <Card data={filteredData}/>
      </div>
    </div>
  )
}

export default New
