import React from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import { FaTrashAlt } from 'react-icons/fa';
import { FaEdit } from 'react-icons/fa';
import { FaRegAddressBook } from 'react-icons/fa';

const ContactList = ({ contacts, deleteContact }) => {
  return (
    <div className="container">
      <div className="row d-flex flex-column">
        <div className="col-md-10 mx-auto my-4">
          <Link to="/add" className="btn btn-sm btn-primary my-2">
            <FaRegAddressBook />
            Add Contact
          </Link>
          <table className="table table-hover">
            <thead className="table-header bg-dark text-white">
              <tr>
                <th scope="col">Id</th>
                <th scope="col">Name</th>
                <th scope="col">Email</th>
                <th scope="col">Phone</th>
                <th scope="col">Website</th>
                <th scope="col">Company</th>
                <th scope="col"></th>
              </tr>
            </thead>
            <tbody>
              {contacts.length > 0 ? (
                contacts.map((contact, id) => (
                  <tr key={id}>
                    <td>{contact.id}</td>
                    <td>{contact.name}</td>
                    <td>{contact.email}</td>
                    <td>{contact.phone}</td>
                    <td>{contact.website}</td>
                    <td>{contact.company}</td>
                    <td>
                      <Link
                        to={`/edit/${contact.id}`}
                        className="btn btn-sm btn-success mr-1"
                      >
                        <FaEdit />
                      </Link>
                      <button
                        type="button"
                        onClick={() => deleteContact(contact.id)}
                        className="btn btn-sm btn-danger"
                      >
                        <FaTrashAlt />
                      </button>
                    </td>
                  </tr>
                ))
              ) : (
                <tr>
                  <th>No contacts found</th>
                </tr>
              )}
            </tbody>
          </table>

        </div>
      </div>
    </div>
  );
};

const mapStateToProps = (state) => ({
  contacts: state,
});

const mapDispatchToProps = (dispatch) => ({
  deleteContact: (id) => {
    dispatch({ type: "DELETE_CONTACT", payload: id });
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(ContactList);
