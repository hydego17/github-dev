import { useState, useEffect } from "react";

import Head from "next/head";

import { Box, Flex, Heading, Spinner, Button } from "@chakra-ui/react";
import styled from "@emotion/styled";

import { useGetUsers } from "lib/api";
import UserCard from "components/UserCard";

export default function Home() {
  // Define array of users
  const [devs, setDevs] = useState([]);

  const randomNumber = Math.ceil(Math.random() * 1000000);

  // Random state for user query
  const [random, setRandom] = useState(randomNumber);
  const [offset, setOffset] = useState(5);

  // Get data from API
  const { data: users, loading } = useGetUsers({ random });

  // Refresh button handler
  const refreshUsers = () => {
    setRandom(randomNumber);
  };

  // Change user handler
  const changeUser = (index) => {
    const newDev = users[offset + 1];

    const filterUsers = [...devs];

    filterUsers[index] = newDev;

    setDevs(filterUsers);
    setOffset((prev) => prev + 1);
  };

  // Store data in state
  useEffect(() => {
    if (users) {
      const newDevs = [...users].slice(0, 5);
      setDevs(newDevs);
    }
  }, [users]);

  return (
    <>
      <Head>
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1.0, minimum-scale=1.0"
        />
        <title> Github Dev </title>
      </Head>

      <HomeStyled>
        <Box as="section" className="intro">
          <Heading as="h1" fontFamily="roboto">
            Github Dev
          </Heading>
        </Box>

        <Flex rounded="md" py={4} mb={4} justify="space-between" align="center">
          <Heading as="h1" fontSize="26px" fontFamily="roboto" color="#606060">
            Who to follow
          </Heading>

          <Flex align="center">
            {loading && <Spinner />}
            <Button
              size="sm"
              color="white"
              background="#1B477D"
              ml={4}
              onClick={refreshUsers}
            >
              Refresh
            </Button>
          </Flex>
        </Flex>

        <Flex
          position="relative"
          left={0}
          right={0}
          py={8}
          minH={170}
          rounded="md"
          as="section"
          className="user-card"
        >
          <Flex wrap="wrap" justify="space-between" className="container">
            {users &&
              devs.map((user, index) => (
                <UserCard
                  idx={index}
                  key={index}
                  user={user}
                  changeUser={changeUser}
                />
              ))}
          </Flex>
        </Flex>
      </HomeStyled>
    </>
  );
}

const HomeStyled = styled.section`
  .intro {
    margin-bottom: 2rem;
    h1 {
      font-size: clamp(1.85rem, 2.5vw, 4rem);
      padding-right: 2rem;
      margin-bottom: 1rem;
    }
    p {
      margin-bottom: 1rem;
      font-size: 1.1rem;
    }
  }
  h2 {
    font-size: clamp(1.4rem, 5vw, 1.6rem);
  }
`;
