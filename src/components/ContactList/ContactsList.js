import React from "react";
import s from "./ContactList.module.css";

import { useDeleteContactMutation } from "redux/contacsApi";


const ContactList = ({contacts}) => {

  
  const[deleteContact]=useDeleteContactMutation()
  

  

  //  const filtredContacts = contacts.filter!==""?contacts.contacts.filter(cont=>cont.name.toLowerCase().includes((contacts.filter).toLowerCase())):contacts.contacts
  const filtredContacts = contacts
  
  
  return (
    
    <div>
            <ul>
        {filtredContacts.map((contact) => {
          return (
            <li className={s.contactListItem} key={contact.id}>
              <span>{contact.name}:</span>
              <span> {contact.number}</span>
              <button
                className={s.deleteButton}
                type="button"
                 onClick={()=>{deleteContact(contact.id)}}
              >
                delete
              </button>
            </li>
          );
        })}
      </ul>
      <span></span>
    </div>
  );
};

export default ContactList;

