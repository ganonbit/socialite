import ChannelsLayout from 'src/layouts/ChannelsLayout';
import EditChannelCell from 'src/components/EditChannelCell';

const EditChannelPage = ({ id }) => {
  return (
    <ChannelsLayout>
      <EditChannelCell id={id} />
    </ChannelsLayout>
  );
};

export default EditChannelPage;
