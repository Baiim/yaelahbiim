import { Degree } from "../types/degree"
import { GiDiploma } from "@react-icons/all-files/gi/GiDiploma"
import { IoMdSchool } from "@react-icons/all-files/io/IoMdSchool"

const degrees: Degree[] = [
  {
    title: "Information technology Degree",
    date: "2018-2024",
    location: "Universitas Pelita Bangsa cikarang",
    icon: IoMdSchool,
    details: ["First year"]
  },
  {
    title: "Mastering Dart and Flutter Development",
    date: "2021",
    location: "BuildWithAngga",
    icon: GiDiploma,
    details: [
      "Create Project with Flutter",
      "Create Project with Dart",
      "Create Project with Flutter and Dart",
      "Create Project Find House"
    ]
  },
  {
    title: "FullStack Web Development",
    date: "2021",
    location: "BuildWithAngga",
    icon: GiDiploma,
    details: [
      "Create Project with Laravel",
      "Create Project with  Laravel : Web HMI and Web Dashboard"
    ]
  }
]

export default degrees
