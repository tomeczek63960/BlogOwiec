import * as React from "react"
import { useStaticQuery, graphql } from "gatsby"
import { Link } from "gatsby"
import Logo from '@components/Logo';

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
    <header>
      <nav>
        <Logo />
        <ul>
          {nodes.map((item: any) => <li key={item.id}>
          <Link
            to={item.url}
            activeClassName="active"
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