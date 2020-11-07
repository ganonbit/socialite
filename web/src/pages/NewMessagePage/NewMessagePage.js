import HeaderLayout from 'src/layouts/HeaderLayout';
import MainLayout from 'src/layouts/MainLayout';
import MessagesLayout from 'src/layouts/MessagesLayout';
import NewMessage from 'src/components/NewMessage';

const NewMessagePage = ({ name }) => {
  return (
    <>
      <HeaderLayout>{name}</HeaderLayout>
      <MainLayout>
        <MessagesLayout>
          <NewMessage />
        </MessagesLayout>
      </MainLayout>
    </>
  );
};

export default NewMessagePage;
