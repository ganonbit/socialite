import { useMutation, useFlash } from '@redwoodjs/web';
import { navigate, routes } from '@redwoodjs/router';
import CommentForm from 'src/components/CommentForm';

export const QUERY = gql`
  query FIND_COMMENT_BY_ID($id: String!) {
    comment: comment(id: $id) {
      id
      createdAt
      updatedAt
      state
      content
      sentById
      postId
    }
  }
`;
const UPDATE_COMMENT_MUTATION = gql`
  mutation UpdateCommentMutation($id: String!, $input: UpdateCommentInput!) {
    updateComment(id: $id, input: $input) {
      id
      createdAt
      updatedAt
      state
      content
      sentById
      postId
    }
  }
`;

export const Loading = () => <div>Loading...</div>;

export const Success = ({ comment }) => {
  const { addMessage } = useFlash();
  const [updateComment, { loading, error }] = useMutation(UPDATE_COMMENT_MUTATION, {
    onCompleted: () => {
      navigate(routes.comments());
      addMessage('Comment updated.', { classes: 'rw-flash-success' });
    },
  });

  const onSave = (input, id) => {
    const castInput = Object.assign(input, { postId: parseInt(input.postId) });
    updateComment({ variables: { id, input: castInput } });
  };

  return (
    <div className='rw-segment'>
      <header className='rw-segment-header'>
        <h2 className='rw-heading rw-heading-secondary'>Edit Comment {comment.id}</h2>
      </header>
      <div className='rw-segment-main'>
        <CommentForm comment={comment} onSave={onSave} error={error} loading={loading} />
      </div>
    </div>
  );
};
