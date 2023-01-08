import { nanoid } from 'nanoid';
import Container from './Container/StyledContainer';
import ContactForm from './ContactForm/ContactForm';
import ContactList from './ContactList/ContactList';
import Filter from './Filter/Filter';
import { addContact } from 'redux/contact_slice';
import { useDispatch, useSelector } from 'react-redux';

const App = () => {
  const dispatch = useDispatch();

  const contacts = useSelector(state => state.contacts.contacts);

  const contactSubmit = data => {
    dispatch(
      addContact({
        id: nanoid(),
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
