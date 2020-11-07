import HeaderLayout from 'src/layouts/HeaderLayout';
import MainLayout from 'src/layouts/MainLayout';
import CommentsLayout from 'src/layouts/CommentsLayout';
import EditCommentCell from 'src/components/EditCommentCell';

const EditCommentPage = ({ id, name }) => {
  return (
    <>
      <HeaderLayout>{name}</HeaderLayout>
      <MainLayout>
        <CommentsLayout>
          <EditCommentCell id={id} />
        </CommentsLayout>
      </MainLayout>
    </>
  );
};

export default EditCommentPage;
