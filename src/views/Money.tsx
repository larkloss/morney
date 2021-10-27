import Layout from '../components/Layout';
import React from 'react';
import {TagsSection} from "./Money/TagsSection";
import {NotesSection} from "./Money/NotesSection";
import {CategorySection} from "./Money/CategorySection";
import {NumberPadSection} from "./Money/NumberPadSection";
import styled from "styled-components";


const MyLayout = styled(Layout)`
  display:flex;
  flex-direction: column;
`

function Money() {
    return (
        <MyLayout>
            <TagsSection/>
            <NotesSection/>
            <CategorySection></CategorySection>
            <NumberPadSection></NumberPadSection>
        </MyLayout>
    );
}

export default Money;