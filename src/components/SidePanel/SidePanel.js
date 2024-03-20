import styles from "./SidePanel.module.css";
import { useState } from "react";

export default function SidePanel({ children, position }) {
  const [expanded, setExpanded] = useState(false);

  const toggleExpanded = () => {
    setExpanded(!expanded);
  };

    return (
      <div
        className={`${styles.SidePanel}  ${
          expanded ? styles.ExpandedPanel  : ""
        }
        ${
          position === 'left' ?
          styles.leftPanel :
          styles.rightPanel
        }
      `}
      >
        {children}
        <div className={styles.backgroundTexture}></div>

        <div
          className={`${styles.mobileToggle} 
          ${ position === 'left' ?
          styles.leftToggle : 
          styles.rightToggle
        }
        `}
          onClick={() => {
            toggleExpanded();
          }}
        >
         {position === 'left' ? 'Crew' : 'Orbit'}
        </div>
      </div>
    ); 
  }