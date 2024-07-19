import { useState } from "react"
import data from "./data"
import "./styles.css"

export default function Accordian_single(){

    const [selected, setSelected] = useState(null);

    function handleSingleSelection(getCurrentId){
        console.log(getCurrentId)
        setSelected(getCurrentId === selected ? null : getCurrentId) ;
    }
    return (
    <div className="accordiansingle_wrapper">
        <div className="accordiansingle">
            {data && data.length > 0 ?  
                (data.map((dataItem) =>( 
                <div className="accordiansingle_item"> 
                    <div  onClick={() => handleSingleSelection(dataItem.id)} className="accordiansingle_title">
                        <h4 className="accordiansingle_h4">{dataItem.question}</h4>
                    </div>
                    {
                        selected === dataItem.id ? 
                        <div className="accordiansingle_content"> { dataItem.answer}</div> : null
                    }
                </div>
                )))
                :
                 (<div>No ddata</div>)
            }
        </div>
    </div>
    )


    return <div>Accordian_single</div>
}