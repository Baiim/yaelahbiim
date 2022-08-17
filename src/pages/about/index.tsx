import {
  Text,
  VStack,
  useColorModeValue as Mode,
  Heading,
  Stack,
  Tabs,
  TabList,
  TabPanels,
  Tab,
  TabPanel
} from '@chakra-ui/react'
import Header from '../../components/main-layout/header'
import SocialMedia from '../../components/social-media'
import Scene from '../../components/scene'
import Layout from '../../components/layout'
import AboutHero from '../../components/about-hero'
import Experience from '../../components/experience'
import experiences from '../../data/experiences'
import Degree from '../../components/degree'
import degrees from '../../data/degrees'
import ScrollIdButton from '../../components/scroll-id-button'
import axios from 'axios'
import { useEffect } from 'react'

const About = () => {
  return (
    <Layout title="About" description="About Sektiawan Bimo Prihpambudi">
      <VStack py={{ base: 20, md: 0 }}>
        <AboutHero />
        <Scene
          id="experiences"
          number={2}
          summaryTitle="Where I Worked"
          title="Work Experience"
          align="end"
        >
          <Text align="center" color="gray.500">
            <strong>the professional world</strong>.{' '}
            <ScrollIdButton text="See my certif's" id="degrees" />
          </Text>
          <Stack direction={{ base: 'column', md: 'row' }} spacing={6}>
            {experiences.map(({ title, company, date, location, tasks }) => (
              <Experience
                key={company}
                title={title}
                company={company}
                date={date}
                location={location}
                tasks={tasks}
              />
            ))}
          </Stack>
        </Scene>
        <Scene
          id="degrees"
          number={3}
          summaryTitle="School curriculum"
          title="Degrees & Certifications"
          align="start"
        >
          <Stack direction={{ base: 'column', md: 'row' }} spacing={4}>
            {degrees.map(({ title, date, location, icon, details }) => (
              <Degree
                key={title}
                title={title}
                date={date}
                location={location}
                icon={icon}
                details={details}
              />
            ))}
          </Stack>
        </Scene>
        <Tabs isLazy>
          <TabList>
            <Tab>One</Tab>
            <Tab id="two">Two</Tab>
          </TabList>
          <TabPanels>
            <TabPanel>
              <p>one!</p>
            </TabPanel>
            <TabPanel>
              <p>two!</p>
            </TabPanel>
          </TabPanels>
        </Tabs>
      </VStack>
    </Layout>
  )
}

export default About
