import React from 'react'

export default function HeadingMedium(props) {
    return (
        <div>
            <input type='text' value={props.content} id={props.identifier} onBlur={props.removeFocus} onChange={props.handleElementText} placeholder="Medium heading" className="width-100 hide-input-box heading-medium"/>
        </div>
    )
}
