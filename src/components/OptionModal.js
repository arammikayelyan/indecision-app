import React from "react";
import Modal from "react-modal";

Modal.setAppElement("#root");

const OptionModal = props => (
  <Modal
    isOpen={!!props.selectedOption}
    contentLabel="Selected Option"
    onRequestClose={props.handleSelectOption}
    closeTimeoutMS={200}
    className="modal"
  >
    <h3 className="modal__title">Selected Option</h3>
    {props.selectedOption && (
      <p className="modal__body">{props.selectedOption}</p>
    )}
    <button className="button" onClick={props.handleSelectOption}>
      Okay
    </button>
  </Modal>
);

export default OptionModal;
