import Column from "./columns/Column";
import { useState } from "react";
import { Modal, Button } from "react-bootstrap";

const TableMemo = (props) => {
  const [show, setShow] = useState(false);

  const handleClickCloseModal = () => setShow(false);
  const handleClickShowModal = () => setShow(true);
  return (
    <section>
      <h2>{props.term}</h2>
      <section className="row">
        {props.columns.map((column, index_column) =>
          <Column
            key={column.id}
            column={column}
            index_column={index_column}
            onClickShowModal={handleClickShowModal} />)}
      </section>
      {/* Modal pour créer une carte */}
      <Modal show={show} onHide={handleClickCloseModal}>
        <Modal.Header closeButton>
          <Modal.Title>Ajout d'une carte</Modal.Title>
        </Modal.Header>
        <Modal.Body>


        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClickCloseModal}>
            Close
          </Button>
          <Button variant="primary" onClick={handleClickCloseModal}>
            Save Changes
          </Button>
        </Modal.Footer>
      </Modal>
    </section>
  );
}

export default TableMemo;