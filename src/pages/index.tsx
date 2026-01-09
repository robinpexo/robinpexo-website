import type {ReactNode} from 'react';
import clsx from 'clsx';
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import Layout from '@theme/Layout';
import Heading from '@theme/Heading';

import styles from './index.module.css';

const socialLinks = [
  {
    label: 'YouTube',
    href: '#',
    icon: '/img/social/youtube.svg',
  },
  {
    label: 'Instagram',
    href: '#',
    icon: '/img/social/instagram.svg',
  },
  {
    label: 'TikTok',
    href: '#',
    icon: '/img/social/tiktok.svg',
  },
  {
    label: 'X',
    href: '#',
    icon: '/img/social/x.svg',
  },
  {
    label: 'Threads',
    href: '#',
    icon: '/img/social/threads.svg',
  },
  {
    label: 'Facebook',
    href: '#',
    icon: '/img/social/facebook.svg',
  },
  {
    label: 'GitHub',
    href: '#',
    icon: '/img/social/github.svg',
  },
];

const projects = [
  {
    title: 'Project One',
    description:
      'Sample description for your first project. Replace with your real story later.',
    logo: '/img/docusaurus.png',
    links: [
      {label: 'Website', href: '#'},
      {label: 'App Store', href: '#', kind: 'appstore'},
    ],
  },
  {
    title: 'Project Two',
    description:
      'Sample description for your second project. Highlight the impact and audience.',
    logo: '/img/undraw_docusaurus_react.svg',
    links: [
      {label: 'Website', href: '#'},
      {label: 'Google Play', href: '#', kind: 'playstore'},
    ],
  },
  {
    title: 'Project Three',
    description:
      'Sample description for your third project. Keep it short and inviting.',
    logo: '/img/undraw_docusaurus_mountain.svg',
    links: [{label: 'Website', href: '#'}],
  },
];

function HomepageHeader() {
  const {siteConfig} = useDocusaurusContext();
  return (
    <header className={clsx('hero hero--primary', styles.heroBanner)}>
      <div className="container">
        <Heading as="h1" className="hero__title">
          Robin Pexo
        </Heading>
        <p className="hero__subtitle">{siteConfig.tagline}</p>
        <div className={styles.buttons}>
          <Link
            className="button button--secondary button--lg"
            to="/docs/intro">
            Docusaurus Tutorial - 5min ⏱️
          </Link>
        </div>
      </div>
    </header>
  );
}

export default function Home(): ReactNode {
  return (
    <Layout
      title="Robin Pexo"
      description="Description will go into a meta tag in <head />">
      <HomepageHeader />
      <main className={styles.main}>
        <section className={clsx('container', styles.aboutSection)}>
          <div className={styles.frameImage}>
            <img
              src="/img/undraw_docusaurus_tree.svg"
              alt="Sample portrait"
              className={styles.image}
            />
          </div>
          <div className={styles.aboutContent}>
            <Heading as="h2">About Me</Heading>
            <p>
              This is a short placeholder paragraph about you. Share your
              background, what you build, and what inspires your work. Replace
              this text whenever you are ready.
            </p>
          </div>
        </section>

        <section className={clsx('container', styles.socialSection)}>
          <Heading as="h2">Find Me Online</Heading>
          <div className={styles.socialGrid}>
            {socialLinks.map((link) => (
              <Link
                key={link.label}
                className={styles.socialCard}
                to={link.href}>
                <span className={styles.socialIcon}>
                  <img src={link.icon} alt="" aria-hidden="true" />
                </span>
                <span>{link.label}</span>
              </Link>
            ))}
          </div>
        </section>

        <section className={clsx('container', styles.projectsSection)}>
          <Heading as="h2">Projects</Heading>
          <div className={styles.projectGrid}>
            {projects.map((project) => (
              <article key={project.title} className={styles.projectCard}>
                <div className={styles.projectLogo}>
                  <img src={project.logo} alt={`${project.title} logo`} />
                </div>
                <div className={styles.projectBody}>
                  <Heading as="h3">{project.title}</Heading>
                  <p>{project.description}</p>
                  <div className={styles.projectLinks}>
                    {project.links.map((link) => (
                      <Link
                        key={link.label}
                        className={clsx(
                          styles.projectButton,
                          link.kind && styles.storeButton,
                          link.kind === 'appstore' && styles.appStoreButton,
                          link.kind === 'playstore' && styles.playStoreButton,
                        )}
                        to={link.href}>
                        {link.kind === 'appstore' && (
                          <>
                            <span className={styles.storeIcon}>
                              <svg viewBox="0 0 24 24" aria-hidden="true">
                                <path d="M16.9 13.1c0 1.9 1.6 2.5 1.6 2.5s-1.1 3.3-3.1 3.3c-1 0-1.4-.7-2.6-.7s-1.6.7-2.6.7c-1.9 0-3.4-3.1-3.4-5.6 0-2.5 1.6-3.8 3.2-3.8 1 0 2 .7 2.6.7.6 0 1.6-.8 2.8-.7.5 0 2.1.2 3 1.6-2.7 1.6-1.5 4.7-1.5 4.7zM14.8 5.4c.6-.7 1-1.7.9-2.7-.9.1-2 .6-2.6 1.3-.6.7-1.1 1.7-1 2.7 1 .1 2.1-.4 2.7-1.3z" />
                              </svg>
                            </span>
                            <span className={styles.storeText}>
                              <span className={styles.storeEyebrow}>
                                Download on the
                              </span>
                              <span className={styles.storeBrand}>
                                App Store
                              </span>
                            </span>
                          </>
                        )}
                        {link.kind === 'playstore' && (
                          <>
                            <span className={styles.storeIcon}>
                              <svg viewBox="0 0 24 24" aria-hidden="true">
                                <polygon
                                  fill="#34a853"
                                  points="5,4 14,12 5,20"
                                />
                                <polygon
                                  fill="#4285f4"
                                  points="14,12 19,9 21,12 19,15"
                                />
                                <polygon
                                  fill="#fbbc05"
                                  points="5,4 19,9 14,12"
                                />
                                <polygon
                                  fill="#ea4335"
                                  points="5,20 19,15 14,12"
                                />
                              </svg>
                            </span>
                            <span className={styles.storeText}>
                              <span className={styles.storeEyebrow}>
                                Get it on
                              </span>
                              <span className={styles.storeBrand}>
                                Google Play
                              </span>
                            </span>
                          </>
                        )}
                        {!link.kind && <span>{link.label}</span>}
                      </Link>
                    ))}
                  </div>
                </div>
              </article>
            ))}
          </div>
        </section>
      </main>
    </Layout>
  );
}
