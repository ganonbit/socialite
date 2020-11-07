import HeaderLayout from 'src/layouts/HeaderLayout';
import MainLayout from 'src/layouts/MainLayout';
import SocialHandlesLayout from 'src/layouts/SocialHandlesLayout';
import NewSocialHandle from 'src/components/NewSocialHandle';

const NewSocialHandlePage = ({ name }) => {
  return (
    <>
      <HeaderLayout>{name}</HeaderLayout>
      <MainLayout>
        <SocialHandlesLayout>
          <NewSocialHandle />
        </SocialHandlesLayout>
      </MainLayout>
    </>
  );
};

export default NewSocialHandlePage;
