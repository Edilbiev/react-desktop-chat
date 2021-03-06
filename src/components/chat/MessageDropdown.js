import React, { useState } from "react";
import Dropdown from "../common/dropdown/Dropdown";
import DropdownItem from "../common/dropdown/DropdownItem";
import { messageDeleted } from "../../redux/actions";
import { useDispatch } from "react-redux";

function MessageDropdown({ messageId }) {
  const dispatch = useDispatch();
  const [dropdown, setDropdown] = useState(false);

  const handleClick = () => {
    setDropdown(!dropdown);
  };

  const handleDelete = () => {
    dispatch(messageDeleted(messageId));
  };

  return (
    <div>
      <button className="dropdown-arrow" onClick={handleClick}>
        <i className="material-icons">keyboard_arrow_down</i>
      </button>
      <Dropdown open={dropdown} type="message">
        <DropdownItem action={handleDelete}>Delete</DropdownItem>
      </Dropdown>
    </div>
  );
}

export default MessageDropdown;
