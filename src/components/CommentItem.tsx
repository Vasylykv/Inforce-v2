import React, { FC } from 'react';
import { IComment } from '../models/IComment';

interface CommentItemProps {
  comment: IComment;
  handleDeleteComment: (comment: IComment) => void;
}

const CommentItem: FC<CommentItemProps> = ({
  comment,
  handleDeleteComment,
}) => {
  return (
    <li className="relative h-14 bg-grey-500 block	">
      <div>{comment.description}</div>
      <button
        onClick={() => handleDeleteComment(comment)}
        className="absolute top-0 right-0 text-red-700 text-xl font-bold"
      >
        X
      </button>
    </li>
  );
};

export default CommentItem;
