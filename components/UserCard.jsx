import styled from "@emotion/styled";
import { Box, Image, IconButton, Text } from "@chakra-ui/react";
import { SmallCloseIcon } from "@chakra-ui/icons";

import Link from "next/link";

export default function UserCard({ user, changeUser, idx }) {
  return (
    <CardStyled>
      <Link href="/dev/[users]" as={`/dev/${user.login}`}>
        <a>
          <Box textAlign="center" py={2}>
            <Box px={2} maxW={100}>
              <Image borderRadius="full" src={user.avatar_url} />
            </Box>

            <Text
              as="p"
              pt={4}
              fontSize="sm"
              isTruncated
              className="user-login"
            >
              {user.login}
            </Text>
          </Box>
        </a>
      </Link>

      <Box className="close-btn">
        <IconButton
          onClick={() => changeUser(idx)}
          variant="outline"
          colorScheme="teal"
          aria-label="Call Sage"
          fontSize="10px"
          icon={<SmallCloseIcon />}
        />
      </Box>
    </CardStyled>
  );
}

const CardStyled = styled.div`
  display: flex;
  position: relative;
  cursor: pointer;

  .close-btn {
    position: absolute;
    right: 0;
    visibility: hidden;
    opacity: 0;
    transition: 0.3s ease;
  }

  &:hover {
    .user-login {
      text-decoration: underline;
    }

    .close-btn {
      visibility: visible;
      opacity: 1;
    }
  }

  button {
    border-radius: 50%;
    height: 10px;
    min-width: 5px;
    width: 10px;
    font-size: 12px;
    padding-left: 0;
    padding-right: 0;
    border: 1px solid;
    border-color: currentColor;
    color: #cecece;
    background: #242424;
    padding: 0.5rem;
  }
`;
