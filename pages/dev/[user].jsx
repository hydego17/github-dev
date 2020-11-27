import { Image, Flex, Box, Heading, Spinner, Text } from "@chakra-ui/react";

import { useGetSingleUser } from "lib/api";
import { useRouter } from "next/router";

export default function UserDetail() {
  const router = useRouter();
  const { user } = router.query;

  const { data: dev, loading, error } = useGetSingleUser({ user });

  return (
    <Flex
      rounder="md"
      bg="gray.100"
      shadow="md"
      py={8}
      align="center"
      justify="center"
      wrap="wrap"
    >
      {loading && <Spinner />}

      {dev && (
        <>
          <Box maxW={200}>
            <Image borderRadius="full" src={dev.avatar_url} />
          </Box>

          <Box px={6}>
            <Heading fontFamily="Roboto" pb={2}>
              {dev.name}
            </Heading>

            <Text pb={2}>
              <a
                href={`https://github.com/${dev.login}`}
                target="_blank"
                rel="noopener"
              >
                {dev.login}
              </a>
            </Text>
            <Text pb={2}>
              <a href={dev.blog} target="_blank" rel="noopener">
                {dev.blog}
              </a>
            </Text>
            <Text as="small">
              {dev.following} Following &bull; {dev.followers} Followers
            </Text>
          </Box>
        </>
      )}
    </Flex>
  );
}
