import React from 'react'

export default function HeadingLarge(props) {
    return (
        <div>
            {  
            props.apiKey === null ?
            <input type='text' value={props.content} id={props.identifier} onBlur={props.removeFocus} onChange={props.handleElementText} onClick={props.selectElement} placeholder="Large heading" className="width-100 hide-input-box heading-large"/>
            :
            <input type='text' value={props.content} id={props.identifier} onBlur={props.removeFocus} onChange={props.handleElementText} onClick={props.selectElement} placeholder={props.apiKey} className="width-100 hide-input-box heading-large"/>
            }  
        </div>
    )
}
