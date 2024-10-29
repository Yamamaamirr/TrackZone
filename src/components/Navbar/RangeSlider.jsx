import React, { useState, useEffect } from 'react';
import { Range } from 'react-range';

const RangeSlider = ({ label, min, max, onRangeChange, value }) => {
  const [values, setValues] = useState(value);

  // Update values when the external `value` prop changes
  useEffect(() => {
    setValues(value);
  }, [value]);

  const handleRangeChange = (rangeValues) => {
    setValues(rangeValues); // Update local state for smooth dragging
    onRangeChange(rangeValues); // Update parent immediately
  };

  return (
    <div className="w-full p-2 mb-4" style={{ height: '80px' }}>
      <label className="block mb-1 text-sm font-light">{label}</label>
      <div style={{ margin: '20px 0 0 0', display: 'flex', justifyContent: 'center' }}>
        <Range
          step={1}
          min={min}
          max={max}
          values={values}
          onChange={handleRangeChange}
          renderTrack={({ props, children }) => (
            <div
              {...props}
              style={{
                ...props.style,
                height: '6px',
                display: 'flex',
                width: '90%',
                background: 'lightgray',
                borderRadius: '4px',
              }}
            >
              <div
                style={{
                  height: '6px',
                  width: `${((values[0] - min) / (max - min)) * 100}%`,
                  background: 'lightgray',
                  borderRadius: '4px',
                }}
              />
              <div
                style={{
                  height: '6px',
                  width: `${((values[1] - values[0]) / (max - min)) * 100}%`,
                  background: 'rgb(120,156,156)', // Changed line color
                  borderRadius: '4px',
                }}
              />
              <div
                style={{
                  height: '6px',
                  width: `${((max - values[1]) / (max - min)) * 100}%`,
                  background: 'lightgray',
                  borderRadius: '4px',
                }}
              />
              {children}
            </div>
          )}
          renderThumb={({ props, index }) => (
            <div
              {...props}
              style={{
                ...props.style,
                height: '14px',
                width: '14px',
                borderRadius: '50%',
                backgroundColor: 'white',
                border: '2px solid rgb(120,156,156)', // Changed thumb border color
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                boxShadow: '0px 1px 4px #AAA',
                outline: 'none',
              }}
            >
              <div style={{
                position: 'absolute',
                top: '-24px',
                color: 'black',
                fontWeight: 'bold',
                fontSize: '10px', // Reduced font size for the text on the thumb
              }}>
                {values[index]}
              </div>
            </div>
          )}
        />
      </div>
    </div>
  );
};

export default RangeSlider;
