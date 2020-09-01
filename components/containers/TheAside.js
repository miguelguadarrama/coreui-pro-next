import { useContext } from 'react'
import {
  CSidebar,
  CSidebarClose
} from '@coreui/react'
import AppContext from '../../context/app'

const TheAside = () => {
  const { state: { asideShow: show }, dispatch } = useContext(AppContext)
  const setState = (state) => dispatch({ type: 'set', asideShow: state })

  return (
    <CSidebar
      aside
      colorScheme='light'
      size='lg'
      overlaid
      show={show}
      onShowChange={(state) => setState(state)}
    >
      <CSidebarClose onClick={() => setState(false)} />
      {/*aside content*/}
      <div className="nav-underline">
        <div className="nav nav-tabs">
          <div className="nav-item">
            <div className="nav-link">Aside</div>
          </div>
        </div>
      </div>
    </CSidebar>
  )
}

export default TheAside
