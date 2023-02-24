import React, { Component } from 'react';
import ContactList from './ContactList/ContactList';
import ContactForm from './ContactForm/ContactForm';
import Filter from './Filter/Filter';
import './App.css';


class App extends Component {

  state = {
    contacts: [],
    filter: ''
  }

  deleteContact = (contactId) => {
    this.setState(prevState => ({
      contacts: prevState.contacts.filter(contact => contact.id !== contactId)
    }))
  }

  onChangeFilter = (event) => {
    this.setState({
      filter: event.target.value
    })
  }

  handleSubmitForm = (data) => {
    for (let a of this.state.contacts) {
      if (a.name.includes(data.name)) {
        alert(`${data.name} is already in contacts`)
        return;
      }
    }
      this.setState(prevState => ({
        contacts: [data, ...prevState.contacts],
      }))
  }

  render() {
    const { contacts, filter } = this.state
    const normalSize = this.state.filter.toLocaleLowerCase()
    const visibleContacts = contacts.filter(contact => 
      contact.name.toLocaleLowerCase().includes(normalSize)
    )
    return (
    <div className='main'>
      <h1 className='title'>Phonebook</h1>
      <ContactForm addContact={this.handleSubmitForm} />

      <h2 className='title'>Contacts</h2>
      <Filter value={filter} onChange={this.onChangeFilter} />
      <ContactList contacts={visibleContacts} onDelete={this.deleteContact} />
    </div>
  );
  }
};

export default App;