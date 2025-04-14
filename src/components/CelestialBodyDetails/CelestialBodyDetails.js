import styles from "./CelestialBodyDetails.module.css";

import temp_data from '../../data/data.json';

export default function CelestialBodyDetails({currentCelestialBody, changePlanet}) {
    const title = currentCelestialBody ? temp_data.planets[currentCelestialBody].designation : 'Current location';
    const displayedCelestialBodyDetails = currentCelestialBody ? temp_data.planets[currentCelestialBody] : temp_data.planets.current;

    return (
        <div className={styles.planetInfo}>
            <h2 className={styles.title}>{title}</h2>
            <p>Name: <span>{displayedCelestialBodyDetails.designation}</span></p>
            <p>Radius: <span>{displayedCelestialBodyDetails.radius}</span></p>
            <p>Natural satellites: <span>{displayedCelestialBodyDetails.natural_satellites}</span></p>
            <p>Artificial satellites: <span>{displayedCelestialBodyDetails.artificial_satellites}</span></p>
            <p>Average temperature: <span>{displayedCelestialBodyDetails.average_temperature}</span></p>
            <p>Ground composition: <span>{displayedCelestialBodyDetails.planet_composition}</span></p>
            <p>Atmospheric composition: <span>{displayedCelestialBodyDetails.atmospheric_composition}</span></p>
            <p>Life signs: <span>{displayedCelestialBodyDetails.life_signs}</span></p>
            <p>Urbanization: <span>{displayedCelestialBodyDetails.urbanization}</span></p>
            <p>Valuable resources: <span className={styles.valuableResource}>{displayedCelestialBodyDetails.valuable_resources}</span></p>
            <div className={styles.backgroundTexture}></div>
        </div>
    );
}