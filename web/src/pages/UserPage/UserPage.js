import HeaderLayout from 'src/layouts/HeaderLayout';
import MainLayout from 'src/layouts/MainLayout';
import UsersLayout from 'src/layouts/UsersLayout';
import UserCell from 'src/components/UserCell';

const UserPage = ({ id, name }) => {
  return (
    <>
      <HeaderLayout>{name}</HeaderLayout>
      <MainLayout>
        <UsersLayout>
          <UserCell id={id} />
        </UsersLayout>
      </MainLayout>
    </>
  );
};

export default UserPage;
