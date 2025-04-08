import styles from "./TopPanel.module.css";

export default function TopPanel({children, focused}) {

    const createExpansionStyles = () => {
        let expandedStyles = '';
        if(focused === 'top'){
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
            <div className={styles.backgroundTexture}></div>
        </div>
    );
}