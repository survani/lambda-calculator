import React, {useState} from "react";
import OperatorButton from './OperatorButton';
import {operators} from '../../../data';
//import any components needed

//Import your array data to from the provided data file

const Operators = (props) => {
  // STEP 2 - add the imported data to state
  const [calculateOperators, setCalculateOperators] = useState(operators);

  return (
    <div>
      {/* STEP 3 - Use .map() to iterate over your array data and return a button
       component matching the name on the provided file. Pass
       it any props needed by the child component*/}

    {calculateOperators.map (( operator, index ) => <OperatorButton operator = { operator } key = { index } addData={props.addData}/>)}
    </div>
  );
};

export default Operators;
