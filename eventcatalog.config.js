module.exports = {
  basePath: '/event-catalog',
  title: 'Technical Drafts',
  tagline: 'Discover, Explore and Document your Event Driven Architectures',
  organizationName: 'Technical Drafts',
  projectName: 'Event Catalog',
  editUrl: 'https://github.com/technicaldrafts/event-catalog/edit/main',
  trailingSlash: true,
  primaryCTA: {
    label: 'Explore Events',
    href: '/events'
  },
  secondaryCTA: {
    label: 'Getting Started',
    href:"https://github.com/technicaldrafts/event-catalog"
  },
  logo: {
    alt: 'EventCatalog Logo',
    // found in the public dir
    src: 'logo.png',
  },
  headerLinks: [
    { label: 'Events', href: '/events'},
    { label: 'Services', href: '/services' },
    { label: 'Domains', href: '/domains'},
    { label: 'Users', href: '/users'},
    { label: 'Visualiser', href: '/visualiser' },
    { label: '3D Node Graph', href: '/overview' },
  ],
  footerLinks: [
    { label: 'Events', href: '/events' },
    { label: 'Services', href: '/services' },
    { label: 'Visualiser', href: '/visualiser' },
    { label: '3D Node Graph', href: '/overview' },
    { label: 'GitHub', href: 'https://github.com/technicaldrafts/event-catalog/edit/main' }
  ],
  users: [
    {
      id: 'dboyne',
      name: 'David Boyne',
      avatarUrl: 'https://pbs.twimg.com/profile_images/1262283153563140096/DYRDqKg6_400x400.png',
      role: 'Developer',
    },
    {
      id: 'ciromiranda',
      name: 'Ciro Miranda',
      avatarUrl: 'https://s.gravatar.com/avatar/f348ae5292bf75fa305d1a3bf542b6da?s=80&r=x',
      role: 'Developer',
    },
  ],
}
