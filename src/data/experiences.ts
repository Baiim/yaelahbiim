import { Experience } from "../types/experience"
import { FaDotCircle } from "@react-icons/all-files/fa/FaDotCircle"

const experiences: Experience[] = [
  {
    title: "Software Developer",
    company: "PT Bussan Auto Finance",
    date: "Jun 2022 - Present",
    location: "Jakarta, Indonesia",
    tasks: [
      {
        task: "Developing web applications using React",
        icon: FaDotCircle
      },
      {
        task: "Maintenance of existing web applications",
        icon: FaDotCircle
      }
    ]
  },
  {
    title: "Software Developer",
    company: "PT Enigma Cipta Humanika",
    date: "Feb 2022 - Present",
    location: "Jakarta, Indonesia",
    tasks: [
      {
        task: "Developing web applications using React",
        icon: FaDotCircle
      },
      {
        task: "Maintenance of existing web applications",
        icon: FaDotCircle
      }
    ]
  },
  {
    title: "Software Developer",
    company: "Saham Rakyat",
    date: "Mar 2022 - Jul 2022",
    location: "Jakarta, Indonesia",
    tasks: [
      {
        task: "Developing web applications using React",
        icon: FaDotCircle
      },
      {
        task: "Maintenance of existing web applications",
        icon: FaDotCircle
      }
    ]
  },
  {
    title: "Web Developer",
    company: "PT. Ruang Reksa Kencana",
    date: "Jan 2021 - Jul 2021",
    location: "Jakarta, Indonesia",
    tasks: [
      {
        task: "Developing web applications using Laravel",
        icon: FaDotCircle
      },
      {
        task: "Maintenance of existing web applications",
        icon: FaDotCircle
      }
    ]
  }
]

export default experiences
