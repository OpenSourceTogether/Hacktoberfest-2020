import dynamic from 'next/dynamic'
import { Grid, Typography } from '@material-ui/core'
import Layout from '../../components/Layout'
import styles from '../../styles/contributors.module.scss'
import PersonAvatar from '../../components/PersonAvatar'
import GitHubIcon from '@material-ui/icons/GitHub';
import HomeIcon from '@material-ui/icons/Home';
import Link from 'next/link'
import Head from '../../components/head'
import fs from 'fs'
import path from 'path'

const MusicPlayer = dynamic(
	() => import('../../components/MusicPlayer'),
	{ ssr: false }
)

export async function getServerSideProps({ params }) {

	const res = await fetch(`https://api.github.com/users/${params.slug}`, {
		method: 'GET',
	})

	const json = await res.json()
	if (res.status !== 200) {
		console.error(json)
		throw new Error('Failed to fetch API')
	}
	const contributorsDirectory = path.join(process.cwd(), 'contributors')
	const contributorFiles = fs.readdirSync(contributorsDirectory)
	let contributorsArray = []
	contributorFiles.map(filename => {
		const filePath = path.join(contributorsDirectory, filename)
		const fileContents = JSON.parse(fs.readFileSync(filePath, 'utf8'))
		contributorsArray.push(fileContents)
	})
	
	let obj = contributorsArray.find(o => o["github-username"] === `${params.slug}`);

	return {
		props: {
			githubUser: json,
			contributorData: obj
		}
	}
}

export default function Contributor({ githubUser, contributorData }) {
	return (
		<Layout noAppBar>
			<Head
				title={`${githubUser && githubUser.name}'s personalized music card | Hactoberfest 2020`}
				description={`Checkout ${githubUser && githubUser.name}'s personalized music card generated for contributing to the open-source community | Hactoberfest 2020`}
				url={`https://hacktober-fest-2020.vercel.app/contributors/${githubUser && githubUser.login}`}
			/>
			<Link href="/" as="/">
				<HomeIcon className={styles.homeIcon} />
			</Link>
			{
				contributorData === undefined ?
					<Grid container>
						<Typography variant={"h1"}>
							Please open a pull request in this
						<a className={styles.hacktoberLink} href="https://github.com/OpenSourceTogether/Hacktoberfest-2020" target="_blank">
								repository
						</a>
						and wait for it to be reviewed and merged.
					</Typography>
					</Grid>
					:
					<Grid className={styles.contributorContainer} container>
						<Grid className={styles.contributorWrapper}
							style={{
								border: `2px solid ${contributorData["favourite-color"]}`,
								boxShadow: `0px 0px 24px 1px ${contributorData["favourite-color"]}`
							}}
							container>
							<Grid className={styles.personContainer} item md={7} xs={12}>
								<Grid container className={styles.personDetailContainer}>
									<Grid item>
										<PersonAvatar userImg={githubUser && githubUser.avatar_url} userName={githubUser && githubUser.name} />
									</Grid>
									<Grid item className={styles.detailsContainer}>
										<Typography className={styles.personName}>
											{githubUser && githubUser.name}
										</Typography>
										<a className={styles.githubLink} href={`${githubUser && githubUser.html_url}`} target="_blank">
											<Grid container className={styles.githubContainer}>
												<GitHubIcon className={styles.githubIcon} />
												<Typography>
													{githubUser && githubUser.login}
												</Typography>
											</Grid>
										</a>
									</Grid>
								</Grid>
								<Grid container className={styles.certificateTextContainer}>
									<Typography className={styles.certificateHeader}>
										Cheers! Your PR has been merged 🎉
									</Typography>
									<Typography className={styles.certificateSubText}>
										Thank you so much for your active participation and contribution to this open-source project.
										You can track your progress and stats
								<a className={styles.hacktoberLink} href="https://hacktoberfest.digitalocean.com/" target="_blank">
											here.
								</a>

									</Typography>
									<Typography className={styles.certificateSubText}>
										Enjoy this personalized music certificate while you make other open-source contributions
										and don't forget to share this
								<a className={styles.hacktoberLink} href="https://github.com/OpenSourceTogether/Hacktoberfest-2020" target="_blank">
											repository
								</a>
								with your friends to help them make their first pull request.
							</Typography>
								</Grid>
							</Grid>
							<Grid className={styles.hacktoberfestContainer} item md={5} xs={12}>
								<img src='/hacktoberfest-full.svg' className={styles.hacktoberfestImage} />
								<Grid className={styles.musicPlayerContainer} container>
									<MusicPlayer soundCloudUrl={contributorData["favourite-music"]} />
								</Grid>
							</Grid>
						</Grid>
					</Grid>
			}
		</Layout>
	)
}