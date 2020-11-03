import { Link, routes } from '@redwoodjs/router';
import { Heading, Box, Flex, Spacer, Button } from '@chakra-ui/core';

const MainLayout = ({ children }) => {
  return (
    <>
      <Flex p='5' m='10'>
        <Box p={2}>
          <Heading fontSize='sm'>Small</Heading>
          <Heading fontSize='lg'>Large</Heading>
          <Heading fontSize='2xl'>2XL</Heading>
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
