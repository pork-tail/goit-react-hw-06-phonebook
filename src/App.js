import { Component } from "react";
import { v4 as uuid } from "uuid";
import ContactForm from "./components/contactForm/ContactForm";
import ContactList from "./components/contactList/ContactList";
import Filter from "./components/filter/Filter";

import { connect } from "react-redux";
import { deletedItem, addToList, filterChange } from "./redux/contacts/actions";

class App extends Component {
  state = {
    items: [],
    filter: "",
  };

  handleSubmit = (term) => {
    const isDuplicate = this.state.items.some(
      (item) => item.name === term.name
    );
    if (isDuplicate) {
      alert("Такой контакт уже существует " + term.name);
      return;
    }

    const newContact = {
      id: uuid(),
      name: term.name,
      number: term.number,
    };
    this.props.addToList(newContact);
  };

  render() {
    const { items, filter } = this.props;

    return (
      <div>
        <h1>Phonebook</h1>
        <ContactForm handleSubmit={this.handleSubmit} />
        {items.length ? (
          <>
            <h2>Contacts</h2>
            <Filter filter={filter} handleChange={this.props.handleChange} />
            <ContactList items={items} handleDelete={this.props.handleDelete} />
          </>
        ) : (
          ""
        )}
      </div>
    );
  }
}

const mapState = (state) => {
  const items = state.contacts.items;
  const filter = state.contacts.filter;
  console.log(filter);
  const formattedFilter = filter.toLowerCase().trim();
  const filteredContacts = items.filter((item) =>
    item.name.toLowerCase().includes(formattedFilter)
  );
  return {
    items: filteredContacts,
    filter: state.filter,
  };
};

const mapDispatch = {
  addToList,
  handleDelete: deletedItem,
  handleChange: filterChange,
};

export default connect(mapState, mapDispatch)(App);
