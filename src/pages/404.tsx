import * as React from "react"
import { HeadFC, PageProps } from "gatsby"
import { graphql } from "gatsby"
import Layout from "@components/Layout"
import { Link, useI18next, useTranslation } from 'gatsby-plugin-react-i18next';
import { container } from "@style/components/container.module.scss"

const NotFoundPage: React.FC<PageProps> = ({data}: any) => {
  const {footer, nav} = data;
  const {language} = useI18next();
  const {t} = useTranslation();
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
          <Link to="/" language={language}>
            {t('error_page_link_label')}
          </Link>
        </p>
      </div>
    </Layout>
  )
}

export default NotFoundPage

export const Head: HeadFC = () => <title>404 Not found</title>

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