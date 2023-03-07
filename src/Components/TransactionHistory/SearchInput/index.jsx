import React from "react";
import Form from "react-bootstrap/Form";
import './index.css';
function SearchInput({ label, name, value, onChange, placeholder, showIcon }) {
  return (
    <div class="form-group has-search">
    <span class="fa fa-search form-control-feedback"></span>
    <input type="text" class="form-control" placeholder="Search"/>
  </div>
  );
}

export default SearchInput;
