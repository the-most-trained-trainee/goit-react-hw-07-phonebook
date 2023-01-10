import ContactEntryStyled from './StyledContactEntry';
import { useDispatch } from 'react-redux';
import { removeContact } from 'redux/operations';

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
