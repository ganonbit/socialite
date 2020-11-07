import { Link, routes } from '@redwoodjs/router';
import { Heading, Box, Flex, Spacer, Button } from '@chakra-ui/core';

const HeaderLayout = ({ children }) => {
  return (
    <>
      <Flex m='5'>
        <Box>
          <Heading size='xl' letterSpacing='wider'>
            Socialite
          </Heading>
          <Heading as='h4' size='xs' lineHeight='1rem' letterSpacing='widest'>
            redwood socialite
          </Heading>
        </Box>
        <Spacer />
        <Box>
          <Link to={routes.home()}>
            <Button mr={2}>Home</Button>
          </Link>

          <Link to={routes.about()}>
            <Button mr={2}>About</Button>
          </Link>

          <Link to={routes.contact()}>
            <Button>Contact</Button>
          </Link>
        </Box>
      </Flex>
      <Heading m='7'>{children}</Heading>
    </>
  );
};

export default HeaderLayout;
