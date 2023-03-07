import React, { useState } from 'react';
import Dropdown from 'react-bootstrap/Dropdown';
import filterButton from '../../asset/filter-icon.png'

const FilterToggle = React.forwardRef(({ children, onClick }, ref) => (
  <a
    href=""
    ref={ref}
    onClick={(e) => {
      e.preventDefault();
      onClick(e);
    }}
  >
    <img src={filterButton} className="filter-icon"/>
  </a>
));

const FilterMenu = React.forwardRef(
  ({ children, style, className, 'aria-labelledby': labeledBy }, ref) => {
    const [value, setValue] = useState('');

    return (
      <div
        ref={ref}
        style={style}
        className={className}
        aria-labelledby={labeledBy}
      >
        <ul className="list-unstyled">
          {React.Children.toArray(children).filter(
            (child) =>
              !value || child.props.children.toLowerCase().startsWith(value),
          )}
        </ul>
      </div>
    );
  },
);

const FilterIconButton = () => {

  return (
    <Dropdown  align="end">
      <Dropdown.Toggle as={FilterToggle} id="dropdown-custom-components">
        
      </Dropdown.Toggle>
  
      <Dropdown.Menu as={FilterMenu}>
        <Dropdown.Item eventKey="1"><b>All Notifications</b></Dropdown.Item>
        <Dropdown.Divider />
        <Dropdown.Item eventKey="2">Recent</Dropdown.Item>
        <Dropdown.Divider />
        <Dropdown.Item eventKey="3">Read</Dropdown.Item>
      </Dropdown.Menu>
    </Dropdown>
  );

};

export default FilterIconButton