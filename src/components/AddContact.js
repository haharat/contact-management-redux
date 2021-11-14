import React, { useState } from "react";
import { connect } from "react-redux";
import { useHistory } from "react-router";

const AddContact = ({ addContactInfo }) => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [website, setWebsite] = useState("");
  const [company, setCompany] = useState("");

  const history = useHistory();

  const handleSubmit = (e) => {
    e.preventDefault();
    
    const newContact = {
      id: Date.now(),
      email,
      name,
      phone,
      website,
      company
    };

    addContactInfo(newContact);
    history.push("/list");
  };

  return (
    <div className="container-fluid">
      <h3 className="text-center text-dark py-3 display-5">Add Contact</h3>
      <div className="row">
        <div className="col-md-6 p-5 mx-auto shadow">
        <button
          className="btn btn-secondary ml-auto my-3"
          onClick={() => history.push("/list")}
        >
          Go back
        </button>
          <form onSubmit={handleSubmit}>
            <div className="form-group m-2">
              <h6>Full name</h6>
              <input
                className="form-control"
                type="text"
                placeholder="Full name"
                value={name}
                onChange={(e) => setName(e.target.value)}
              />
            </div>
            <div className="form-group m-2">
              <h6>Email</h6>
              <input
                className="form-control"
                type="email"
                placeholder="Email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>
            <div className="form-group m-2">
              <h6>Phone Number</h6>
              <input
                className="form-control"
                type="number"
                placeholder="Phone"
                value={phone}
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
            <div className="form-group">
              <input
                className="btn btn-block btn-primary"
                type="submit"
                value="Submit"
              />
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

const mapStateToProps = (state) => ({
  contacts: state,
});
const mapDispatchToProps = (dispatch) => ({
  addContactInfo: (data) => {
    dispatch({ type: "ADD_CONTACT", payload: data });
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(AddContact);