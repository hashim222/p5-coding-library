import React, { useState } from "react";

import Form from "react-bootstrap/Form";
import styles from "../../styles/CommentCreateEditForm.module.css";
import btnStyles from "../../styles/Button.module.css";

import { axiosRes } from "../../api/axiosDefaults";

const CommentEditForm = (props) => {
  const { id, comment, setShowEditForm, setComments } = props;

  const [formContent, setFormContent] = useState(comment);

  const handleChange = (event) => {
    setFormContent(event.target.value);
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      await axiosRes.put(`/comments/${id}/`, {
        comment: formContent.trim(),
      });
      setComments((prevComments) => ({
        ...prevComments,
        results: prevComments.results.map((comment) => {
          return comment.id === id
            ? {
                ...comment,
                comment: formContent.trim(),
                updated_on: "now",
              }
            : comment;
        }),
      }));
      setShowEditForm(false);
    } catch (error) {
      // console.log(error);
    }
  };

  return (
    <Form className="pt-3 mt-3" onSubmit={handleSubmit}>
      <Form.Group>
        <Form.Control
          className={styles.FormTextarea}
          placeholder="Update your comment"
          as="textarea"
          value={formContent}
          onChange={handleChange}
          rows={3}
        />
      </Form.Group>
      <div className="text-right mt-2">
        <button
          className={`${btnStyles.FormBtns} ${btnStyles.Button} ${btnStyles.BtnHover} ml-auto mt-2`}
          type="button"
          onClick={() => setShowEditForm(false)}
        >
          Cancel
        </button>

        <button
          className={`${btnStyles.FormBtns} ${btnStyles.Button} ${btnStyles.BtnHover} ml-auto mt-2`}
          disabled={!comment.trim()}
          type="submit"
        >
          Make a change
        </button>
      </div>
    </Form>
  );
};

export default CommentEditForm;
