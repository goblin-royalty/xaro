'use client'

import styles from "./ShipRecordCreator.module.css";

import { useState } from "react";
import { redirect } from "next/navigation";

import Button from "../Button/Button";

export default function ShipRecordCreator({ predefinedData = {}}) {
    const editMode = predefinedData.hasOwnProperty('title') && predefinedData.hasOwnProperty('text');

    const [title, setTitle] = useState(predefinedData.hasOwnProperty('title') > 0 ? predefinedData.title : '');
    const [data, setData] = useState(predefinedData.hasOwnProperty('text') > 0 ? predefinedData.text : '');
    const [inputDisabled, setInputDisabled] = useState(false);
    const [created, setCreated] = useState(false);
    const [titleHighlighted, setTitleHighlighted] = useState(false);
    const [dataHighlighted, setDataHighlighted] = useState(false);
    const [createButtonText, setCreateButtonText] = useState(editMode ? 'Update' : 'Create');

    const handleTitleChange = (event) => {
        setTitle(event.target.value);
    };
    const handleDataChange = (event) => {
        setData(event.target.value);
    };
    
    const createNewRecord = () => {
        if(fieldsAreValid()) {
            setInputDisabled(true);
            editMode ? updateRecord() : createRecord();
        }
    };

    const createRecord = () => {
        setCreateButtonText('Creating');
        fetch('/api/create', {
            method: 'POST',
            headers: {'Content-Type': 'application/json'},
            body: JSON.stringify({
                title: title,
                text: data
            })
        })
        .then(() => {
            resetAndCompleteForm();
            setCreateButtonText('Create');
        });
    }

    const updateRecord = () => {
        setCreateButtonText('Updating');
        fetch('/api/edit', {
            method: 'PUT',
            headers: {'Content-Type': 'application/json'},
            body: JSON.stringify({
                id: predefinedData.id,
                title: title,
                text: data
            })
        })
        .then(() => {
            redirect(`/ship_record/${predefinedData.id}`);
        });
    }

    const resetAndCompleteForm = () => {
        setTitle('');
        setData('');
        setInputDisabled(false);
        showCreatedMessage();
    }

    const fieldsAreValid = () => {
        let titleValid = false;
        let dataValid = false;
        
        if(title.trim().length > 2) {
            titleValid = true;
            setTitleHighlighted(false);
        } else {
            setTitleHighlighted(true);
        }

        if(data.trim().length > 2) {
            dataValid = true;
            setDataHighlighted(false);
        } else {
            setDataHighlighted(true);
        }

        return titleValid & dataValid;
    }

    const showCreatedMessage = () => {
        setCreated(true);
        setTimeout(() => {
            setCreated(false);
        }, 1000);
    }
    const creationResultClass = created ? `${styles.createdMessageVisible} ${styles.createdMessage}` : styles.createdMessage;

    return (
        <div className={styles.mainContainer}>
            <h2>{editMode ? 'Edit record' : 'Add record to X\'aro'}</h2>
            <div className={styles.creatorContainer}>
                <input
                    type="text"
                    value={title}
                    placeholder="Title"
                    onChange={handleTitleChange}
                    className={titleHighlighted ? `${styles.formInputText} ${styles.formFieldInvalid}` : styles.formInputText}
                    disabled={inputDisabled}
                />
                <textarea placeholder="Data"
                    onChange={handleDataChange}
                    className={dataHighlighted ? `${styles.formTextArea} ${styles.formFieldInvalid}` : styles.formTextArea}
                    value={data}
                    rows={10}
                    disabled={inputDisabled}
                >
                </textarea>
            </div>
            <div className={styles.buttonsContainer}>
                <Button text={`Back`}/>
                <Button type={'onclick'} action={createNewRecord} text={createButtonText}/>
            </div>
            <div className={creationResultClass}>{editMode ? 'Record changed' : 'Record added'}</div>
        </div>
    );
}