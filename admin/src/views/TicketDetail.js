import React from 'react'

function TicketDetail({show ,setShow,flight,ticket}) {
  return (
    <>
        <Modal
          className="modal-mini modal-primary"
          show={showModal}
          onHide={() => setShowModal(false)}
        >
          <Modal.Header className="justify-content-center">
            <div className="modal-profile">
              <i className="nc-icon nc-bulb-63"></i>
            </div>
          </Modal.Header>
          <Modal.Body className="text-center">
            <p>Always have an access to your profile</p>
          </Modal.Body>
          <div className="modal-footer">
            <Button
              className="btn-simple"
              type="button"
              variant="link"
              onClick={() => setShowModal(false)}
            >
              Back
            </Button>
            <Button
              className="btn-simple"
              type="button"
              variant="link"
              onClick={() => setShowModal(false)}
            >
              Close
            </Button>
          </div>
        </Modal>
    </>
    )
}

export default TicketDetail