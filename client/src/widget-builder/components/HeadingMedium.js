import React from 'react'

export default function HeadingMedium(props) {
    return (
        <div>
            {
            props.apiKey === null ?
            <input type='text' value={props.content} id={props.identifier} onBlur={props.removeFocus} onChange={props.handleElementText} onClick={props.selectElement} placeholder="Medium heading" className="width-100 hide-input-box heading-medium"/>
            :
            <input type='text' value={props.content} id={props.identifier} onBlur={props.removeFocus} onChange={props.handleElementText} onClick={props.selectElement} placeholder={props.apiKey} className="width-100 hide-input-box heading-medium"/>
            }
        </div>
    )
}
