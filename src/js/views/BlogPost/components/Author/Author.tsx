import React from 'react'
import styles from './Author.module.css'
import { BrowserIcon, GithubIcon, LinkedinIcon } from '@common/icons'

interface AuthorProps {
  name: string
  role: string
  avatar: string
  github: string
  linkedIn: string
  webAddress: string
}
export const Author: React.FC<AuthorProps> = ({
  name,
  role = 'Fullstack developer at Merge',
  avatar,
  github,
  linkedIn,
  webAddress,
}) => {
  return (
    <figure className={styles['author-box']}>
      <img
        className={styles['author__avatar']}
        alt={'Blog post author ' + name}
        src={avatar}
        width={90}
        height={90}
        loading='lazy'
      />
      <figcaption className={styles['author__desc']}>
        <h2 className={styles['author__desc--title']}>{name}</h2>
        <p className={styles['author__desc--role']}>{role}</p>
        <div className={styles['author__desc--icons']}>
          <a
            href={github}
            aria-label={'Github of ' + name}
            rel='noopener noreferrer'
            target='_blank'
          >
            <GithubIcon color='#2a3342' width='30' height='30' />
          </a>
          <a
            href={webAddress}
            aria-label={'Portfolio of ' + name}
            rel='noopener noreferrer'
            target='_blank'
          >
            <BrowserIcon color='#2a3342' width='30' height='30' />
          </a>
          <a
            href={linkedIn}
            aria-label={'Linkedin of ' + name}
            rel='noopener noreferrer'
            target='_blank'
          >
            <LinkedinIcon color='#2a3342' width='30' height='30' />
          </a>
        </div>
      </figcaption>
    </figure>
  )
}
