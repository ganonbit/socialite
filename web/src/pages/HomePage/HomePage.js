import { Text } from '@chakra-ui/core';
import HeaderLayout from 'src/layouts/HeaderLayout';
import MainLayout from 'src/layouts/MainLayout';

const HomePage = () => {
  return (
    <>
      <HeaderLayout>Welcome</HeaderLayout>
      <MainLayout>
        <Text>homepage yee</Text>
      </MainLayout>
    </>
  );
};

export default HomePage;
