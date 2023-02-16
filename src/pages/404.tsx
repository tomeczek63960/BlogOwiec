import * as React from "react"
import { HeadFC, PageProps } from "gatsby"
import { graphql } from "gatsby"
import Layout from "@components/Layout"
import { useTranslation } from 'gatsby-plugin-react-i18next'
import { container } from "@style/container.module.scss"
import TransitionLink from "@components/TransitionLink"
import type {TSharedPageProps, TPageContext} from "../types"

const NotFoundPage: React.FC<PageProps<TSharedPageProps>> = ({data}) => {
  const {footer, nav} = data
  const {t} = useTranslation()
  return (
    <Layout footer={footer} nav={nav}>
      <div className={container}>
        <h1>{t('error_page_title')}</h1>
        <p>
          {t('error_page_message')}
          <br />
          {process.env.NODE_ENV === "development" ? (
            <>
              <br />
              Try creating a page in <code>src/pages/</code>.
              <br />
            </>
          ) : null}
          <br />
          <TransitionLink url="/" direction="left">
            {t('error_page_link_label')}
          </TransitionLink>
        </p>
      </div>
    </Layout>
  )
}

export default NotFoundPage

export const Head: HeadFC<TSharedPageProps, TPageContext> = ({pageContext}) => <>
  <html lang={pageContext.language} />
  <title>404 Not found</title>
</>

export const query = graphql`
  query ErrorPageQuery($language: String!) {
    locales: allLocale(filter: {language: {eq: $language}}) {
      edges {
        node {
          ns
          data
          language
        }
      }
    }
    nav: allContentfulNav(filter: {node_locale: {eq: $language}, hiddeInNavigation: {eq: false}}, sort: {order: ASC}) {
      nodes {
        title
        url
        id
      }
    }
    footer: contentfulFooter(node_locale: {eq: $language}) {
      firstColItems{
        title
        url
        id
      }
      firstColTitle
      facebookUrl
      secondColItems {
        title
        url
        id
      }
      secondColTitle
      thirdColTitle
      twitterUrl
      instagramUrl
    }
  }
`