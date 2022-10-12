import React from "react";
import Envelope from "./Envelope";
export default function App() {
  const toPerson = {
    fullName: "Mr.Santa",
    street: "123 Fakestreet",
    country: "Greanland",
  };
  const fromPerson = {
    fullName: "Mrs Izabela",
    street: "321 Realstreet",
    country: "Dreamland",
  };
  return (
    <div>
      <h1>My React App</h1>
      <Envelope toPerson={toPerson} fromPerson={fromPerson} />
    </div>
  );
}
