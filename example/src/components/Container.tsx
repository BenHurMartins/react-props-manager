import React from 'react'
import { usePropsContext } from 'react-props-manager'

type ContainerProps = {
  children: React.ReactNode
  id: string
}

const styles = {
  container: {
    flex: 1,
    padding: 60
  },
  contentContainer: {
    flex: 1,
    padding: 10,
    backgroundColor: 'white'
  }
}

type ManagedProps = {
  title: string
  description: string
  backgroundColor: string
}

const Container: React.FC<ContainerProps> = ({ children, id }) => {
  const { getProps } = usePropsContext()
  const { backgroundColor, description, title } = getProps(id) as ManagedProps

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
