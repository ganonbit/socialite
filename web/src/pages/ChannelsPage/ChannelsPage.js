import HeaderLayout from 'src/layouts/HeaderLayout';
import MainLayout from 'src/layouts/MainLayout';
import ChannelsLayout from 'src/layouts/ChannelsLayout';
import ChannelsCell from 'src/components/ChannelsCell';

const ChannelsPage = ({ name }) => {
  return (
    <>
      <HeaderLayout>{name}</HeaderLayout>
      <MainLayout>
        <ChannelsLayout>
          <ChannelsCell />
        </ChannelsLayout>
      </MainLayout>
    </>
  );
};

export default ChannelsPage;
