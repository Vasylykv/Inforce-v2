import React, { FC, useState } from 'react';
import { IComment } from '../models/IComment';
import { commentApi } from '../services/CommentService';
import CommentItem from './CommentItem';
import getDateString from '../utils/getDateString';

interface CommentsListProps {
  comments: IComment[] | undefined;
  isFetching: boolean;
  isError: boolean;
  productId: number | undefined;
}

const CommentsList: FC<CommentsListProps> = ({
  comments,
  isFetching,
  isError,
  productId,
}) => {
  const [createComment, {}] = commentApi.useAddCommentMutation();
  const [deleteComment, {}] = commentApi.useDeleteCommentMutation();

  const [commentText, setCommentText] = useState('');

  async function onSubmit() {
    if (commentText === '') return;
    const newComment = {
      productId: productId,
      description: commentText,
      date: getDateString(),
    };
    await createComment(newComment as IComment);
    setCommentText('');
  }

  const hanleDeleteComment = async (comment: IComment) => {
    await deleteComment(comment);
  };

  return (
    <div className="w-128">
      <div className="font-bold text-3xl">Comments Section:</div>
      <div className="flex gap-x-4 mt-5">
        <button
          onClick={onSubmit}
          className="h-10 mx-0 px-6 font-semibold bg-black text-white block"
        >
          Add Comment
        </button>
        <textarea
          value={commentText}
          onChange={(e) => setCommentText(e.target.value)}
          style={{ resize: 'none' }}
        />
      </div>

      <hr className="mt-4" />
      {isError && <li>Could not fetch comments...</li>}
      {isFetching && <li>Loading...</li>}
      <ul className="flex flex-col mt-8">
        {comments ? (
          comments.map((comment) => (
            <CommentItem
              comment={comment}
              handleDeleteComment={() => hanleDeleteComment(comment)}
            />
          ))
        ) : (
          <li>There are no comments yet.</li>
        )}
      </ul>
    </div>
  );
};

export default CommentsList;
