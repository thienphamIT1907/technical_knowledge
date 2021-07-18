import React, {useState} from 'react';
import PropTypes from 'prop-types';

TodoForm.propTypes = {
  onSubmit: PropTypes.func
};

TodoForm.defaultProps = {
  onSubmit: null
}

function TodoForm(props) {
  const { onSubmit } = props;
  const [inputValue, setInputValue] = useState('');

  const handleChangeInputValue = (e) => {
    setInputValue(e.target.value);
  }

  const handleFormSubmit = (e) => {
    e.preventDefault();

    if(onSubmit) {
      onSubmit({
        task: inputValue
      });
    }
    setInputValue('')
  }
  return (
    <form onSubmit={handleFormSubmit}>
      <input type="text" value={inputValue} onChange={handleChangeInputValue}/>
    </form>
  );
}

export default TodoForm;
