import React from 'react'

export default function Paragraph(props) {
    return (
        <div>
            {  
            props.apiKey === null ?
            <input placeholder="Paragraph" value={props.content} id={props.identifier} onBlur={props.removeFocus} onChange={props.handleElementText} onClick={props.selectElement} className="width-100 hide-input-box" />
            :
            <input placeholder={props.apiKey} value={props.content} id={props.identifier} onBlur={props.removeFocus} onChange={props.handleElementText} onClick={props.selectElement} className="width-100 hide-input-box" />
            }
        </div>
    )
}
