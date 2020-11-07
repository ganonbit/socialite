import HeaderLayout from 'src/layouts/HeaderLayout';
import MainLayout from 'src/layouts/MainLayout';
import PostsLayout from 'src/layouts/PostsLayout';
import EditPostCell from 'src/components/EditPostCell';

const EditPostPage = ({ id, name }) => {
  return (
    <>
      <HeaderLayout>{name}</HeaderLayout>
      <MainLayout>
        <PostsLayout>
          <EditPostCell id={id} />
        </PostsLayout>
      </MainLayout>
    </>
  );
};

export default EditPostPage;
