"use client";

import styles from "./TopPanel.module.css";

import { useState, useEffect } from "react";

import { useSwipeable } from "react-swipeable";

export default function TopPanel({children}) {
    const [panelFocused, setPanelFocused] = useState('');

    // TODO - remove repetition of the swipable code here and SidePanel

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

    const createExpansionStyles = () => {
        let expandedStyles = '';
        if(panelFocused === 'top'){
            expandedStyles = styles.expandedTopPanel;
        }

        return expandedStyles;
    }
    
    const expandedStyle = createExpansionStyles();

    const topPanelStyles = `
            ${styles.TopPanel}  
            ${expandedStyle}   
    `;

    return (
        <div className={topPanelStyles}>
            {children}
        </div>
    );
}