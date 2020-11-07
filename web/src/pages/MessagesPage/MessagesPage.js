import HeaderLayout from 'src/layouts/HeaderLayout';
import MainLayout from 'src/layouts/MainLayout';
import MessagesLayout from 'src/layouts/MessagesLayout';
import MessagesCell from 'src/components/MessagesCell';

const MessagesPage = ({ name }) => {
  return (
    <>
      <HeaderLayout>{name}</HeaderLayout>
      <MainLayout>
        <MessagesLayout>
          <MessagesCell />
        </MessagesLayout>
      </MainLayout>
    </>
  );
};

export default MessagesPage;
