import axios from "axios";
const REACT_APP_SERVER = "https://contact-app-52935-default-rtdb.europe-west1.firebasedatabase.app";

export const addContactOnServer = async (name, email) => {
  try {
    const { data } = await axios.post(
      `${REACT_APP_SERVER}/contacts.json`,
      { name, email }
    );
    return data;
  } catch (error) {
    console.log(error);
  }
};

export const getAllContacts = async () => {
  try {
    const { data } = await axios.get(
      `${REACT_APP_SERVER}/contacts.json`
    );
    return data;
  } catch (error) {
    console.log(error);
  }
};

export const updateContactOnServer = async (name, email, id) => {
  try {
    const { data } = await axios.patch(
      `${REACT_APP_SERVER}/contacts/${id}.json`,
      { name, email }
    );
    return data;
  } catch (error) {
    console.log(error);
  }
};
export const deleteContactOnServer = async (id) => {
  try {
    const { data } = await axios.delete(
      `${REACT_APP_SERVER}/contacts/${id}.json`
    );
    return data;
  } catch (error) {
    console.log(error);
  }
};

export const getContactById = async (id) => {
  try {
    const { data } = await axios.get(
      `${REACT_APP_SERVER}/contacts/${id}.json`
    );
    return data;
  } catch (error) {
    console.log(error);
  }
};