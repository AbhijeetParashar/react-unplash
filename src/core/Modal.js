import React from "react";
import ReactDOM from "react-dom";
import "../assets/styles/Modal.css";
import CancelIcon from '@material-ui/icons/Cancel';
import IconButton from '@material-ui/core/IconButton';

const Modal = ({ isShowing, hide, children }) =>
  isShowing
    ? ReactDOM.createPortal(
        <React.Fragment>
          <div
            className="modalWrapper"
            aria-modal
            aria-hidden
            tabIndex={-1}
            role="dialog"
          >
            <div onClick={hide} className="modalOverlay" />
            <div className="modal">
              <div className="modalHeader">
                <IconButton className="modalCloseButton" onClick={hide} color="primary" aria-label="menu">
                    <CancelIcon fontSize="large" />
                </IconButton>
              </div>
              {children}
            </div>
          </div>
        </React.Fragment>,
        document.body
      )
    : null;

export default Modal;
