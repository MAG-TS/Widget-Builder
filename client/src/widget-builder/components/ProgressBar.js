import React, { useState } from 'react'
import { Progress } from 'rsuite'

export default function ProgressBar(props) {

    const [percent, setPercent] = useState('50');

    return (
        <div>
            {  
            props.apiKey === null ?
            <div>
                
                <input type="text" value={props.content} id={props.identifier} onBlur={props.removeFocus} onChange={props.handleElementText} onClick={props.selectElement} className="width-100 hide-input-box text-center" placeholder="Enter value from 1 to 100" />
                <Progress.Line percent={props.content} className="width-100 hide-input-box"/>
            </div>
            :
            <Progress.Line strokeColor="primary" percent={props.apiKey} id={props.identifier} onBlur={props.removeFocus} onChange={props.handleElementText} onClick={props.selectElement} className="width-100 hide-input-box"/>
            }  
        </div>
    )
}
