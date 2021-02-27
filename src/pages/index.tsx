import Head from 'next/head'
import { GetServerSideProps } from 'next'

import { CompletedChallenges } from "../components/CompletedChallenges";
import { Countdown } from "../components/Coutdown";
import { ExperienceBar } from "../components/ExperienceBar";

import { Profile } from '../components/Profile';
import styles from '../styles/pages/Home.module.css';
import { ChallengeBox } from "../components/ChallengeBox";
import { CountdownProvider } from '../Contexts/CountdownContext';
import { ChallengesProvider } from '../Contexts/ChallengesContext';

interface HomeProps {
  level: number;
  currentExperience: number;
  challengesCompleted: number;
}

export default function Home(props: HomeProps) {

  return (
    <ChallengesProvider
      level={props.level}
      currenteExperience={props.currentExperience}
      challengesompleted={props.challengesCompleted}

    >

      <div className={styles.container}>
        <Head>
          <title>Inicio | Movit CJ</title>
        </Head>
        <ExperienceBar />

        <CountdownProvider>
          <section>
            <div>
              <Profile />
              <CompletedChallenges />
              <Countdown />
            </div>

            <div>
              <ChallengeBox />
            </div>
          </section>
        </CountdownProvider>

      </div>
    </ChallengesProvider>
  )
}
export const getServerSideProps: GetServerSideProps = async (ctx) => {
  //chama api  }
  const { level, currentExperience, challengesCompleted } = ctx.req.cookies;

  return {

    props: {
      level: Number(level),
      currentExperience: Number(currentExperience),
      challengesCompleted: Number(challengesCompleted),
    }

  }
}