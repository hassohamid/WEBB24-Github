import { useState } from "react";

let Kalkylator = () => {

    let [sum, setSum] = useState(0);
    let [nrInput,setNrInput] = useState(0)
    let [nrInput2,setNrInput2] = useState(0)

    let nrValue1 = (e) => {
       let valueOfNr = Number(e.target.value)
       setNrInput(valueOfNr)
    }

    let nrValue2 = (e) => {
        let valueOfNr = Number(e.target.value)
        setNrInput2(valueOfNr)
     }

    let addition = () => {
        setSum(nrInput + nrInput2)
        
    }

    let subtraktion = () => {
        setSum(nrInput - nrInput2)
       
    }

    let division = () => {
        setSum(nrInput / nrInput2)
       
    }

    let multiplikation = () => {
        setSum(nrInput * nrInput2)
        
    }
    
    return (
        <div>
            <div className="kalk-container">
                <input className="kalk-inputs" type="number" onChange={nrValue1} placeholder="Input number"></input> <br/>
                <input className="kalk-inputs" type="number" onChange={nrValue2} placeholder="Input number"></input> <br/>
                <div className="kalk-btn-container">
                    <button onClick={addition}>+</button>
                    <button onClick={subtraktion}>-</button>
                    <button onClick={division}>/</button>
                    <button onClick={multiplikation}>*</button>
                </div>
                <p className="kalk-p"><strong>Your sum is:</strong> {sum}</p>
            </div>
        </div>
    )
}
export default Kalkylator;