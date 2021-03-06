import React, { useState, useEffect } from 'react'
import styled from 'styled-components'
import Button from '../../atoms/Button'
import BaseModal from '../../molecules/BaseModal'
import { darken } from 'polished'
import { Note } from '../../../store/notes/types'


interface AddNoteProps {
    open: boolean;
    onClose: () => void;
    onAddNote: (note: Note) => void;

}




const AddNoteModal: React.FC<AddNoteProps> = ({ open, onClose, onAddNote }) => {
    const [content, setContent] = useState('')
    const [title, setTitle] = useState('')

    const handleOnNoteChange: React.ChangeEventHandler<HTMLTextAreaElement> = (event) => {
        setContent(event.target.value)
    }

    const handleOnTitleChange: React.ChangeEventHandler<HTMLInputElement> = (event) => {
        setTitle(event.target.value)
    }

    const handleAddNote = () => {
        onAddNote({ content, title })
    }

    useEffect(() => {
        if (open) {
            setContent('')
            setTitle('')
        }
    }, [open])
    return (
        <BaseModal open={open} onClose={onClose}>
            <Input placeholder="Título..." value={title} onChange={handleOnTitleChange} />
            <Textarea placeholder="Nota..." onChange={handleOnNoteChange} value={content} />
            <AddNoteButton onClick={handleAddNote}>adicionar nota</AddNoteButton>

        </BaseModal>)
}


export default AddNoteModal

const Input = styled.input`
  width: 100%;
 padding: 15px 5px 5px 5px;
border: none;
font-size: 1.5em;
resize: none;

&:focus {
    outline: none
}
 `


const Textarea = styled.textarea`
 width: 100%;
 padding: 10px;
border: none;
font-size: 1.5em;
resize: none;
flex-grow: 1;

&:focus {
    outline: none
}

`
const AddNoteButton = styled(Button)`
 background-color: ${props => props.theme.colors.success};

 &:hover {
    background-color: ${props => darken(0.2, props.theme.colors.success)};
}
`