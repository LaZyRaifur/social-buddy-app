import React from 'react';

const Comment = ({name,email}) => {
  return (
    <div>
      <p>{email}</p>
      <p><small>{name}</small></p>
    </div>
  );
};

export default Comment;