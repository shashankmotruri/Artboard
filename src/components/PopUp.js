import React from 'react'
import { Dialog, DialogTitle } from '@material-ui/core';
import "./Popup.css";

function PopUp(props) {

    const {title,children,openPopup,setOpenPopup} = props;

    return (
            <Dialog  open={openPopup} fullWidth={true} maxWidth="sm" disableBackdropClick={true} disableEscapeKeyDown={true} TransitionComponent="Grow">
                <DialogTitle >
                    {title}
                </DialogTitle>
                {children}
            </Dialog>
    )
}

export default PopUp;