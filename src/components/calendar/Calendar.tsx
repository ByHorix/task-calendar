import styled from "styled-components";
import {WeekDays} from "./WeekDays";
import {MonthCells} from "./monthView/MonthCells";

const CalendarWrapperStyled = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  height: 100%;
  width: 100%;
  box-sizing: border-box;
`;

export const Calendar = () => {
    const today = new Date();

    return (
        <CalendarWrapperStyled>
            <WeekDays/>
            <MonthCells date={today}/>
        </CalendarWrapperStyled>
    );
};