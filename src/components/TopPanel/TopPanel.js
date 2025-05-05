"use client";

import styles from "./TopPanel.module.css";

import Button from "../Button/Button";

export default function TopPanel({children, panelFocused, focusPanel}) {

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
        <div className={topPanelStyles}>
            {children}
            <Button type={'onclick'} action={unfocusPanel} text={'<'}/>
        </div>
    );
}