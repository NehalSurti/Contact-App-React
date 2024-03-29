import React, { useState } from "react";
import { FormControl, FormLabel, Button, Input, Stack } from "@chakra-ui/react";

const ContactForm = ({ addNewContact, onClose, contact, updateContact }) => {
  const [name, setName] = useState(contact ? contact.name : "");
  const [email, setEmail] = useState(contact ? contact.email : "");
  console.log(contact);
  
  const onSubmit = () => {
    if (contact) {
      console.log("print");
      updateContact(name, email, contact.id);
      onClose();
    } else {
      addNewContact(name, email);
      onClose();
    }
  };

  return (
    <Stack>
      <FormControl id="name">
        <FormLabel>Name</FormLabel>
        <Input
          value={name}
          type="text"
          onChange={(e) => setName(e.target.value)}
        />
      </FormControl>
      <FormControl id="email">
        <FormLabel>Email address</FormLabel>
        <Input
          value={email}
          type="email"
          onChange={(e) => setEmail(e.target.value)}
        />
      </FormControl>
      {contact ? (
        <Button onClick={onSubmit} colorScheme="purple" alignSelf="flex-end">
          Update Contact
        </Button>
      ) : (
        <Button onClick={onSubmit} colorScheme="purple" alignSelf="flex-end">
          Add Contact
        </Button>
      )}
    </Stack>
  );
};

export default ContactForm;
