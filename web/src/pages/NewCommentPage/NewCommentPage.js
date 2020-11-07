import HeaderLayout from 'src/layouts/HeaderLayout';
import MainLayout from 'src/layouts/MainLayout';
import CommentsLayout from 'src/layouts/CommentsLayout';
import NewComment from 'src/components/NewComment';

const NewCommentPage = ({ name }) => {
  return (
    <>
      <HeaderLayout>{name}</HeaderLayout>
      <MainLayout>
        <CommentsLayout>
          <NewComment />
        </CommentsLayout>
      </MainLayout>
    </>
  );
};

export default NewCommentPage;
