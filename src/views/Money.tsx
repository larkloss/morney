import Layout from '../components/Layout';
import React, {useState} from 'react';
import {TagsSection} from "./Money/TagsSection";
import {NotesSection} from "./Money/NotesSection";
import {CategorySection} from "./Money/CategorySection";
import {NumberPadSection} from "./Money/NumberPadSection";
import styled from "styled-components";


const MyLayout = styled(Layout)`
  display:flex;
  flex-direction: column;
`
type Category = '-' | '+'

function Money() {
    const [selected, setSelected] = useState({
        tags:[] as string[],
        note:'',
        category:'-' as Category,
        amount: 0
    })

    const onChange = (obj: Partial<typeof selected>) => {
        setSelected({
            ...selected,
            ...obj
        })
    }

    return (
        <MyLayout>
            {selected.tags.join(',')}
            <TagsSection value={selected.tags}
                         onChange={tags => onChange({tags})}/>
            <NotesSection value={selected.note}
                         onChange={note => onChange({note})}/>
            <CategorySection value={selected.category}
                             onChange={category => onChange({category})}/>
            <NumberPadSection value={selected.amount}
                              onChange={amount => onChange({amount})}
                              onOk={() => {}}
            />
        </MyLayout>
    );
}

export default Money;