import styled from "styled-components";
import {HeaderItemStyled} from "../HeaderItemStyled";
import {colorConfig} from "../../../../configs/colorConfig";

const CurrentPeriodStyled = styled(HeaderItemStyled)`
  border-bottom: ${colorConfig.colorThird} 1px solid;
  background-color: ${colorConfig.bgThird};
  padding: 10px 20px;
`

export const CurrentPeriod = ({currentPeriod}: { currentPeriod: string }) => {
    return (
        <CurrentPeriodStyled>
            {currentPeriod}
        </CurrentPeriodStyled>
    );
};