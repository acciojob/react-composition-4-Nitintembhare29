
import React from "react";
import './../styles/App.css';
import Form from './SignUp';

const App = () => {
  const handleSubmit = (formValues) => {
    console.log(formValues);
    // Perform further actions with the form values
  };

  const fields = [
    { name: 'name', type: 'text', label: 'Name' },
    { name: 'email', type: 'email', label: 'Email' },
    { name: 'password', type: 'password', label: 'Password' }
  ];

  return (
    <div>
      <h1>Form Example</h1>
      <Form onSubmit={handleSubmit} fields={fields} />
    </div>
  );
};

export default App;