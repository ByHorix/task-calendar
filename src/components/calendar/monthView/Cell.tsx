import styled from "styled-components";
import {isThisMonth, isToday} from "date-fns";
import {colorConfig} from "../../../configs/colorConfig";
import {format} from "date-fns";

const StyledCell = styled.div<{
    $isThisMonth: boolean,
    $isTodayDate: boolean
}>`
  width: calc(100% / 7);
  min-height: calc(100% / 5.5) !important;
  flex-basis: calc(100% / 7 - 10px);
  margin-bottom: 10px;
  background-color: ${(props) => props.$isThisMonth ? colorConfig.bgThird : colorConfig.bgPrimary};
  opacity: ${(props) => props.$isThisMonth ? 1 : 0.7};
  border: ${(props) => props.$isTodayDate ? colorConfig.colorSecondary : colorConfig.colorPrimary} 2px solid;
  font-weight: ${(props) => props.$isThisMonth ? 700 : 400};
  border-radius: 5px;
  padding: 10px;
  box-sizing: border-box;
  font-size: 0.8em;
  
  & > .cell-header {
    & > .date {
      
    }
  }
`

export const Cell = ({date}: { date: Date }) => {
    const thisMonth = isThisMonth(date);
    const isTodayDate = isToday(date);
    console.log(isTodayDate, date);

    return (
        <StyledCell $isThisMonth={thisMonth} $isTodayDate={isTodayDate}>
            <div className='cell-header'>
                <div className='date'>
                    {format(date, 'MMM do')}
                </div>
                <div>

                </div>
            </div>
        </StyledCell>
    );
};
