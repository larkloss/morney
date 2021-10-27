import styled from 'styled-components';
import React, {useState} from "react";

const TagsWrapper = styled.section`
  background: #FFFFFF; padding: 12px 16px;
  flex-grow: 1; display:flex; flex-direction: column;
  justify-content: flex-end; align-items: flex-start;
  > ol { margin: 0 -12px;
    > li{
       background: #D9D9D9; border-radius: 18px;
       display:inline-block; padding: 3px 18px; 
       font-size: 14px; margin: 8px 12px;
    }
  }
  > button{
    background:none; border: none; padding: 2px 4px;
    border-bottom: 1px solid #333; color: #666;
    margin-top: 8px;
  }
`;




const TagsSection: React.FC = (props) => {
    const [tags, setTags] = useState<string[]>(['衣','食','住','行'])
    const [selectTags, setSelectTags] = useState<string[]>([])
    const onAddTag = () => {
        const tagName = window.prompt('新的标签名称为：')
        if (tagName !== null) {
            setTags([...tags, tagName])
        }
    }
    const onToggleTag = (tag:string) => {
        const index = selectTags.indexOf(tag)
        if (index >= 0) {
            setSelectTags((selectTags.filter(t => t !== tag)))
        } else {
            setSelectTags([...selectTags, tag])
        }
    }
    const getClass= (tag :string) => (
        selectTags.indexOf(tag) >= 0 ? 'Selected' : 'unSelected'
    )
    return (
        <TagsWrapper>
            <ol>
                {tags.map(tag =>
                    <li key ={tag}
                        onClick={() => {onToggleTag(tag)}} className={getClass(tag)}>
                    {tags}</li>
                )}
            </ol>
            <button onClick={onAddTag} >新增标签</button>
        </TagsWrapper>
    )
}

export {TagsSection}