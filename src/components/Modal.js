import "./Modal.css"
const Modal = ({ setShowModal, children, }) => {
    return (
        <div className="my-modal" onClick={setShowModal}>
            <div className="my-modal-content">
                <center>{children}</center>
            </div>
        </div>
    )
}

export default Modal;