import React from "react";

import { useParams } from "react-router-dom";

function DetailContact() {
  const params = useParams();
  console.log(params);

  return <div>DetailContac : {params.id}</div>;
}

export default DetailContact;
