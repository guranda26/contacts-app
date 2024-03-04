import { View, Text, FlatList, SectionList } from "react-native";
import React from "react";
import Row from "./Row";

const renderItem = ({ item }) => <Row name={item.name} phone={item.phone} />;

const renderSectionHeader = (obj) => <Text>{obj.section.title}</Text>;

const ContactsList = ({ contacts }) => {
  const contactsByLetter = contacts.reduce((obj, contact) => {
    if (!contact.name || contact.name.length === 0) {
      return obj;
    }
    const firstLetter = contact.name[0].toUpperCase();
    return {
      ...obj,
      [firstLetter]: [...(obj[firstLetter] || []), contact],
    };
  }, {});

  const sections = Object.keys(contactsByLetter)
    .sort()
    .map((letter) => ({
      title: letter,
      data: contactsByLetter[letter],
    }));
  return (
    <SectionList
      sections={sections}
      renderItem={renderItem}
      renderSectionHeader={renderSectionHeader}
    />
  );
};

export default ContactsList;
