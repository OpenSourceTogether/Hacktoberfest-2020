import { Container, AppBar, Toolbar, Typography } from "@material-ui/core";
import styles from '../styles/layout.module.scss'

export default function Layout({ children, noAppBar }) {
    return (
        <Container className={styles.layout}>
            {
                !noAppBar &&
                <AppBar position="static" className={styles.appbar}>
                    <Toolbar classes={{ root: styles.toolbarRoot }}>
                        <img src="/hacktoberfest.svg" className={styles.hacktoberfestLogo} />
                        <Typography className={styles.hacktoberfestText}>acktoberfest 2020</Typography>
                        <img src="/sponsors-light.svg" className={styles.appbarSponsors} />
                    </Toolbar>
                </AppBar>
            }
            {children}
            <footer className={styles.footer}>Proudly hosted on <a className={styles.footerLink} href="https://vercel.com" target="_blank">▲Vercel</a></footer>
        </Container>
    )
}
