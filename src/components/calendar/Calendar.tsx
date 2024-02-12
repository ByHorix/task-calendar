import styled from "styled-components";
import {WeekDays} from "./WeekDays";
import {MonthCells} from "./monthView/MonthCells";
import {useAppSelector} from "../../hooks/useRedux";

const CalendarWrapperStyled = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  height: 100%;
  width: 100%;
  box-sizing: border-box;
`;

export const Calendar = () => {
    const currentDate = useAppSelector(state => state.layout.currentDate)

    return (
        <CalendarWrapperStyled>
            <WeekDays/>
            <MonthCells date={new Date(currentDate)}/>
        </CalendarWrapperStyled>
    );
};