import HeaderLayout from 'src/layouts/HeaderLayout';
import MainLayout from 'src/layouts/MainLayout';
import SocialHandlesLayout from 'src/layouts/SocialHandlesLayout';
import SocialHandleCell from 'src/components/SocialHandleCell';

const SocialHandlePage = ({ id, name }) => {
  return (
    <>
      <HeaderLayout>{name}</HeaderLayout>
      <MainLayout>
        <SocialHandlesLayout>
          <SocialHandleCell id={id} />
        </SocialHandlesLayout>
      </MainLayout>
    </>
  );
};

export default SocialHandlePage;
