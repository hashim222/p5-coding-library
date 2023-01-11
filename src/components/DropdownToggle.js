import React from "react";
import { Dropdown } from "react-bootstrap";
import styles from "../styles/DropdownToggle.module.css";
import btnStyles from "../styles/Button.module.css";

const EllipsisToggle = React.forwardRef(({ onClick }, ref) => (
  <i
    className={`fa-solid fa-ellipsis ${styles.DropdownIcon} ml-5 ml-lg-0 `}
    ref={ref}
    onClick={(e) => {
      e.preventDefault();
      onClick(e);
    }}
  />
));

const DropdownToggle = ({ handleEdit, handleDelete }) => {
  return (
    <Dropdown className="ml-auto mt-2" drop="left">
      <Dropdown.Toggle as={EllipsisToggle} />

      <Dropdown.Menu className={`${styles.DropdownContainer} text-center`}>
        <Dropdown.Item
          className={`${styles.DropdownItem} ${btnStyles.Button}`}
          onClick={handleEdit}
          aria-label="edit"
        >
          <i className="fas fa-edit" />
        </Dropdown.Item>
        <Dropdown.Item
          className={`${styles.DropdownItem} ${btnStyles.Button}`}
          onClick={handleDelete}
          aria-label="delete"
        >
          <i className="fas fa-trash-alt" />
        </Dropdown.Item>
      </Dropdown.Menu>
    </Dropdown>
  );
};

export default DropdownToggle;
