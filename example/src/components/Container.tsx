import React from 'react'
import { usePropsContext } from 'react-props-manager'
import { ContainerManagedProps } from '../props'

type ContainerProps = {
  children: React.ReactNode
  id: string
}

const styles: Record<string, React.CSSProperties> = {
  container: {
    display: 'flex',
    flex: 1,
    flexGrow: 1,
    padding: 5
  },
  contentContainer: {
    display: 'flex',
    flexDirection: 'column',
    flex: 1,
    padding: 10,
    backgroundColor: 'white'
  }
}

const Container: React.FC<ContainerProps> = ({ children, id }) => {
  const { getProps } = usePropsContext()
  const { backgroundColor, description, title } = getProps(
    id
  ) as ContainerManagedProps

  return (
    <div style={{ ...styles.container, backgroundColor: backgroundColor }}>
      <div style={styles.contentContainer}>
        <h1>{title}</h1>
        <p>{description}</p>
        {children}
      </div>
    </div>
  )
}

export default Container
