import React, {useState} from "react";
import SpecialButton from '../SpecialButtons/SpecialButton';
import { specials } from '../../../data';

//import any components needed

//Import your array data to from the provided data file

const Specials = (props) => {
  // STEP 2 - add the imported data to state
  //Completed the Step 2.
  const [calculateSpecial, setCalculateSpecial] = useState(specials);

  return (
    <div>
      {/* STEP 3 - Use .map() to iterate over your array data and return a button
       component matching the name on the provided file. Pass
       it any props needed by the child component*/}
       {calculateSpecial.map (( special, index ) => <SpecialButton special = { special } key = { index } addData={props.addData}/>)}
    </div>
  );
};

export default Specials;