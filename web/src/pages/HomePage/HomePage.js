import { Link, routes } from '@redwoodjs/router';
import { Heading, Text, Code, Button } from '@chakra-ui/core';

const HomePage = () => {
  return (
    <>
      <Heading>HomePage</Heading>
      <Text>
        Find me in <Code>./web/src/pages/HomePage/HomePage.js</Code>
      </Text>
      <Text>
        My default route is named <Code>home</Code>, link to me with
        <Link to={routes.home()}>
          <Button>Home</Button>
        </Link>
      </Text>
    </>
  );
};

export default HomePage;
