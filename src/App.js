import React from "react";
import { Route } from "react-router-dom";
import AddContact from "./components/AddContact";
import EditContact from "./components/EditContact";
import Home from "./components/Home";
import Header from "./components/Header";
import ContactList from "./components/ContactList";
import "./styles.css";

const App = () => {
  return (
    <div className="App">
      <Header />
      <Route exact path="/" component={() => <Home />} />
      <Route exact path="/list" component={() => <ContactList />} />
      <Route exact path="/add" component={() => <AddContact />} />
      <Route exact path="/edit/:id" component={() => <EditContact />} />
    </div>
  );
};
export default App;
