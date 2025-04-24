"use client";

import styles from "./BottomPanel.module.css";

import { useState, useEffect } from "react";

import { useSwipeable } from "react-swipeable";

export default function BottomPanel({children}) {
    // const [xaroInput, setXaroInput] = useState('');
    const [searchResults, setSearchResults] = useState([]);
    const [panelFocused, setPanelFocused] = useState('');

    // attach swipeable to document
    useEffect(() => {
        documentRef(document);
        // Clean up swipeable event listeners
        return () => documentRef({});
    });

    const { ref: documentRef } = useSwipeable({
        onSwipedDown: () => {
            focusedPanel('top');
        },
        onSwipedUp: () => {
            focusedPanel('bottom');
        },
        onSwipedLeft: () => {
            focusedPanel('right');       
        },
        onSwipedRight: () => {
            focusedPanel('left');
        },
        preventDefaultTouchmoveEvent: true,
    });

    const focusedPanel = (position) => {
        if (panelFocused !== '' && panelFocused !== position) {
            // if one side panel is focused as we swipe to the other side this stop the opposite panel from being focused
            setPanelFocused('');
        }
        else {
            setPanelFocused(position)
        }
    }
    const containerStyles = `
        ${styles.askXaroContainer}
        ${panelFocused === 'bottom' ? styles.xaroExpandedContainer : ''}
    `;

    return (
        <div className={containerStyles}>
            {children}
            <div className={styles.xaroCube}></div>
        </div>
    );
}