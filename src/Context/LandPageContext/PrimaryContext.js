import React, { createContext, useState } from 'react'

export let PrimaryContext = createContext()

const PrimaryContextProvider = (props) => {
    const [logo, setLogo] = useState("")

    const object = {
        logo, setLogo
    }

  return (
    <PrimaryContext.Provider value={object}>
        {props.children}
    </PrimaryContext.Provider>
  )
}

export default PrimaryContextProvider