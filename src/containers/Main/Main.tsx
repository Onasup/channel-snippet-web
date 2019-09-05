/* External dependencies */
import React from 'react'

/* Internal dependencies */
import ContainerRefProvider from 'Containers/ContainerRefProvider'
import FormProvider from 'Containers/FormProvider'
import Snippet from 'Containers/Snippet'

interface InputValues {
  [id: string]: number | string,
}

interface Item {
  id?: string,
  type?: string,
}

interface MainProps {
  className?: string,
  submitting?: boolean,
  onSubmit?: (values: InputValues, componentId: string) => void,
  items: Item[],
}

function Main({
  className,
  submitting,
  onSubmit,
  items,
}: MainProps) {
  return (
    <ContainerRefProvider
      className={className}
    >
      <FormProvider
        submitting={submitting}
        onSubmit={onSubmit}
      >
        <Snippet items={items} />
      </FormProvider>
    </ContainerRefProvider>
  )
}

export default Main
