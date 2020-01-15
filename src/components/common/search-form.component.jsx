import React from 'react';

import { Form, FormControl } from 'react-bootstrap';

const SearchForm = ({ placeholder, onChange }) => {
  return (
    <Form inline>
      <FormControl
        placeholder={placeholder}
        onChange={onChange}
        className='ml-3 pd'
      />
    </Form>
  );
};

export default SearchForm;