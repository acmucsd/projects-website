// for use by past projects section on home page and individual project cards

export const SUBGROUP_ORDER = ['Hack', 'AI', 'Design', 'Robotics'];

export const SUBGROUP_META: Record<string, {
  logo: string;
  repoIcon: string;
  repoLabel: string;
}> = {
  Design: {
    logo: '/assets/design.svg',
    repoIcon: '/assets/embeds/figma-icon.svg',
    repoLabel: 'Figma',
  },
  Hack: {
    logo: '/assets/hack.svg',
    repoIcon: '/assets/embeds/github-icon.svg',
    repoLabel: 'GitHub File',
  },
  AI: {
    logo: '/assets/ai.svg',
    repoIcon: '/assets/embeds/github-icon.svg',
    repoLabel: 'GitHub File',
  },
  Robotics: {
    logo: '/assets/robo.svg',
    repoIcon: '/assets/embeds/github-icon.svg',
    repoLabel: 'GitHub File',
  },
};

export const DEFAULT_META = {
  logo: '/assets/proj_logo.png',
  repoIcon: '/assets/embeds/github-icon.svg',
  repoLabel: 'GitHub File',
};
