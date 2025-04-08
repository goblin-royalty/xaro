import styles from "./SidePanel.module.css";
import { useState } from "react";

export default function SidePanel({ children, position, focused }) {
    const [expanded, setExpanded] = useState(false);

    const toggleExpanded = () => {
        setExpanded(!expanded);
    };

    const createExpansionStyles = () => {
        let expandedStyles = '';
        if(expanded || (focused === position)){
            expandedStyles = styles.ExpandedPanel;
        }

        return expandedStyles;
    }

    const expandedStyle = createExpansionStyles();
   
    const sidePanelStyles = `
        ${styles.SidePanel}  
        ${expandedStyle}   
        ${position === 'left' ? styles.leftPanel : styles.rightPanel}
    `;

    const mobileToggle = `
        ${styles.mobileToggle}
        ${ position === 'left' ? styles.leftToggle : styles.rightToggle}
    `;

    return (
        <div className={sidePanelStyles}>
        {children}
        <div className={styles.backgroundTexture}></div>
        <div className={mobileToggle} onClick={() => {toggleExpanded();}}>
            {position === 'left' ? 'Crew' : 'Orbit'}
        </div>
        </div>
    ); 
}