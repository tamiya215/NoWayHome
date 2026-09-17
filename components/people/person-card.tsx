import Image from "next/image";
import type { Person } from "@/content/people";
import styles from "./person-card.module.css";

export function PersonCard({ person }: { person: Person }) {
  return (
    <article className={styles.profile} aria-labelledby={`${person.id}-name`}>
      <div className={styles.identity}>
        {person.portrait && (
          <Image className={styles.portrait} src={person.portrait.src} alt={person.portrait.alt}
            width={480} height={600} sizes="(max-width: 700px) 160px, 240px" />
        )}
        <h3 id={`${person.id}-name`} className={styles.name}>{person.name}</h3>
        <p className={styles.position} lang="en">{person.position}</p>
        {person.instagram?.trim() && (
          <a className={styles.instagram} href={person.instagram.trim()} target="_blank"
            rel="noopener noreferrer" lang="en" aria-label="Instagram (opens in a new tab)">
            INSTAGRAM <span aria-hidden="true">↗</span>
          </a>
        )}
      </div>
      <div className={styles.details}>
        <div className={styles.biography}>
          {person.biography.map((paragraph) => <p key={paragraph}>{paragraph}</p>)}
        </div>
        <div className={styles.interests} lang="en">
          <h4>Research Interests</h4>
          <ul>{person.researchInterests.map((interest) => <li key={interest}>{interest}</li>)}</ul>
        </div>
      </div>
    </article>
  );
}
