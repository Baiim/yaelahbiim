import { Projects } from "../types/projects"

const projects: Projects[] = [
  {
    image: "/images/film.png",
    title: "React Movie App",
    link: "https://www.google.com",
    description:
      "Designed and developed a web application using React and Redux to manage movie data.",
    stack: [
      {
        stack: "React"
      },
      {
        stack: "Redux"
      },
      {
        stack: "JavaScript"
      }
    ]
  },
  {
    image: "/images/webhmi.png",
    title: "Project 1",
    link: "http://hmikomfatek.org/",
    description:
      "Designed and developed a web application using Laravel for HMI Organization.",
    stack: [
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
