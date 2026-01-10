import type {ReactNode} from 'react';
import clsx from 'clsx';
import Link from '@docusaurus/Link';
import Layout from '@theme/Layout';
import Heading from '@theme/Heading';

import styles from './index.module.css';

const socialLinks = [
  {
    label: 'YouTube',
    href: 'https://www.youtube.com/@RobinPexo',
    icon: '/img/social/youtube.svg',
  },
  {
    label: 'Instagram',
    href: 'https://www.instagram.com/robinpexo',
    icon: '/img/social/instagram.svg',
  },
  {
    label: 'TikTok',
    href: 'https://www.tiktok.com/@robinpexo',
    icon: '/img/social/tiktok.svg',
  },
  {
    label: 'X',
    href: 'https://x.com/robinpexo',
    icon: '/img/social/x.svg',
  },
  {
    label: 'Threads',
    href: 'https://www.threads.com/@robinpexo',
    icon: '/img/social/threads.svg',
  },
  {
    label: 'Facebook',
    href: 'https://www.facebook.com/robinpexo',
    icon: '/img/social/facebook.svg',
  },
  {
    label: 'GitHub',
    href: 'https://github.com/robinpexo',
    icon: '/img/social/github.svg',
  },
  {
    label: 'Telegram',
    href: 'https://t.me/RobinPexo',
    icon: '/img/social/telegram.svg',
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
      {label: 'App Store', href: '#'},
    ],
  },
  {
    title: 'Project Two',
    description:
      'Sample description for your second project. Highlight the impact and audience.',
    logo: '/img/undraw_docusaurus_react.svg',
    links: [
      {label: 'Website', href: '#'},
      {label: 'Google Play', href: '#'},
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

const latestVideos = [
  {
    title: 'Latest Video 1',
    href: 'https://www.youtube.com/watch?v=aQekMYeHcOs&t=10s',
    id: 'aQekMYeHcOs',
  },
  {
    title: 'Latest Video 2',
    href: 'https://www.youtube.com/watch?v=dHd-_EJXFgk&t=19s',
    id: 'dHd-_EJXFgk',
  },
  {
    title: 'Latest Video 3',
    href: 'https://www.youtube.com/watch?v=5pRJNiHWDnA&t=33s',
    id: '5pRJNiHWDnA',
  },
  {
    title: 'Latest Video 4',
    href: 'https://youtu.be/A4Ut4duIhyU',
    id: 'A4Ut4duIhyU',
  },
];

function HomepageHeader() {
  return (
    <header className={clsx('hero hero--primary', styles.heroBanner)}>
      <div className="container">
        <Heading as="h1" className="hero__title">
          Robin Pexo
        </Heading>
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
          <div className={styles.aboutContent}>
            <Heading as="h2">About Me</Heading>
            <p>
              I build thoughtful software and enjoy turning complex ideas into
              clear, reliable experiences. I focus on creating systems that are
              fast, dependable, and easy to evolve.
            </p>
            <p>
              I am passionate about continuous learning and personal growth. I
              like to share what I learn, communicate ideas clearly, and build
              a body of work that reflects curiosity, care, and long-term
              thinking.
            </p>
            <p>
              This space is where I collect lessons from projects, experiments,
              and everyday life. Some notes are technical, others are about
              mindset, habits, or creative process, but they all point back to
              the same goal: doing work I am proud of and helping others along
              the way. If something here resonates, I hope it sparks a useful
              conversation.
            </p>
            <p>
              Outside of work, I enjoy making YouTube videos, creating apps and
              websites, and staying active with fitness training.
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
                to={link.href}
                target="_blank"
                rel="noopener noreferrer">
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
                        className={styles.projectButton}
                        to={link.href}>
                        {link.label}
                      </Link>
                    ))}
                  </div>
                </div>
              </article>
            ))}
          </div>
        </section>

        <section className={clsx('container', styles.videosSection)}>
          <Heading as="h2">Latest Videos</Heading>
          <div className={styles.videoGrid}>
            {latestVideos.map((video) => (
              <Link
                key={video.id}
                className={styles.videoCard}
                to={video.href}
                target="_blank"
                rel="noopener noreferrer">
                <div className={styles.videoThumb}>
                  <img
                    src={`https://img.youtube.com/vi/${video.id}/hqdefault.jpg`}
                    alt={video.title}
                    loading="lazy"
                  />
                </div>
                <div className={styles.videoMeta}>
                  <Heading as="h3">{video.title}</Heading>
                  <span className={styles.videoCta}>Watch on YouTube</span>
                </div>
              </Link>
            ))}
          </div>
        </section>
      </main>
    </Layout>
  );
}
