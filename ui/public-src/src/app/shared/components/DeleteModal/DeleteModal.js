import React, { Component } from "react";
import { inject, observer } from "mobx-react";
import glamorous from "glamorous";
import { css } from "glamor";

import Dialog, {
    DialogActions,
    DialogContent,
    DialogTitle
} from "material-ui/Dialog";
import RaisedButton from 'material-ui/RaisedButton';

class DeleteModal extends Component {
    constructor(props) {
        super(props);
    }

    render() {

        let {
            title,
            open,
            onClose,
            onDelete,
            children,
            ...dialogProps
        } = this.props;

        return (
            <Dialog
                ignoreBackdropClick
                open={open}
                onRequestClose={onClose}
                {...dialogProps}
            >
                <DialogTitle>{title}</DialogTitle>
                <DialogContent>{children}</DialogContent>
                <DialogActions>
                    <RaisedButton onClick={onClose}>Cancel</RaisedButton>
                    <RaisedButton secondary={true} onClick={onDelete} color="accent">
                        Delete
                    </RaisedButton>
                </DialogActions>
            </Dialog>
        );
    }
}

export default DeleteModal;
