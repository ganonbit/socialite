import HeaderLayout from 'src/layouts/HeaderLayout';
import MainLayout from 'src/layouts/MainLayout';
import SocialHandlesLayout from 'src/layouts/SocialHandlesLayout';
import EditSocialHandleCell from 'src/components/EditSocialHandleCell';

const EditSocialHandlePage = ({ id, name }) => {
  return (
    <>
      <HeaderLayout>{name}</HeaderLayout>
      <MainLayout>
        <SocialHandlesLayout>
          <EditSocialHandleCell id={id} />
        </SocialHandlesLayout>
      </MainLayout>
    </>
  );
};

export default EditSocialHandlePage;
