import {HeaderItemStyled} from "../HeaderItemStyled";
import styled from "styled-components";
import {colorConfig} from "../../../../configs/colorConfig";
import {SyntheticEvent, useState} from "react";

export const MonthWeekSwitcher = () => {
    const [period, setPeriod] = useState('month');

    const handleSwitch = (e: SyntheticEvent, newPeriod: 'month' | 'week') => {
        e.preventDefault();

        if (period !== newPeriod) {
            setPeriod(newPeriod);
        }
    }

    return (
        <HeaderItemStyled>
            <StyledSwitcherButton onClick={(e) => handleSwitch(e, 'month')} active={period === 'month'}>Month</StyledSwitcherButton>
            <StyledSwitcherButton onClick={(e) => handleSwitch(e, 'week')} active={period === 'week'}>Week</StyledSwitcherButton>
        </HeaderItemStyled>
    );
};

const StyledSwitcherButton = styled.button<{active?: boolean}>`
  padding: 10px;
  background-color: ${(props) => props.active ? colorConfig.bgThird : 'none'};
  transition: all 0.2s;
  border: ${colorConfig.colorThird} 2px solid;
  opacity: ${(props) => props.active ? 1 : 0.8};
  
  &:nth-child(1) {
    border-right-width: 1px;
    border-radius: 10px 0 0 10px;
  }
  
  &:nth-child(2) {
    border-left-width: 1px;
    border-radius: 0 10px 10px 0;
  }
  
  &:hover {
    background-color: ${colorConfig.bgPrimary};
    opacity: 1;
  }
`
