import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  align-items: center;

  background: ${({ theme, $isnew }) =>
    $isnew === "true" ? "transparent" : theme.COLORS.BACKGROUND_900};

  color: ${({ theme }) => theme.COLORS.GRAY_300};

  border: ${({ theme, $isnew }) =>
    $isnew === "true" ? `1px dashed ${theme.COLORS.GRAY_100}` : "none"};

  margin-bottom: 0.8rem;

  border-radius: 1rem;
  padding-inline: 1.6rem;

  > button {
    border: none;
    background: none;

    display: flex;
  }

  .button-delete {
    color: ${({ theme }) => theme.COLORS.RED};
  }

  .button-add {
    color: ${({ theme }) => theme.COLORS.ORANGE};
  }

  > input {
    height: 5.6rem;
    width: 100%;

    padding: 0.2rem;
    color: ${({ theme }) => theme.COLORS.WHITE};
    background: transparent;
    border: none;

    &::placeholder {
      color: ${({ theme }) => theme.COLORS.GRAY_300};
    }
  }
`;