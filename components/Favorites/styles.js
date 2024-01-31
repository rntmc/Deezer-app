import styled from 'styled-components';

export const Container = styled.div`
  width: 100%;
  height: 100vh;
  display: grid;
  grid-template-rows: 104px auto;
  grid-area: "header" "main";
  background-color: ${({ theme }) => theme.COLORS.DARK_400};
  padding: 0 124px;
  height: 50px;

  > h1 {
    align-self: center;
    justify-self: center;
  }

.empty-favorites-message,
.empty-results-message {
  color: ${({ theme }) => theme.COLORS.LIGHT_300};
  display: flex;
  align-items: center;
  justify-content: center;
  margin-top: 50px;
  font-size: 18px;
 
}
`;

export const MusicList = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));
  gap: 20px;
  justify-content: space-around;
`;

export const CardWrapper = styled.div`
  background-color: ${({ theme }) => theme.COLORS.DARK_500};
  border-radius: 8px;
  overflow: hidden;
  position: relative;
  transition: transform 0.3s ease;
  margin-bottom: 10px;

  &:hover {
    transform: scale(1.05);
  }

  img {
    width: 100%;
    height: 230px;
    object-fit: cover;
    border-radius: 8px 8px 0 0;
  }

  .info {
    color: ${({ theme }) => theme.COLORS.LIGHT_400};

    h3 {
      padding: 0 8px;
      margin: 0 0 8px;
      font-size: 16px;
      font-weight: bold;
    }

    p {
      padding: 0 8px;
      margin: 0;
      font-size: 14px;
      color: ${({ theme }) => theme.COLORS.LIGHT_300};
    }

    .deezer-link {
      margin-top: 8px;
      display: flex;
      align-items: center;

      a {
        color: ${({ theme }) => theme.COLORS.LIGHT_300};
        text-decoration: none;
        display: flex;
        align-items: center;
        padding: 0 8px;

        i {
          margin-right: 4px;
          font-size: 1.2rem;
        }
      }
    }
  }

  .audio-player {
    margin-top: 16px;
  }

  audio {
      width: 100%;
    }

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
        color: ${({theme}) => theme.COLORS.TOMATO_300};
    }
  }

  audio {
    width:100%;
  }
}
`;
