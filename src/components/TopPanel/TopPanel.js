"use client";

import styles from "./TopPanel.module.css";

import { useSwipeable } from "react-swipeable";

import Button from "../Button/Button";

export default function TopPanel({children, panelFocused, focusPanel}) {
    const swipeTopHandlers = useSwipeable({
        onSwipedDown: () => {
            focusPanel('top');
        },
        preventDefaultTouchmoveEvent: true,
    });

    const swipeBottomHandlers = useSwipeable({
        onSwipedUp: () => {
            focusPanel('');
        },
        preventDefaultTouchmoveEvent: true,
    });

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

    // Position that would hide the panel
    const unfocusPanel = () => {
        focusPanel('');
    }

    return (
        <>
            <div className={topPanelStyles} >
                {children}
                <Button type={'onclick'} action={unfocusPanel} text={'<'}/>
            </div>
            <div className={styles.TopSwipableArea} {...swipeTopHandlers}></div>
            <div className={styles.BottomSwipableArea} {...swipeBottomHandlers}></div>
        </>
    );
}