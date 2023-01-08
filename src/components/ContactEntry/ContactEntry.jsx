import ContactEntryStyled from './StyledContactEntry';
import { removeContact } from 'redux/contact_slice';
import { useDispatch } from 'react-redux';

const ContactEntry = ({ name, number, id }) => {
  
  const dispatch = useDispatch();

  const onDelete = () => {
    dispatch(removeContact(id));
  };

  return (
    <ContactEntryStyled>
      <span>{name}: </span>
      <span>{number}</span>
      <button onClick={onDelete}>Delete</button>
    </ContactEntryStyled>
  );
};

export default ContactEntry;
