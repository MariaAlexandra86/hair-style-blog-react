import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {faCaretSquareLeft, faCaretSquareRight} from "@fortawesome/free-regular-svg-icons"
import "./modal.css";

const Modal = ({ showModal, onClose, onClickNavBtnLeft, onClickNavBtnRight, navigationTotal, navigationCurrent, children }) => {
  return (
    showModal && (
      <div className="custom-modal-container-fixed">
        <div className="custom-modal-content">
          <button className="custom-modal-close-button" onClick={onClose}>
            &#x2715;
          </button>
          <div className="custom-modal-body">{children}</div>
          <div className="custom-modal-controls">
            <button onClick={onClickNavBtnLeft}>
              <FontAwesomeIcon icon={faCaretSquareLeft} size="2x" color="white"/>
            </button>
            <p>{`${navigationTotal}/${navigationCurrent}`}</p>
            <button onClick={onClickNavBtnRight}>
                <FontAwesomeIcon icon={faCaretSquareRight} size="2x" color="white"/>
            </button>
          </div>
        </div>
      </div>
    )
  );
};

export default Modal;
