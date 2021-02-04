import React from 'react';
import PropTypes from 'prop-types';

const ColorControls = ({ bgColor, fgColor, text, 
  onBgColorChange, onFgColorChange, onTextChange }) => (
  <>
    <label htmlFor="bgColor">Background Color</label>
    <input 
      id="bgColor" 
      type="color" 
      value={bgColor} 
      onChange={onBgColorChange} 
    />
    <label htmlFor="fgColor">Foreground Color</label>
    <input 
      id="fgColor"
      type="color" 
      value={fgColor} 
      onChange={onFgColorChange} 
    />
    <label htmlFor="text">Text</label>
    <input id="text"
      type="text" 
      value={text} 
      onChange={onTextChange} 
    />
  </>
);

ColorControls.propTypes = {
  bgColor: PropTypes.string.isRequired,
  fgColor: PropTypes.string.isRequired,
  text: PropTypes.string.isRequired,
  onBgColorChange: PropTypes.func.isRequired,
  onFgColorChange: PropTypes.func.isRequired,
  onTextChange: PropTypes.func.isRequired 
};

export default ColorControls;
