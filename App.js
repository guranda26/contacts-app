import React, { useState } from "react";
import {
  SafeAreaView,
  Button,
  StyleSheet,
  ScrollView,
  TextInput,
  Text,
} from "react-native";
import ContactsList from "./ContactsList";
import contacts, { compareNames } from "./contacts";

export default function App() {
  const [showContacts, setShowContacts] = useState(false);
  const [sortedContacts, setSortedContacts] = useState(contacts);
  const [searchText, setSearchText] = useState("");

  const toggleContacts = () => {
    setShowContacts((prev) => !prev);
  };

  const sort = () => {
    setSortedContacts((prev) => [...prev.sort(compareNames)]);
  };

  const filteredContacts =
    searchText.trim() === ""
      ? sortedContacts
      : sortedContacts.filter((contact) =>
          contact.name.toLowerCase().includes(searchText.toLowerCase())
        );

  return (
    <SafeAreaView style={styles.container}>
      <TextInput
        placeholder="Search Contacts"
        value={searchText}
        onChangeText={setSearchText}
        style={styles.searchInput}
      />
      <Button title="toggle contacts" onPress={toggleContacts} />
      <Button title="sort" onPress={sort} />
      {showContacts && <ContactsList contacts={filteredContacts} />}
    </SafeAreaView>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
  searchInput: {
    height: 40,
    margin: 12,
    borderWidth: 1,
    padding: 10,
    width: "90%",
    borderRadius: 5,
  },
});
