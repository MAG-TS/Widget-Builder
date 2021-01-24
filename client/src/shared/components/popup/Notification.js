import React from 'react'

export default function Notification() {
    const [close, setClose] = useState(false);

    const closePopup = () => {
        setClose(true);
        if(props.clearPopupState){
            props.clearPopupState();
        }
    }

    let popUp = close === true ? null : (
        <div id="modal" className="modal-container">
            <div className="modal-wrap modal-wrap-mobile">
                <div className="popup-container">{props.children}</div>
            </div>
        </div>
    );

    // When the user clicks anywhere outside of the modal, close it
    window.onclick = (event) => {
        if (event.target.id == "modal") {
            closePopup();
        }
    }
    
    return(
        <React.Fragment>
            {popUp}
        </React.Fragment>
    )
}
}
