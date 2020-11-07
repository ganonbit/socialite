import HeaderLayout from 'src/layouts/HeaderLayout';
import MainLayout from 'src/layouts/MainLayout';
import MessagesLayout from 'src/layouts/MessagesLayout';
import EditMessageCell from 'src/components/EditMessageCell';

const EditMessagePage = ({ id, name }) => {
  return (
    <>
      <HeaderLayout>{name}</HeaderLayout>
      <MainLayout>
        <MessagesLayout>
          <EditMessageCell id={id} />
        </MessagesLayout>
      </MainLayout>
    </>
  );
};

export default EditMessagePage;
