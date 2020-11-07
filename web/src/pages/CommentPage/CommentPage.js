import HeaderLayout from 'src/layouts/HeaderLayout';
import MainLayout from 'src/layouts/MainLayout';
import CommentsLayout from 'src/layouts/CommentsLayout';
import CommentCell from 'src/components/CommentCell';

const CommentPage = ({ id, name }) => {
  return (
    <>
      <HeaderLayout>{name}</HeaderLayout>
      <MainLayout>
        <CommentsLayout>
          <CommentCell id={id} />
        </CommentsLayout>
      </MainLayout>
    </>
  );
};

export default CommentPage;
