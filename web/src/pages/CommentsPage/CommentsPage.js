import HeaderLayout from 'src/layouts/HeaderLayout';
import MainLayout from 'src/layouts/MainLayout';
import CommentsLayout from 'src/layouts/CommentsLayout';
import CommentsCell from 'src/components/CommentsCell';

const CommentsPage = ({ name }) => {
  return (
    <>
      <HeaderLayout>{name}</HeaderLayout>
      <MainLayout>
        <CommentsLayout>
          <CommentsCell />
        </CommentsLayout>
      </MainLayout>
    </>
  );
};

export default CommentsPage;
