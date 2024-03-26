import React, { useState, useReducer } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';

const StudentManagementSystem = () => {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  // Reducer function
  const reducer = (state, action) => {
    switch (action.type) {
      case 'INCREMENT':
        return state + 1;
      case 'DECREMENT':
        return state - 1;
      default:
        return state;
    }
  };

  const [count, dispatch] = useReducer(reducer, 0);

  const increment = () => {
    dispatch({ type: 'INCREMENT' });
  };

  const decrement = () => {
    dispatch({ type: 'DECREMENT' });
  };

  // Placeholder data
  const students = [
    { id: 1, firstName: 'John', lastName: 'Doe', group: 'N38' },
    { id: 2, firstName: 'Jane', lastName: 'Smith', group: 'N45' },
  ];

  return (
    <div className="container">
      <div className="input-group my-3">
        <input type="text" className="form-control search-student" placeholder="Search" aria-label="Search" />
        <span className="input-group-text">
          <select className="form-select groups-filter">
            <option value="all">All</option>
            <option>N38</option>
            <option>N45</option>
            <option>N1</option>
            <option>N24</option>
          </select>
        </span>

        <Button variant="primary" onClick={handleShow}>
          Add student
        </Button>

        <Modal show={show} onHide={handleClose} backdrop="static" keyboard={false}>
          <Modal.Header closeButton>
            <Modal.Title>Adding student</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <form className="student-form needs-validation" noValidate>
              <div className="modal-body">
                <div className="mb-3">
                  <label htmlFor="firstName" className="form-label">
                    Firstname
                  </label>
                  <input type="text" className="form-control" id="firstName" name="firstName" required />
                  <div className="invalid-feedback">Please enter the firstname.</div>
                </div>
                <div className="mb-3">
                  <label htmlFor="lastName" className="form-label">
                    Lastname
                  </label>
                  <input type="text" className="form-control" id="lastName" name="lastName" required />
                  <div className="invalid-feedback">Please enter the lastname.</div>
                </div>
                <div className="mb-3">
                  <label htmlFor="group" className="form-label">
                    Group
                  </label>
                  <select className="form-select" id="group" name="group" required>
                    <option value="">Select a group</option>
                    <option>N38</option>
                    <option>N45</option>
                    <option>N1</option>
                    <option>N24</option>
                  </select>
                  <div className="invalid-feedback">Please select a group.</div>
                </div>
              </div>
              <div className="modal-footer">
                <Button variant="secondary" onClick={handleClose}>
                  Close
                </Button>
                <Button variant="primary" type="submit" onClick={decrement}>
                  Save
                </Button>
              </div>
            </form>
          </Modal.Body>
        </Modal>
      </div>

      <table className="table table-striped">
        <thead>
          <tr>
            <th>First Name</th>
            <th>Last Name</th>
            <th>Group</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {students.map((student) => (
            <tr key={student.id}>
              <td>{student.firstName}</td>
              <td>{student.lastName}</td>
              <td>{student.group}</td>
              <td>
                <Button variant="primary" size="sm">
                  Edit
                </Button>{' '}
                <Button variant="danger" size="sm">
                  Delete
                </Button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default StudentManagementSystem;