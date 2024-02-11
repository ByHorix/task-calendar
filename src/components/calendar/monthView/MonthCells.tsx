import styled from "styled-components";
import React from "react";
import {generateMonthToShow} from "../../../utilities/Utills";
import {Cell} from "./Cell";

const MonthCellsStyled = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  //align-content: flex-start;
  flex: 1;
  height: 100%;
  width: 90%;
  margin: 0 auto;
`;

type Props = {
    date: Date
}

export const MonthCells: React.FC<Props> = ({date}) => {
    const monthToShow = generateMonthToShow(date)

    return (
        <MonthCellsStyled>
            {monthToShow.map((date) => (
                <Cell date={date} key={date.valueOf()}/>
            ))}
        </MonthCellsStyled>
    );
};