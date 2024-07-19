import { useState } from "react"
import data from "./data"
import "./styles.css"

export default function Accordian_both() {

    const [selected, setSelected] = useState(null);
    const [enableMultiSelection, setEnableMultiSelection] = useState(false);
    const [multiple, setMultiple] = useState([]);

    function handleSingleSelection(getCurrentId) {
        console.log(getCurrentId)
        setSelected(getCurrentId === selected ? null : getCurrentId);
    }
    function handleMultiSelection(getCurrentId) {
        console.log(getCurrentId)
        let cpyMulti = [...multiple];
        const findIndexOfCurrentId = cpyMulti.indexOf(getCurrentId);
        console.log(findIndexOfCurrentId)
        if (findIndexOfCurrentId === -1) cpyMulti.push(getCurrentId);
        else cpyMulti.splice(findIndexOfCurrentId, 1);
        setMultiple(cpyMulti);
        console.log(selected, multiple);

    }
    return (
        <div className="wrapper">
            <button 
            onClick={() => setEnableMultiSelection(!enableMultiSelection)} 
            className = {enableMultiSelection ?  "multipleMode":
                "singleMode"} >
                {enableMultiSelection ?  "Change to Single Mode" :"Change to Multiple Mode"}
            </button>
            <div className="accordian">
                {data && data.length > 0 ?
                    (data.map((dataItem) => (
                        <div className="item">
                            <div onClick={
                                enableMultiSelection
                                    ? () => handleMultiSelection(dataItem.id)
                                    : () => handleSingleSelection(dataItem.id)
                            }
                                className="title">

                                <h4>{dataItem.question}</h4>
                                {/* <span>+</span> */}
                            </div>
                            {
                                enableMultiSelection
                                    ? multiple.indexOf(dataItem.id) !== -1 && (
                                        <div className="acc-content ">{dataItem.answer}</div>
                                      )
                                    : selected === dataItem.id && (
                                        <div className="acc-content ">{dataItem.answer}</div>
                                      )
                            }
                        </div>
                    )))
                    :
                    (<div>No ddata</div>)
                }
            </div>
        </div >
    )
    return <div>Accordian_both</div>
}