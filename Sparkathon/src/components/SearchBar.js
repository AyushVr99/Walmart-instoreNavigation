import React from 'react';
import { Form, FormControl, Button } from 'react-bootstrap';

const SearchBar = () => {
  return (
    <Form inline className="search-bar">
      <FormControl type="text" placeholder="Search for products" className="mr-sm-2" />
      <Button variant="primary">Search</Button>
    </Form>
  );
};

export default SearchBar;
