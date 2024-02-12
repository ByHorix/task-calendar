import {useAppDispatch, useAppSelector} from "../../../../hooks/useRedux";
import styled from "styled-components";
import {colorConfig} from "../../../../configs/colorConfig";

import arrow from '../../../../img/right-arrow.png';
import {setMonthToNext, setMonthToPrev, setWeekToNext, setWeekToPrev} from "../../store";

const arrowPositions = {
    week: {
        left: 180,
        right: 0
    },
    month: {
        left: 90,
        right: -90
    }
}

const ArrowsBlockStyled = styled.div`
  display: flex;
  
`

const ArrowWrapperStyled = styled.div<{ $view: 'week' | 'month' }>`
  border: ${colorConfig.colorThird} 2px solid;
  padding: 10px;
  background-color: ${colorConfig.bgThird};
  
  & > img {
    width: 1em;
    height: 1em;
    transition: all 0.3s;
  }
  
  &:hover {
    background-color: ${colorConfig.bgPrimary};
  }
  
  &.left {
    border-radius: 10px 0 0 10px;
    border-right-width: 1px;
    & > img {
      transform: rotateZ(${(props) => arrowPositions[props.$view].left}deg);
    }
  }
  
  &.right {
    border-radius: 0 10px 10px 0;
    border-left-width: 1px;
    & > img {
      transform: rotateZ(${(props) => arrowPositions[props.$view].right}deg);
    }
  }
`

export const PeriodSwitcher = () => {
    const view = useAppSelector(state => state.layout.view);
    const dispatch = useAppDispatch();

    const dispatchActions = {
        week: {
            left: setWeekToPrev,
            right: setWeekToNext
        },
        month: {
            left: setMonthToPrev,
            right: setMonthToNext
        }
    }

    const handleClickArrow = (direct: 'left' | 'right') => {
        dispatch(dispatchActions[view][direct]())
    }

    return (
        <ArrowsBlockStyled>
            <ArrowWrapperStyled className='left' $view={view} onClick={() => handleClickArrow('left')}>
                <img src={arrow} alt='arrow'/>
            </ArrowWrapperStyled>
            <ArrowWrapperStyled className='right' $view={view} onClick={() => handleClickArrow('right')}>
                <img src={arrow} alt='arrow'/>
            </ArrowWrapperStyled>
        </ArrowsBlockStyled>
    )
}
