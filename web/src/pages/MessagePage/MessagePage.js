import HeaderLayout from 'src/layouts/HeaderLayout';
import MainLayout from 'src/layouts/MainLayout';
import MessagesLayout from 'src/layouts/MessagesLayout';
import MessageCell from 'src/components/MessageCell';

const MessagePage = ({ id, name }) => {
  return (
    <>
      <HeaderLayout>{name}</HeaderLayout>
      <MainLayout>
        <MessagesLayout>
          <MessageCell id={id} />
        </MessagesLayout>
      </MainLayout>
    </>
  );
};

export default MessagePage;
