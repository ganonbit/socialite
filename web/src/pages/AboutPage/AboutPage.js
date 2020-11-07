import { Text } from '@chakra-ui/core';
import HeaderLayout from 'src/layouts/HeaderLayout';
import MainLayout from 'src/layouts/MainLayout';

const AboutPage = ({ name }) => {
  return (
    <>
      <HeaderLayout>{name}</HeaderLayout>
      <MainLayout>
        <Text>about me self</Text>
      </MainLayout>
    </>
  );
};

export default AboutPage;
