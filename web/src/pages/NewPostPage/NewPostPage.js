import HeaderLayout from 'src/layouts/HeaderLayout';
import MainLayout from 'src/layouts/MainLayout';
import PostsLayout from 'src/layouts/PostsLayout';
import NewPost from 'src/components/NewPost';

const NewPostPage = ({ name }) => {
  return (
    <>
      <HeaderLayout>{name}</HeaderLayout>
      <MainLayout>
        <PostsLayout>
          <NewPost />
        </PostsLayout>
      </MainLayout>
    </>
  );
};

export default NewPostPage;
