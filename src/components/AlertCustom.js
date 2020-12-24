import React from "react";
import { Modal, Button } from "react-bootstrap";

const AlertCustom = (props) => {
  return (
    <>
      <Modal {...props}>
        <Modal.Header closeButton>
          <Modal.Body>{props.body}</Modal.Body>
        </Modal.Header>
        <Modal.Footer>
          <Button variant="secondary" onClick={props.onHide}>
            Aceptar
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
};

export default AlertCustom;
