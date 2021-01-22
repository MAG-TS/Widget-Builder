import React from 'react'

export default function Link(props) {
    return (
        <div>
            {
            props.apiKey === null ?
            <input type="text" value={props.content} id={props.identifier} onBlur={props.removeFocus} onChange={props.handleElementText} onClick={props.selectElement} placeholder="Link"  className="width-100 hide-input-box" />
            :
            <input type="text" value={props.content} id={props.identifier} onBlur={props.removeFocus} onChange={props.handleElementText} onClick={props.selectElement} placeholder={props.apiKey}  className="width-100 hide-input-box" />
            }
        </div>
    )
}
