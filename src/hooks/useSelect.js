import React from 'react';

const useSelect = () => {
  const [value, setValue] = React.useState();

  function onChange(e) {
    setValue(e.target.value);
  }

  return {
    value,
    setValue,
    onChange,
  }
}

export default useSelect;
