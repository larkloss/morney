import styled from 'styled-components';
import {useState} from "react";

const NotesWrapper = styled.section`
  background: #f5f5f5;
  padding: 0 16px;
  font-size: 14px;
  > label {
    display:flex;
    align-items: center;
    > span { margin-right: 16px; white-space: nowrap; }
    > input {
      display:block;
      width: 100%;
      height: 72px;
      background: none;
      border: none;
    }
  }
`;

const NotesSection = () => {
    const [note, setNote] = useState('')
    return (
        <NotesWrapper>
            <label>
                <span>备注</span>
                <input type="text" placeholder="在这里添加备注"
                       value={note}
                       onChange={(e) => (e.target.value)}/>
            </label>
        </NotesWrapper>
    )
}

export {NotesSection}