"use client";

import styles from "./SidePanel.module.css";

import { useState, useEffect } from "react";

import { useSwipeable } from "react-swipeable";

export default function SidePanel({ children, position }) {
    const [panelFocused, setPanelFocused] = useState('');

    // TODO - remove repetition of the swipable code here and TopPanel

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

    const determineHiddenToggleVisibility = () => {
        let hidden = false;
        if(panelFocused !== '' && panelFocused !== 'bottom'){
            hidden = true;
        }

        return hidden;
    }

    const sidePanelStyles = `
        ${styles.SidePanel}  
        ${panelFocused === position ? styles.ExpandedPanel : ''}   
        ${position === 'left' ? styles.leftPanel : styles.rightPanel}
    `;
    const mobileToggleIndicator = `
        ${styles.mobileToggle}
        ${ position === 'left' ? styles.leftToggle : styles.rightToggle}
        ${determineHiddenToggleVisibility() ? styles.hiddenToggle : ''}
    `;

    return (
        <div className={sidePanelStyles}>
            {children}
            <div className={mobileToggleIndicator}>
                {position === 'left' ? 'Crew' : 'Location'}
            </div>
        </div>
    ); 
}