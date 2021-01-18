import React from 'react'

export default function HeadingSmall(props) {
    return (
        <div>
            <input type='text' value={props.content} id={props.identifier} onBlur={props.removeFocus} onChange={props.handleElementText} placeholder="Small heading" className="width-100 hide-input-box heading-small"/>
        </div>
    )
}
