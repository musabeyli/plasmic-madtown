import * as React from "react";
import * as ReactDOM from "react-dom";
import "index.scss";

interface Props {
  closeModal?: Function;
  image: string;
}
const ModalPreview: React.FC<Props> = ({ closeModal, image }) => {
  React.useEffect(() => {
    console.log("react component mount modal");
  }, []);

  return ReactDOM.createPortal(
    <div className="pdp-modal-preview">
      <button
        className="pdp-modal-preview__close"
        onClick={() => closeModal && closeModal()}
      >
        Cerrar
      </button>
      <div className="pdp-modal-preview__content">
        <img src={image} style={{ width: 400 }} alt="" />
      </div>
    </div>,
    document.body
  );
};

export default ModalPreview;
