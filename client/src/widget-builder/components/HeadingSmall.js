import React from 'react'

export default function HeadingSmall(props) {
    return (
        <div>
            {
            props.apiKey === null ?
            <input type='text' value={props.content} id={props.identifier} onBlur={props.removeFocus} onChange={props.handleElementText} onClick={props.selectElement} placeholder="Small heading" className="width-100 hide-input-box heading-small"/>
            :
            <input type='text' value={props.content} id={props.identifier} onBlur={props.removeFocus} onChange={props.handleElementText} onClick={props.selectElement} placeholder={props.apiKey} className="width-100 hide-input-box heading-small"/>
            }
        </div>
    )
}
