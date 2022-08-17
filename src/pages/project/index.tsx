import {
  Text,
  VStack,
  useColorModeValue as Mode,
  Stack
} from "@chakra-ui/react"
import Scene from "../../components/scene"
import Layout from "../../components/layout"
import ProjectCard from "../../components/project-card"
import projects from "../../data/projects"

const Project = () => {
  return (
    <Layout title='About' description='About Sektiawan Bimo Prihpambudi'>
      <VStack py={{ base: 20, md: 0 }}>
        <Scene
          number={0}
          summaryTitle='What I created'
          title='My Portfolio'
          align='start'
        >
          <Text align='center' color='gray.500'>
            <strong>the professional world</strong>.{" "}
          </Text>
          <Stack direction={{ base: "column", md: "row" }} spacing={6}>
            {projects.map(({ image, title, description, stack, link }) => (
              <ProjectCard
                key={image}
                image={image}
                title={title}
                description={description}
                link={link}
                stack={stack}
              />
            ))}
          </Stack>
        </Scene>
      </VStack>
    </Layout>
  )
}

export default Project
