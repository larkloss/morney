import React from 'react';
import {useTags} from '../hooks/useTags';
import {useParams} from 'react-router-dom';
import Layout from "../components/Layout";
import Icon from "../components/Icon";
import styled from "styled-components";
import {Button} from "../components/Button";
import {Input} from "../components/Input";

type Params = {
    id: string
}

const Toolbar = styled.header`
  display:flex;
  justify-content: space-between;
  align-items: center;
  line-height: 20px;
  padding: 14px;
  background:white;
`;
const InputWrapper = styled.div`
  background:white;
  padding: 0 16px;
  margin-top: 8px;
`;

const Tag: React.FC = (props) => {
    const {findTag, updateTag, deleteTag} = useTags();
    let {id: idString} = useParams<Params>();
    const tag = findTag(parseInt(idString));
    return (
        <Layout>
            <Toolbar>
                <Icon name="back"/>
                <span>编辑标签</span>
                <Icon name="forward"/>
            </Toolbar>
            <div>
                <InputWrapper>
                    <Input label="标签名" type="text" placeholder="标签名"
                           value={tag.name}
                           onChange={(e) => {
                               updateTag(tag.id, {name: e.target.value});
                           }}
                    />
                </InputWrapper>
            </div>
            <div>
                <Button onClick={() => deleteTag(tag.id)}>删除标签</Button>
            </div>
        </Layout>
    );
};

export {Tag};