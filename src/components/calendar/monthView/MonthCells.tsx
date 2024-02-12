import styled from "styled-components";
import React from "react";
import {generateMonthToShow} from "../../../utilities/Utills";
import {Cell} from "./Cell";
import {useAppSelector} from "../../../hooks/useRedux";

const MonthCellsStyled = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  //align-content: flex-start;
  flex: 1;
  height: 100%;
  width: 95%;
  margin: 0 auto;
`;

export const MonthCells = () => {
    const date = useAppSelector(state => state.layout.currentDate);
    const monthToShow = generateMonthToShow(new Date(date));

    return (
        <MonthCellsStyled>
            {monthToShow.map((date) => (
                <Cell date={date} key={date.valueOf()}/>
            ))}
        </MonthCellsStyled>
    );
};