import styled from "styled-components";
import {colorConfig} from "../../../configs/colorConfig";
import {format, isToday} from "date-fns";

const WeekCellStyled = styled.div<{ $isToday: boolean }>`
  background-color: ${colorConfig.bgSecondary};
  width: calc(100% / 7);
  
  & > div {
    padding: 20px;
  }
  
  &:nth-child(even) {
    background-color: ${colorConfig.bgThird};
  }
  
  & > .cell-header {
    //font-weight: 700;
    color: ${(props) => props.$isToday ? colorConfig.colorSecondary : colorConfig.colorPrimary};
    background-color: ${colorConfig.bgSecondary};
    border-bottom: ${colorConfig.colorThird} 2px solid;
    text-align: center;
  }
`

export const Cell = ({date}: {date: Date}) => {
    const isTodayDate = isToday(date)

    return (
        <WeekCellStyled $isToday={isTodayDate}>
            <div className="cell-header">
                {format(date, 'E MMM do')}
            </div>
            <div className='cell-body'>
            </div>
        </WeekCellStyled>
    )
}