import styled from 'styled-components';
import {colorConfig} from "../../../configs/colorConfig";
import {CurrentPeriod} from "./ViewControllers/CurrentPeriod";
import {MonthWeekSwitcher} from "./ViewControllers/MonthWeekSwitcher";

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
    return (
        <StyledHeader>
            <CurrentPeriod currentPeriod={'Month'}/>
            <MonthWeekSwitcher/>
        </StyledHeader>
    );
};
