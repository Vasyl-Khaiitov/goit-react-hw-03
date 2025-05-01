import css from './Contact.module.css';
import { FaPhone } from 'react-icons/fa6';
import { MdPerson4 } from 'react-icons/md';

export default function Contact({ name, number, id, onDelete }) {
  return (
    <>
      <ul>
        <li>
          <MdPerson4 size={20} />
          {name}
        </li>
        <li>
          <FaPhone size={15} />
          {number}
        </li>
      </ul>
      <button className={css.delete_btn} type="button" id={id}>
        Delete
      </button>
    </>
  );
}
