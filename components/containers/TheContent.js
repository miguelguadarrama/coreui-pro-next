import { CContainer } from '@coreui/react'

/*
const loading = (
  <div className="pt-3 text-center">
    <div className="sk-spinner sk-spinner-pulse"></div>
  </div>
)
*/

const TheContent = (props) => {
  return (
    <main className="c-main">
      <CContainer fluid>
        {props.children}
      </CContainer>
    </main>
  )
}

export default TheContent
