import React from 'react'
import { render, screen } from '@testing-library/react'
import '@testing-library/jest-dom'
import { PropsManagerProvider, usePropsContext } from '.'

type TestPropsType = {
  testProps: string
}

const TestComponent = () => {
  const { getProps } = usePropsContext()
  const { testProps } = getProps('testId') as TestPropsType

  return (
    <div>
      <p>{testProps}</p>
    </div>
  )
}

const propsValue = {
  testId: {
    testProps: 'some value'
  }
}

const component = (
  <PropsManagerProvider propsValue={propsValue}>
    <TestComponent />
  </PropsManagerProvider>
)

describe('PropsManagerProvider', () => {
  it('should show test value inside the component', () => {
    render(component)
    expect(screen.getByText(/some value/)).toBeTruthy()
  })
})
