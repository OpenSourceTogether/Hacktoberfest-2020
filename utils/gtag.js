export const GA_TRACKING_ID = 'UA-174131788-2'

export const pageview = (url) => {
    window.gtag && window.gtag('config', GA_TRACKING_ID, {
        page_path: url,
    })
}