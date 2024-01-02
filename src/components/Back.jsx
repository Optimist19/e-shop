// import React from 'react'

import { useNavigate } from "react-router-dom";


function Back() {

	const navigate = useNavigate();
	

  return (
    <div className="back">
      <span onClick={() => navigate(-1)}>&lt; Back</span>
    </div>
  );
}

export default Back;
