import styled from "styled-components";
import {WeekDays} from "./WeekDays";
import {MonthCells} from "./monthView/MonthCells";
import {useAppSelector} from "../../hooks/useRedux";
import {WeekCells} from "./weekView/WeekCells";

const CalendarWrapperStyled = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  height: 100%;
  width: 100%;
  box-sizing: border-box;
`;

const cellsForView = {
    month: (
        <>
            <WeekDays/>
            <MonthCells/>
        </>
    ),
    week: <WeekCells/>
}

export const Calendar = () => {
    const view = useAppSelector(state => state.layout.view);

    return (
        <CalendarWrapperStyled>
            {cellsForView[view]}
        </CalendarWrapperStyled>
    );
};