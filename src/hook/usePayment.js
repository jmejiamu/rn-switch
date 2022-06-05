import React, { useState, useEffect } from "react";
const usePayment = () => {
  const [doPayment, setDoPayment] = useState(false);

  return {
    doPayment,
    setDoPayment,
  };
};

export default usePayment;
