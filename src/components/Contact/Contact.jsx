import css from './Contact.module.css';
import { FaPhone } from 'react-icons/fa6';
import { MdPerson4 } from 'react-icons/md';

export default function Contact({ name, number }) {
  return (
    <>
      <ul>
        <li className={css.contact}>
          <MdPerson4 size={20} />
          {name}
        </li>
        <li className={css.contact}>
          <FaPhone size={15} />
          {number}
        </li>
      </ul>
      <button className={css.delete_btn} type="button">
        Delete
      </button>
    </>
  );
}
