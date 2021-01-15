import React from 'react'

export default function Link(props) {
    return (
        <div>
            <input type="text" value={props.content} id={props.identifier} onBlur={props.removeFocus} onChange={props.handleElementText} placeholder="Link"  className="width-100 hide-input-box" />
        </div>
    )
}
