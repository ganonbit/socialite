import SocialHandlesLayout from 'src/layouts/SocialHandlesLayout';
import EditSocialHandleCell from 'src/components/EditSocialHandleCell';

const EditSocialHandlePage = ({ id }) => {
  return (
    <SocialHandlesLayout>
      <EditSocialHandleCell id={id} />
    </SocialHandlesLayout>
  );
};

export default EditSocialHandlePage;
