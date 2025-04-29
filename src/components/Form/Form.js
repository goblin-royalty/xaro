'use client';

import styles from "./Form.module.css";

import { useState, useEffect } from "react";

import FormInput from "../FormInput/FormInput";
import FormResults from "../FormResults/FormResults";

export default function Form() {
    const [keyword, setKeyword] = useState('');
    const [searchResults, setSearchResults] = useState([]);

    useEffect(() => {
        async function getSearchResults (keyword) {
            const response = await fetch('/api/search', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({ keyword })
            });
            const response_data = await response.json();
            setSearchResults(response_data);
        }
        if(keyword.length) {
            getSearchResults(keyword);
        }
    }, [keyword]);
    
    return (
        <div>
            <FormResults results={searchResults}/>
            <FormInput setKeyword={setKeyword}/>
        </div>
    );
}