import HeaderLayout from 'src/layouts/HeaderLayout';
import MainLayout from 'src/layouts/MainLayout';
import PostsLayout from 'src/layouts/PostsLayout';
import PostCell from 'src/components/PostCell';

const PostPage = ({ id, name }) => {
  return (
    <>
      <HeaderLayout>{name}</HeaderLayout>
      <MainLayout>
        <PostsLayout>
          <PostCell id={id} />
        </PostsLayout>
      </MainLayout>
    </>
  );
};

export default PostPage;
