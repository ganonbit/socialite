import HeaderLayout from 'src/layouts/HeaderLayout';
import MainLayout from 'src/layouts/MainLayout';
import UsersLayout from 'src/layouts/UsersLayout';
import EditUserCell from 'src/components/EditUserCell';

const EditUserPage = ({ id, name }) => {
  return (
    <>
      <HeaderLayout>{name}</HeaderLayout>
      <MainLayout>
        <UsersLayout>
          <EditUserCell id={id} />
        </UsersLayout>
      </MainLayout>
    </>
  );
};

export default EditUserPage;
