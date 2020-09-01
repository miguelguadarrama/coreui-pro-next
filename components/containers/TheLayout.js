import { useContext } from 'react'
import classNames from 'classnames'
import {
  TheContent,
  TheSidebar,
  TheAside,
  TheFooter,
  TheHeader
} from './index'
import AppContext from '../../context/app'

const TheLayout = (props) => {
  const { state: { darkMode } } = useContext(AppContext)

  const classes = classNames(
    'c-app c-default-layout',
    darkMode && 'c-dark-theme'
  )

  return (
    <div className={classes}>
      <TheSidebar />
      <TheAside />
      <div className="c-wrapper">
        <TheHeader />
        <div className="c-body">
          <TheContent>
            {props.children}
          </TheContent>
        </div>
        <TheFooter />
      </div>
    </div>
  )
}

export default TheLayout
