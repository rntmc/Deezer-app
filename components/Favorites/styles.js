import styled from 'styled-components';

export const Container = styled.div`
  width:100%;
  height: 100vh;

  display: grid;
  grid-template-rows: 104px auto 77px;
  grid-area:
  "header"
  "main"
  "footer";

  background-color: ${({theme}) => theme.COLORS.DARK_400};
`;

export const AlbumList = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
  padding: 0 124px;
  margin-top: 24px;
`;

export const AlbumCard = styled.div`
  position: relative;
  width: 200px;
  margin: 10px;
  text-align: center;

  .favorite {
    position: absolute;
    top: 10px;
    right: 10px;
    background: transparent;
    border: none;
    cursor: pointer;

    svg {
      color: ${({theme}) => theme.COLORS.LIGHT_400};
      font-size: 24px;
    }

    &.favorited {
      svg {
        color: ${({theme}) => theme.COLORS.TOMATO_300}; /* Cor do ícone de coração preenchido */
      }
    }
  }

  img {
    width: 100%;
    border-radius: 8px;
  }

  p {
    margin-top: 5px;
    font-weight: bold;
  }

  button:first-child{
    border: none;
    display: flex;

    svg {
      color: none;
    }
  }

  .buttons{
    display: flex;
    align-items: center;
    justify-content: center;
    gap:12px;
    margin-top: 6px;
  }

  button:last-child {
    background-color:${({theme}) => theme.COLORS.CAKE_100};
    border: none;
    border-radius: 4px;
    padding: 3px;
    font-size: 12px;

    &:hover {
      background-color: ${({ theme }) => theme.COLORS.CAKE_200};
    }
  }

  a {
    display: block;
    color: white;
    text-decoration: none;
    font-weight: bold;   
  }

  .playPauseButton {
    background-color: ${({ theme }) => theme.COLORS.CAKE_100};
    color: #fff;
    border: none;
    border-radius: 4px;
    padding: 4px;
    cursor: pointer;
    font-size: 12px;
    display: flex;
    align-items: center;

    &:hover {
      background-color: ${({ theme }) => theme.COLORS.CAKE_200};
    }
  }

  audio {
    width:100%;
  }
`;

