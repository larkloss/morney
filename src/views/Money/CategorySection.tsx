import styled from 'styled-components';
import React, {useState} from "react";

const CategoryWrapper = styled.section`
  font-size: 24px;
  > ul{
    display:flex;
    background:#c4c4c4;
    > li {
      width: 50%;
      text-align:center;
      padding: 16px 0;
      position:relative;
      &.selected::after{
        content: '';
        display:block;
        height: 3px;
        background:#333;
        position:absolute;
        bottom:0;
        width: 100%;
        left: 0;
      }
    }
  }
`;

type Props = {
    value: '-' | '+',
    onChange: (value: '-' | '+') => void;
}

const CategorySection:React.FC<Props> = (props) => {
    const categoryMap = {'-':'支出', '+':'收入'}
    const [categoryList] = useState<('-' | '+')[]>(['-', '+'])
    const category = props.value
    return (
        <CategoryWrapper>
            <ul>
                {
                    categoryList.map(o =>
                        <li key={o}
                            className={category === o ? 'selected' :''}
                            onClick={() => {props.onChange(o)}}>
                            {categoryMap[o]}
                        </li>)
                }
            </ul>
        </CategoryWrapper>
    )
}

export {CategorySection}