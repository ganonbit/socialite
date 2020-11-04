import SocialHandlesLayout from 'src/layouts/SocialHandlesLayout';
import SocialHandleCell from 'src/components/SocialHandleCell';

const SocialHandlePage = ({ id }) => {
  return (
    <SocialHandlesLayout>
      <SocialHandleCell id={id} />
    </SocialHandlesLayout>
  );
};

export default SocialHandlePage;
