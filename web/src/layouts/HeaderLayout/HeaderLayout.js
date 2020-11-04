import { Link, routes } from '@redwoodjs/router';
import { Heading, Box, Flex, Spacer, Button } from '@chakra-ui/core';

const HeaderLayout = ({ children }) => {
  return (
    <>
      <Flex m='5'>
        <Box>
          <Heading fontSize='2.25rem' letterSpacing='widest'>
            Socialite
          </Heading>
          <Heading as='h4' fontSize='1rem' lineHeight='1rem' letterSpacing='0.1rem'>
            redwood socialite
          </Heading>
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
      <Heading m='7'>{children}</Heading>
    </>
  );
};

export default HeaderLayout;
