import HeaderLayout from 'src/layouts/HeaderLayout';
import MainLayout from 'src/layouts/MainLayout';
import UsersLayout from 'src/layouts/UsersLayout';
import UsersCell from 'src/components/UsersCell';

const UsersPage = ({ name }) => {
  return (
    <>
      <HeaderLayout>{name}</HeaderLayout>
      <MainLayout>
        <UsersLayout>
          <UsersCell />
        </UsersLayout>
      </MainLayout>
    </>
  );
};

export default UsersPage;
