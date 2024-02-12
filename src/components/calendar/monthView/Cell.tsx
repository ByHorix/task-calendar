import styled from "styled-components";
import {isSameMonth, isThisMonth, isToday} from "date-fns";
import {colorConfig} from "../../../configs/colorConfig";
import {format} from "date-fns";
import {useAppSelector} from "../../../hooks/useRedux";

const StyledCell = styled.div<{
    $isCurrentMonth: boolean,
    $isTodayDate: boolean
}>`
  width: calc(100% / 7);
  min-height: calc(100% / 5.5) !important;
  flex-basis: calc(100% / 7 - 10px);
  margin-bottom: 10px;
  background-color: ${(props) => props.$isCurrentMonth ? colorConfig.bgThird : colorConfig.bgPrimary};
  opacity: ${(props) => props.$isCurrentMonth ? 1 : 0.7};
  border: ${(props) => props.$isTodayDate ? colorConfig.colorSecondary : colorConfig.colorPrimary} 2px solid;
  border-radius: 5px;
  padding: 10px;
  box-sizing: border-box;
  font-size: 0.8em;
  
  & > .cell-header {
    & > .date {
      color: ${(props) => props.$isTodayDate ? colorConfig.colorSecondary : colorConfig.colorPrimary};
      font-weight: ${(props) => props.$isCurrentMonth ? 700 : 400};
    }
  }
`

export const Cell = ({date}: { date: Date }) => {
    const currentDate = useAppSelector(state => state.layout.currentDate)

    const isCurrentMonth = isSameMonth(date, currentDate);
    const isTodayDate = isToday(date);

    return (
        <StyledCell $isCurrentMonth={isCurrentMonth} $isTodayDate={isTodayDate}>
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
