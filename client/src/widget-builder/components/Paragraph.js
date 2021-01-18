import React from 'react'

export default function Paragraph(props) {
    return (
        <div>
            <textarea placeholder="Paragraph" value={props.content} id={props.identifier} onBlur={props.removeFocus} onChange={props.handleElementText} className="width-100 hide-input-box">
                
            </textarea>
        </div>
    )
}
