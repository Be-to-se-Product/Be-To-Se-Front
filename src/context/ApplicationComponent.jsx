import React, { useContext, useMemo, useState } from 'react'
import AplicattionContext from './AplicattionContext'

const ApplicationComponent = ({children}) => {
    const [idEstabelecimento, setIdEstabelecimento] = useState({})

    return (
        <AplicattionContext.Provider value={{idEstabelecimento,setIdEstabelecimento}}>
            {children}
        </AplicattionContext.Provider>
    )
}

export default ApplicationComponent