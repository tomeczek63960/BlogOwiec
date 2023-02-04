import * as React from "react"
import { useStaticQuery, graphql } from "gatsby"
import { Link } from "gatsby"
import Logo from '@components/Logo';
import { container } from '@style/components/container.module.scss';
import { header, nav, navList, navLink } from '@style/components/header.module.scss';

const Header = () => {
  const data = useStaticQuery(graphql`
    query {
      allContentfulNav {
        nodes {
          title
          url
          id
        }
      }
    }
  `)
  const { nodes } = data.allContentfulNav
  console.log(nodes)
  return <>
    <header className={header}>
      <nav className={`${container} ${nav}`}>
        <Logo />
        <ul className={navList}>
          {nodes.map((item: any) => <li key={item.id}>
          <Link
            to={item.url}
            activeClassName="active"
            className={navLink}
          >
            {item.title}
          </Link>
          </li>)}
        </ul>
      </nav>
    </header>
  </>
}

export default Header