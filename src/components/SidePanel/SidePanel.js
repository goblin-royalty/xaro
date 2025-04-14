import styles from "./SidePanel.module.css";
import { useState } from "react";

export default function SidePanel({ children, position, focused }) {
    const [expanded, setExpanded] = useState(false);

    const toggleExpanded = () => {
        setExpanded(!expanded);
    };

    const sidePanelStyles = `
        ${styles.SidePanel}  
        ${expanded || (focused === position) ? styles.ExpandedPanel : ''}   
        ${position === 'left' ? styles.leftPanel : styles.rightPanel}
    `;
    console.log(focused !== '')
    const mobileToggle = `
        ${styles.mobileToggle}
        ${ position === 'left' ? styles.leftToggle : styles.rightToggle}
        ${(focused !== '') ? styles.hiddenToggle : ''}
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