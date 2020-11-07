import { Text } from '@chakra-ui/core';
import HeaderLayout from 'src/layouts/HeaderLayout';
import MainLayout from 'src/layouts/MainLayout';

const ContactPage = ({ name }) => {
  return (
    <>
      <HeaderLayout>{name}</HeaderLayout>
      <MainLayout>
        <Text>contact me</Text>
      </MainLayout>
    </>
  );
};

export default ContactPage;
