import { CFooter, CLink } from '@coreui/react'

const TheFooter = () => {
  return (
    <CFooter fixed={false}>
      <div>
        <CLink href="https://greenclimate.fund" target="_blank">
          Green Climate Fund
        </CLink>
      </div>
      <div className="ml-auto">
        <span className="mr-1">Dev.ICT</span>
      </div>
    </CFooter>
  )
}

export default TheFooter
