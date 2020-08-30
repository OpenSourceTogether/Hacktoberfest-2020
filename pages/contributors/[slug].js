import dynamic from 'next/dynamic'
import { Grid, Typography } from '@material-ui/core'
import Layout from '../../components/Layout'
import styles from '../../styles/contributors.module.scss'
import PersonAvatar from '../../components/PersonAvatar'
import GitHubIcon from '@material-ui/icons/GitHub';
import HomeIcon from '@material-ui/icons/Home';
import Link from 'next/link'
const MusicPlayer = dynamic(
	() => import('../../components/MusicPlayer'),
	{ ssr: false }
)

export async function getStaticProps({ params }) {
	const res = await fetch(`https://api.github.com/users/${params.slug}`, {
		method: 'GET',
	})

	const json = await res.json()
	if (res.status !== 200) {
		console.error(json)
		throw new Error('Failed to fetch API')
	}

	return {
		props: {
			githubUser: json
		}
	}
}

export async function getStaticPaths() {
	return {
		paths: [
			'/contributors/chandan-reddy-k'
		],
		fallback: true,
	}
}


export default function Contributor({ githubUser }) {
	return (
		<Layout noAppBar>
			<Link href="/" as="/">
				<HomeIcon className={styles.homeIcon} />
			</Link>
			<Grid className={styles.contributorContainer} container>
				<Grid className={styles.contributorWrapper} container>
					<Grid className={styles.personContainer} item xs={7}>
						<Grid container>
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
								<a className={styles.hacktoberLink} href="https://hacktoberfest.digitalocean.com/" target="_blank">
									repository
								</a>
								with your friends to help them make their first pull request.
							</Typography>
						</Grid>
					</Grid>
					<Grid className={styles.hacktoberfestContainer} item xs={5}>
						<img src='/hacktoberfest-full.svg' className={styles.hacktoberfestImage} />
						<Grid className={styles.musicPlayerContainer} container>
							<MusicPlayer />
						</Grid>
					</Grid>
				</Grid>
			</Grid>
		</Layout>
	)
}

