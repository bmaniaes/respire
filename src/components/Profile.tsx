import { useContext } from 'react';
import { ChallengesContext } from '../contexts/Challenges.Context';

import styles from '../styles/components/Profile.module.css';

export function Profile() {
    const { level } = useContext(ChallengesContext)

    return (
        <div className={styles.profileContainer}>
            <img src="https://github.com/bmaniaes.png" alt="Breno Maniaes" />
            <div>
                <strong>Breno Maniaes</strong>
                <p>
                    <img src="icons/level.svg" alt="Level" />
                    Level { level }
                </p>
            </div>
        </div>
    );
}