import HeaderLayout from 'src/layouts/HeaderLayout';
import MainLayout from 'src/layouts/MainLayout';
import SocialHandlesLayout from 'src/layouts/SocialHandlesLayout';
import SocialHandlesCell from 'src/components/SocialHandlesCell';

const SocialHandlesPage = ({ name }) => {
  return (
    <>
      <HeaderLayout>{name}</HeaderLayout>
      <MainLayout>
        <SocialHandlesLayout>
          <SocialHandlesCell />
        </SocialHandlesLayout>
      </MainLayout>
    </>
  );
};

export default SocialHandlesPage;
