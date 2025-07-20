import React, { useState } from 'react';
import { Button, Modal, Form } from 'react-bootstrap';

export default function TodoItem({ todo, onUpdate, onDelete }) {
  const [showModal, setShowModal] = useState(false);
  const [editedDesc, setEditedDesc] = useState(todo.description);

  const handleSave = () => {
    onUpdate(todo.id, editedDesc);
    setShowModal(false);
  };

  return (
    <>
      <div className="row align-items-center mb-2">
        <div className="col-6">
          <input
            type="text"
            className="form-control"
            value={todo.description}
            disabled
          />
        </div>
        <div className="col-3 edit text-center">
          <Button variant="primary" onClick={() => setShowModal(true)}>
            Edit
          </Button>
        </div>
        <div className="col-3 delete text-center">
          <Button variant="danger" onClick={() => onDelete(todo.id)}>
            Delete
          </Button>
        </div>
      </div>

    
      <Modal show={showModal} onHide={() => setShowModal(false)} centered>
        <Modal.Header closeButton>
          <Modal.Title>Edit Todo</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form.Control
          style={{margin:'auto'}}
            type="text"
            placeholder='Enter description'
            value={editedDesc}
            onChange={(e) => setEditedDesc(e.target.value)}
            autoFocus
          />
        </Modal.Body>
        <Modal.Footer style={{justifyContent:'center'}}>
          <Button variant="secondary" onClick={() => setShowModal(false)}>
            Close
          </Button>
          <Button variant="success" onClick={handleSave}>
            Save
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}
