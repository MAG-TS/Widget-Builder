import React, { useState } from 'react'
import { Progress } from 'rsuite'

export default function ProgressCircle(props) {

    const [percent, setPercent] = useState('50');

    const handleInput = (e) => {
        props.handleElementText(e)
        setPercent(e.target.value)
    }

    return (
        <div>
            {  
            props.apiKey === null ?
            <div>
                <input type="text" value={props.content} id={props.identifier} onBlur={props.removeFocus} onChange={props.handleElementText} onClick={props.selectElement} className="width-100 hide-input-box text-center" placeholder="Enter value from 1 to 100" />
                <Progress.Circle percent={props.content}  className="circle-max hide-input-box"/>
            </div>
            :
            <div>
                <input type="text" id={props.identifier} onBlur={props.removeFocus} onChange={props.handleElementText} onClick={props.selectElement} className="width-100 hide-input-box text-center hidden" placeholder="Enter value from 1 to 100" />
                <Progress.Circle strokeColor="primary" percent={props.apiKey} id={props.identifier} onBlur={props.removeFocus} onChange={props.handleElementText} onClick={props.selectElement} className="circle-max hide-input-box"/>
            </div>
            }  
        </div>
    )
}
