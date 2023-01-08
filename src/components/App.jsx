import Container from './Container/StyledContainer';
import ContactForm from './ContactForm/ContactForm';
import ContactList from './ContactList/ContactList';
import Filter from './Filter/Filter';
// import { addContact } from 'redux/contact_slice';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import { fetchContacts, addContact } from 'redux/operations';
// import

// https://youtu.be/eKCD9djJQKc?t=1508
// https://learn.javascript.ru/fetch
// https://developer.mozilla.org/ru/docs/Web/API/Fetch_API/Using_Fetch

const App = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  const contacts = useSelector(state => state.contacts.contacts);

  const contactSubmit = data => {
    dispatch(
      addContact({
        name: data.name,
        number: data.number,
      })
    );
  };

  return (
    <Container>
      <h1>Phonebook</h1>
      <ContactForm onSubmit={contactSubmit} contacts={contacts} />
      <h2>Contacts</h2>
      <Filter />
      <ContactList />
    </Container>
  );
};

export default App;
