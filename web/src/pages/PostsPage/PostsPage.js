import HeaderLayout from 'src/layouts/HeaderLayout';
import MainLayout from 'src/layouts/MainLayout';
import PostsLayout from 'src/layouts/PostsLayout';
import PostsCell from 'src/components/PostsCell';

const PostsPage = ({ name }) => {
  return (
    <>
      <HeaderLayout>{name}</HeaderLayout>
      <MainLayout>
        <PostsLayout>
          <PostsCell />
        </PostsLayout>
      </MainLayout>
    </>
  );
};

export default PostsPage;
