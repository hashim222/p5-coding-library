import React from "react";
import { Dropdown } from "react-bootstrap";
import styles from "../styles/DropdownToggle.module.css";
import btnStyles from "../styles/Button.module.css";
import { useHistory } from "react-router-dom";

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

export const EllipsisDropdown = ({ handleEdit, handleDelete }) => {
  return (
    <Dropdown className="ml-4 mt-2" drop="left">
      <Dropdown.Toggle as={EllipsisToggle} />

      <Dropdown.Menu className={`text-center`}>
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

export const ProfileEditDropdown = ({ id }) => {
  const history = useHistory();
  return (
    <Dropdown className={`ml-auto px-3 ${styles.Absolute}`} drop="left">
      <Dropdown.Toggle as={EllipsisToggle} />
      <Dropdown.Menu>
        <Dropdown.Item
          className={styles.EditProfileButtons}
          onClick={() => history.push(`/profiles/${id}/edit`)}
          aria-label="edit-profile"
        >
          <i className="fas fa-edit" /> Edit profile
        </Dropdown.Item>
        <Dropdown.Item
          className={styles.EditProfileButtons}
          onClick={() => history.push(`/profiles/${id}/edit/username`)}
          aria-label="edit-username"
        >
          <i className="far fa-id-card" /> Change username
        </Dropdown.Item>
        <Dropdown.Item
          className={styles.EditProfileButtons}
          onClick={() => history.push(`/profiles/${id}/edit/password`)}
          aria-label="edit-password"
        >
          <i className="fa-solid fa-unlock" /> Change password
        </Dropdown.Item>
      </Dropdown.Menu>
    </Dropdown>
  );
};
