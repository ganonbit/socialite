import HeaderLayout from 'src/layouts/HeaderLayout';
import MainLayout from 'src/layouts/MainLayout';
import ChannelsLayout from 'src/layouts/ChannelsLayout';
import EditChannelCell from 'src/components/EditChannelCell';

const EditChannelPage = ({ id, name }) => {
  return (
    <>
      <HeaderLayout>{name}</HeaderLayout>
      <MainLayout>
        <ChannelsLayout>
          <EditChannelCell id={id} />
        </ChannelsLayout>
      </MainLayout>
    </>
  );
};

export default EditChannelPage;
