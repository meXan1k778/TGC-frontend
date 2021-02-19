import * as React from 'react';
import styled from 'styled-components';
import { CtaButton, Paragraph } from '../../styles/mixins';
import { ITableRow } from '../Tournament/types';
import gameModeIcon from '../../images/game-mode.svg';

const TournamentRow = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 14px 27px;
  background: #181818;
  border: 1px solid #383838;
`;

const TournamentCell = styled.div`
  color: #817A84;
  font-family: 'Source Sans Pro', sans-serif;
  font-weight: 600;
  font-size: 12px;
  line-height: 14px;
`;

const TournamentCellGameMode = styled(TournamentCell)`
  flex-basis: 15%;
`;

const TournamentCellInfo = styled(TournamentCell)`
  flex-basis: 35%;
`;

const TournamentCellPrize = styled(TournamentCell)`
  flex-basis: 11%;
`;

const TournamentCellTeamSize = styled(TournamentCell)`
  flex-basis: 12%;
`;

const TournamentCellStatus = styled(TournamentCell)`
  flex-basis: 27%;
`;

const TournamentName = styled(Paragraph)`
  color: #E9DBF0;
  font-weight: 800;
  margin: 0 0 6px;
  font-family: 'Source Sans Pro', sans-serif;
`;

const StatusWrapper = styled.div`
  display: flex;
  align-items: center;
`;

const TournamentDate = styled.p`
  font-weight: 600;
  font-size: 12px;
  line-height: 14px;
  font-family: 'Source Sans Pro', sans-serif;
  color: #817A84;
  margin: 0;
`;

const StatusBadge = styled.div`
  display: flex;
  align-items: center;
  padding: 2px 6px;
  background: #343434;
  color: #E9DBF0;
  border-radius: 100px;
  font-weight: 800;
  font-size: 8px;
  line-height: 10px;
  text-transform: uppercase;
  font-family: 'Source Sans Pro', sans-serif;
  margin-right: 7px;
`;

const StatusIndicator = styled.span`
  display: inline-block;
  margin-right: 4px;
  width: 8px;
  height: 8px;
  background: #249937;
  border-radius: 50%;
`;

const TournamentTimelineButton = styled(CtaButton)`
  width: 164px;
  padding: 11px 36px;
  font-size: 12px;
  line-height: 14px;
`;

const TournamentTimeline = styled.span`
  font-weight: 600;
  font-size: 10px;
  line-height: 12px;
  margin-left: 11px;
  font-family: 'Source Sans Pro', sans-serif;
`;

const TournamentItem = ({
  tournament: { name, status: tournamentStatus, date },
  prize,
  teamSize,
  registrationInfo: { status, timeline  }
}: ITableRow) => {
  return (
    <TournamentRow>
      <TournamentCellGameMode><img src={gameModeIcon} alt="game mode" /></TournamentCellGameMode>
      <TournamentCellInfo>
        <TournamentName>{name}</TournamentName>
        <StatusWrapper>
          <StatusBadge><StatusIndicator />{tournamentStatus}</StatusBadge>
          <TournamentDate>{date}</TournamentDate>
        </StatusWrapper>
      </TournamentCellInfo>
      <TournamentCellPrize>{prize}</TournamentCellPrize>
      <TournamentCellTeamSize>{teamSize || '-'}</TournamentCellTeamSize>
      <TournamentCellStatus>
        <TournamentTimelineButton>{status}</TournamentTimelineButton>
        <TournamentTimeline>{timeline}</TournamentTimeline>
      </TournamentCellStatus>
    </TournamentRow>
  );
}

export default TournamentItem;
