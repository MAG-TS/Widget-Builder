import React from 'react'

export default function HeadingLarge(props) {
    return (
        <div>
            <input type='text' value={props.content} id={props.identifier} onBlur={props.removeFocus} onChange={props.handleElementText} placeholder="Large heading" className="width-100 hide-input-box heading-large"/>
        </div>
    )
}
