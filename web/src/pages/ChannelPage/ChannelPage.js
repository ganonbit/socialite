import HeaderLayout from 'src/layouts/HeaderLayout';
import MainLayout from 'src/layouts/MainLayout';
import ChannelsLayout from 'src/layouts/ChannelsLayout';
import ChannelCell from 'src/components/ChannelCell';

const ChannelPage = ({ id, name }) => {
  return (
    <>
      <HeaderLayout>{name}</HeaderLayout>
      <MainLayout>
        <ChannelsLayout>
          <ChannelCell id={id} />
        </ChannelsLayout>
      </MainLayout>
    </>
  );
};

export default ChannelPage;
