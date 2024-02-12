import styled from 'styled-components';
import {colorConfig} from "../../../configs/colorConfig";
import {CurrentPeriod} from "./ViewControllers/CurrentPeriod";
import {MonthWeekSwitcher} from "./ViewControllers/MonthWeekSwitcher";
import {useAppSelector} from "../../../hooks/useRedux";
import {endOfWeek, format, startOfWeek} from "date-fns";
import {PeriodSwitcher} from "./ViewControllers/PeriodSwitcher";

const StyledHeader = styled.header`
  background-color: ${colorConfig.bgSecondary};
  width: 100%;
  padding: 20px;
  display: flex;
  justify-content: space-between;
  border-bottom: ${colorConfig.colorPrimary} 2px solid;
  box-sizing: border-box;
`

export const Header = () => {
    const store = useAppSelector(state => state.layout)
    const period = store.view === 'month' ? format(store.currentDate, 'yyyy MMMM') : `${format(store.currentDate, 'MMM')} ${format(startOfWeek(store.currentDate), 'do')} - ${format(endOfWeek(store.currentDate), 'do')}`

    return (
        <StyledHeader>
            <PeriodSwitcher/>
            <CurrentPeriod currentPeriod={period}/>
            <MonthWeekSwitcher/>
        </StyledHeader>
    );
};
