import {generateWeekToShow} from "../../../utilities/Utills";
import {useAppSelector} from "../../../hooks/useRedux";
import styled from "styled-components";
import {Cell} from "./Cell";

const WeekCellsStyled = styled.div`
  width: 100%;
  flex: 1;
  display: flex;
  justify-content: space-between;
  margin: 0 auto;
  min-height: 500px;
`

export const WeekCells = () => {
    const currentDate = useAppSelector(state => state.layout.currentDate);

    const weekToShow = generateWeekToShow(new Date(currentDate));

    return (
        <WeekCellsStyled>
            {weekToShow.map((date) => <Cell key={date.valueOf()} date={date}/>)}
        </WeekCellsStyled>
    );
};