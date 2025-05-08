'use client';

import styles from "./Form.module.css";

import { useState, useEffect, useContext } from "react";

import FormInput from "../FormInput/FormInput";
import FormResults from "../FormResults/FormResults";

import { KeywordContext } from "../../context/KeywordContext";

export default function Form() {
    const [searchResults, setSearchResults] = useState([]);

    const { keyword, setKeyword } = useContext(KeywordContext);

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
            <FormInput keyword={keyword} setKeyword={setKeyword}/>
        </div>
    );
}