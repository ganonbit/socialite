import { Link, routes } from '@redwoodjs/router';
import { Heading, Box, Flex, Spacer, Button } from '@chakra-ui/core';

const MainLayout = ({ children }) => {
  return (
    <>
      <Flex p='5' m='10'>
        <Box p={2}>
          <Heading size='sm'>size Small</Heading>
          <Heading size='lg'>size Large</Heading>
          <Heading size='2xl'>size 2XL</Heading>
          <Heading fontSize='sm'>fontSize Small</Heading>
          <Heading fontSize='lg'>fontSize Large</Heading>
          <Heading fontSize='2xl'>fontSize 2XL</Heading>
        </Box>
        <Spacer />
        <Box>
          <Link to={routes.home()}>
            <Button>Home</Button>
          </Link>

          <Link to={routes.about()}>
            <Button>About</Button>
          </Link>
        </Box>
      </Flex>
      <Heading>{children}</Heading>
    </>
  );
};

export default MainLayout;
