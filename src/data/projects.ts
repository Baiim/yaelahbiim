import { Projects } from "../types/projects"

const projects: Projects[] = [
  {
    image: "https://i.ibb.co/qxXxXxq/project-1.png",
    title: "Project 1",
    link: "https://www.google.com",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
    stack: [
      {
        stack: "React"
      },
      {
        stack: "Laravel"
      },
      {
        stack: "PHP"
      }
    ]
  }
]

export default projects
