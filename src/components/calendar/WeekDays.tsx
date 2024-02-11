import styled from "styled-components";
import {colorConfig} from "../../configs/colorConfig";

const WEEKDAYS = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];

const WeekDaysStyled = styled.div`
  display: flex;
  width: 100%;
  padding: 20px 5%;
  margin-bottom: 40px;
  background-color: ${colorConfig.bgSecondary};
  opacity: 0.9;
  color: ${colorConfig.colorPrimary};
  border-bottom: ${colorConfig.colorPrimary} 2px solid;
  box-sizing: border-box;
  
  & > div {
    width: calc(100% / 7);
    text-align: center;
  }
`;

export const WeekDays = () => {
    return (
        <WeekDaysStyled>
            {WEEKDAYS.map((day) => <div key={day}>{day}</div>)}
        </WeekDaysStyled>
    );
};
