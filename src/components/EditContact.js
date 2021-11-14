import React, { useEffect, useState } from "react";
import { connect } from "react-redux";
import { useHistory, useParams } from "react-router";

const EditContact = ({ contacts, updateContact }) => {
  const { id } = useParams();
  const history = useHistory();
  const selectedContact = contacts.find(
    (contact) => contact.id === id
  );

  useEffect(() => {
    setName(selectedContact.name);
    setEmail(selectedContact.email);
    setPhone(selectedContact.phone);
    setWebsite(selectedContact.website);
    setCompany(selectedContact.company);
  }, [selectedContact]);

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [website, setWebsite] = useState("");
  const [company, setCompany] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    const updatedContact = {
      id: selectedContact.id,
      email,
      name,
      phone,
    };
    updateContact(updatedContact);
    history.push("/list");
  };

  return (
    <div className="container">
      <h3 className="text-center text-dark py-3 display-5">Edit Contact</h3>
      <div className="row d-flex flex-column">
        
        <div className="col-md-6 mx-auto shadow p-5">
        <button
          className="btn btn-secondary ml-auto my-3"
          onClick={() => history.push("/list")}
        >
          Go back
        </button>
          {selectedContact ? (
            <form onSubmit={handleSubmit}>
              <div className="form-group m-2">
              <h6>Full Name</h6>
                <input
                  className="form-control"
                  value={name}
                  placeholder={"Name"}
                  onChange={(e) => setName(e.target.value)}
                />
              </div>
              <div className="form-group m-2">
              <h6>Email</h6>
                <input
                  className="form-control"
                  value={email}
                  placeholder={"Email"}
                  onChange={(e) => setEmail(e.target.value)}
                />
              </div>
              <div className="form-group m-2">
              <h6>Phone Number</h6>
                <input
                  className="form-control"
                  value={phone}
                  placeholder={"Phone"}
                  onChange={(e) => setPhone(e.target.value)}
                />
              </div>
              <div className="form-group m-2">
              <h6>Website</h6>
              <input
                className="form-control"
                type="text"
                placeholder="Website"
                value={website}
                onChange={(e) => setWebsite(e.target.value)}
              />
            </div>
            <div className="form-group m-2">
              <h6>Company</h6>
              <input
                className="form-control"
                type="text"
                placeholder="Company"
                value={company}
                onChange={(e) => setCompany(e.target.value)}
              />
            </div>
              <div className="form-group d-flex align-items-center my-2">
                <button type="submit" className="btn btn-primary">
                  Update Contact
                </button>               
              </div>
            </form>
          ) : (
            <h1 className="text-center">No Contact Found</h1>
          )}
        </div>
      </div>
    </div>
  );
};

const mapStateToProps = (state) => ({
  contacts: state,
});
const mapDispatchToProps = (dispatch) => ({
  updateContact: (data) => {
    dispatch({ type: "UPDATE_CONTACT", payload: data });
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(EditContact);