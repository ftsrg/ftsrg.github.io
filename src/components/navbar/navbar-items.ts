// IMPORTANT: All the titles define the key of the translatable text
interface INavbarItem {
  id: string
  title: string
  shortTitle: string
  href: string
  children?: Array<{ title: string; href: string }>
}

const NAVBAR_ITEMS: Array<INavbarItem> = [
  {
    id: 'home',
    title: 'nav.home.title',
    shortTitle: 'nav.home.shortTitle',
    href: '/',
    children: [
      { title: 'nav.home.competences', href: '#competences' },
      { title: 'nav.home.education', href: '#education' },
      { title: 'nav.home.about', href: '#about' },
      { title: 'nav.home.projects', href: '#projects' },
      { title: 'nav.home.partners', href: '#partners' },
      { title: 'nav.home.news', href: '#news' }
    ]
  },
  {
    id: 'research',
    title: 'nav.research.title',
    shortTitle: 'nav.research.shortTitle',
    href: '/research/',
    children: [
      { title: 'nav.research.projects', href: '#projects' },
      { title: 'nav.research.publications', href: '#publications' },
      { title: 'nav.research.tools', href: '#tools' },
      { title: 'nav.research.events', href: '#events' }
    ]
  },
  {
    id: 'education',
    title: 'nav.education.title',
    shortTitle: 'nav.education.shortTitle',
    href: '/education/',
    children: [
      { title: 'nav.education.specializations', href: '#specializations' },
      { title: 'nav.education.courses', href: '#courses' },
      { title: 'nav.education.studentwork', href: '#student-work' },
      { title: 'nav.education.talentcare', href: '#talentcare' },
      { title: 'nav.education.achievements', href: '#achievements' }
    ]
  },
  {
    id: 'about',
    title: 'nav.about.title',
    shortTitle: 'nav.about.shortTitle',
    href: '/about/',
    children: [
      { title: 'nav.about.about', href: '#about' },
      { title: 'nav.about.members', href: '#members' },
      { title: 'nav.about.formermembers', href: '#formermembers' },
      { title: 'nav.about.students', href: '#students' }
    ]
  },
  {
    id: 'contact',
    title: 'nav.contact.title',
    shortTitle: 'nav.contact.shortTitle',
    href: '/contact/'
  }
]

export default NAVBAR_ITEMS
