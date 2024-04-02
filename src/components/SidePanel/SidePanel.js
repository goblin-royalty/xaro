import styles from "./SidePanel.module.css";
import { useState } from "react";

export default function SidePanel({ children, position, focused }) {
  const [expanded, setExpanded] = useState(false);

  const toggleExpanded = () => {
    setExpanded(!expanded);
  };

  const sidePanelsAndExpanded = `
   ${styles.SidePanel}  
   ${expanded ? styles.ExpandedPanel : ""} 
   ${position === 'left' ? styles.leftPanel : styles.rightPanel}
   ${focused === 'left' ? styles.focusedLeftPanel : styles.focusedRightPanel}
  `;

  const mobileToggle = `
    ${styles.mobileToggle}
    ${ position === 'left' ? styles.leftToggle : styles.rightToggle}
  `;

  return (
    <div className={sidePanelsAndExpanded}>
      {children}
      <div className={styles.backgroundTexture}></div>
      <div className={mobileToggle} onClick={() => {toggleExpanded();}}>
        {position === 'left' ? 'Crew' : 'Orbit'}
      </div>
    </div>
  ); 
}