import styled from 'styled-components';

export const SongResultBox = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 2rem;
  width: 100%;
`;

export const FrameBox = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  box-shadow: 30px 34px 134px rgba(0, 0, 0, 0.35);
  border-radius: 6px;
  overflow: hidden;
`;

export const InfoBox = styled.div`
  display: flex;
  flex-flow: column wrap;
  justify-content: space-around;
  align-items: center;
  margin-left: auto;
  margin-right: auto;
`;

export const SongInfo = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-bottom: 1.5rem;
`;

export const AlbumInfo = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  color: ${({ theme }) => theme.colors.textSecondary};
  font-size: 14px;
`;

export const SongName = styled.span`
  color: ${({ theme }) => theme.colors.textPrimary};
  font-size: 18px;
  margin-bottom: 5px;
`;

export const SongArtist = styled.span`
  color: ${({ theme }) => theme.colors.textSecondary};
  font-size: 14px;
`;
