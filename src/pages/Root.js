import {Outlet} from "react-router-dom"

const Root = ()=>{

    const context = {
        test: "test"
    }

    return(
        <>
        <Outlet context={context}/>
        </>
    )
}

export default Root