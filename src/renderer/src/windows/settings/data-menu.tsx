interface SidebarMenuItem {
  name: string
  slug: string
  icon?: string
}

const dataMenu: SidebarMenuItem[]= [
  {
    name: "General",
    slug: "/general"
  },
  {
    name: "Advanced",
    slug: "/advanced",
  },
  {
    name: "Apperance",
    slug: "/theming"
  },
  {
    name: "Privacy",
    slug: "/privacy"
  }
]

export default dataMenu
