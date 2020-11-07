import HeaderLayout from 'src/layouts/HeaderLayout';
import MainLayout from 'src/layouts/MainLayout';
import UsersLayout from 'src/layouts/UsersLayout';
import NewUser from 'src/components/NewUser';

const NewUserPage = ({ name }) => {
  return (
    <>
      <HeaderLayout>{name}</HeaderLayout>
      <MainLayout>
        <UsersLayout>
          <NewUser />
        </UsersLayout>
      </MainLayout>
    </>
  );
};

export default NewUserPage;
