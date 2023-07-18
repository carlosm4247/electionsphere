import { useState } from 'react';

const options = [
  { label: 'Home', value: '/' },
  { label: 'Presidential Race', value: '/president' },
];

const useDropdownVal = (defaultValue) => {
  const [dropdownVal, setDropdownVal] = useState(defaultValue);
  return [dropdownVal, setDropdownVal];
};

export { options, useDropdownVal};