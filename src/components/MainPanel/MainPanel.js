"use client";

import styles from "./MainPanel.module.css";

import { useState, useEffect } from "react";

import { useSwipeable } from "react-swipeable";

import SidePanel from "../SidePanel/SidePanel";
import TopPanel from "../TopPanel/TopPanel";
import BottomPanel from "../BottomPanel/BottomPanel";

import CrewList from "../CrewList/CrewList";
import CelestialBodyDetails from "../CelestialBodyDetails/CelestialBodyDetails";
import Form from "../Form/Form";
import ShipPanel from "../ShipPanel/ShipPanel";
import ShipOverview from "../ShipOverview/ShipOverview";

import { KeywordContext } from "../../context/KeywordContext";

export default function MainPanel({data, children}) {
    const [panelFocused, setPanelFocused] = useState('');
    const [selectedSubsystem, setSelectedSubsystem] = useState('');

    const [keyword, setKeyword] = useState("");
    const keywordFromContext = { keyword, setKeyword };

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
    
    const focusPanel = (positionToFocus) => {
        setPanelFocused(positionToFocus);
    }

    const selectSubSystem = (id) => {
        setSelectedSubsystem(id);
        focusedPanel('top');
    }

    return (
        <KeywordContext.Provider value={keywordFromContext}>
            <div className={styles.mainContainer}>
                <TopPanel panelFocused={panelFocused} focusPanel={focusPanel}>
                    <ShipOverview subsystems={data.subsystems} preselectedSubsystem={selectedSubsystem}/>
                </TopPanel>
                <SidePanel position='left' panelFocused={panelFocused} focusPanel={focusPanel}>
                    <CrewList crewMembers={data.crewMembers}/>
                </SidePanel>
                <ShipPanel subsystems={data.subsystems} selectSubSystem={selectSubSystem}/>

                {children}

                <BottomPanel>
                    <Form/>
                </BottomPanel>

                <SidePanel position='right' panelFocused={panelFocused} focusPanel={focusPanel}>
                    <CelestialBodyDetails/>
                </SidePanel>
            </div>
        </KeywordContext.Provider>
    );
}