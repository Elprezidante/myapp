import { useState } from "react";

const Fifthcomponent = () => {
   // The useState() hook enables to create dynamic websites whereby it usually has the start/initial state followed by a state that get show when some effects happen on our website.
    const [ number, setNumber ] = useState
    (10);
    return (
        <div className="Fifthcomponent">
            {/* Below we bind our value of number  */}
            <h1>WOOW!The fifth component already niice</h1>
            <h2>Current number is;{number}</h2>
                   {/* Call the setnumber function to update the number after a click effect */}
                   <button onClick ={() => setNumber(20)}>Click me to update the number</button>

             </div>
    )
}

export default Fifthcomponent;