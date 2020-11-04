import ChannelsLayout from 'src/layouts/ChannelsLayout';
import ChannelCell from 'src/components/ChannelCell';

const ChannelPage = ({ id }) => {
  return (
    <ChannelsLayout>
      <ChannelCell id={id} />
    </ChannelsLayout>
  );
};

export default ChannelPage;
