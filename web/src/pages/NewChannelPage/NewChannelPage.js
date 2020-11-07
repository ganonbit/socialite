import HeaderLayout from 'src/layouts/HeaderLayout';
import MainLayout from 'src/layouts/MainLayout';
import ChannelsLayout from 'src/layouts/ChannelsLayout';
import NewChannel from 'src/components/NewChannel';

const NewChannelPage = ({ name }) => {
  return (
    <>
      <HeaderLayout>{name}</HeaderLayout>
      <MainLayout>
        <ChannelsLayout>
          <NewChannel />
        </ChannelsLayout>
      </MainLayout>
    </>
  );
};

export default NewChannelPage;
