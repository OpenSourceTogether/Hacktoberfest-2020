import styles from '../styles/index.module.scss'
import { Typography, Grid, Avatar } from '@material-ui/core';
import FallingDownArrow from '../components/FallingDownArrow';
import Chip from '@material-ui/core/Chip';
import Link from 'next/link'
import Layout from '../components/Layout';
import Head from '../components/head';
import fs from 'fs'
import path from 'path'

export async function getStaticProps() {
  const contributorsDirectory = path.join(process.cwd(), 'contributors')
  const contributorFiles = fs.readdirSync(contributorsDirectory)
  let contributorsArray = []
  contributorFiles.map(filename => {
    const filePath = path.join(contributorsDirectory, filename)
    try {
      const fileContents = JSON.parse(fs.readFileSync(filePath, 'utf8'))
      contributorsArray.push(fileContents)
    }
    catch(e) {
      console.log('Error reading file -' + filename)
    }
  })
  return {
    props: {
      contributors: contributorsArray
    },
    revalidate: 1
  }
}
const Home = ({ contributors }) => (
  <Layout>
    <Head />
    <Grid className={styles.welcomeGridWrapper} container>
      <Typography variant={"h1"} className={styles.welcomeText}>Let's change the world together with Open source!</Typography>
      <Typography variant={"h2"} className={styles.welcomeSubText}>Hacktoberfest is open to everyone whether you're new to development, a student or a long-time contributor. Open your first pull request and generate a personalized music certificate
      <a className={styles.githubLink} href="https://github.com/OpenSourceTogether/Hacktoberfest-2020" target="_blank">here</a>.
      </Typography>
    </Grid>
    <Grid container className={styles.arrowContainer}>
      <FallingDownArrow />
    </Grid>
    <Grid container className={styles.contributorsListContainer}>
      <Typography className={styles.contributorsTitle}>{Math.floor(contributors.length/100)*100}+ contributors:</Typography>
      <Typography className={styles.contributorsSubTitle}>Tip: 👉 Click on an username to view their personalized music certificate.</Typography>
      {
        contributors && contributors.map((item, index) => {
          return (
            <Link href="/contributors/[slug]" key={index} as={`/contributors/${item["github-username"]}`}>
              <Chip
                style={{
                  background: `${item["favourite-color"]}`
                }}
                className={styles.userName}
                classes={{ avatar: styles.chipAvatar }}
                avatar={<Avatar>{item["favourite-emoji"]}</Avatar>}
                label={item["github-username"]}
              />
            </Link>
          )
        })
      }
    </Grid>
  </Layout>
)

export default Home