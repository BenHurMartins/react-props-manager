import React from 'react'
import { usePropsContext } from 'react-props-manager'
import Container from '../components/Container'
import { LinkManagedProps } from '../props'

const Docs = () => {
  const { getProps } = usePropsContext()
  const { links } = getProps('docLinks') as LinkManagedProps

  return (
    <Container id={'docs'}>
      <span>Docs content</span>
      <ul>
        {links?.map(({ type, value }) => {
          return (
            <li>
              <a href={value}>{type}</a>
            </li>
          )
        })}
      </ul>
    </Container>
  )
}

export default Docs
