import React from 'react'
import c from 'classnames'
import s from './home.module.scss'
import { observer } from 'mobx-react-lite'

const Home = () => {
  return (
    <div className={c(s.wh100p, s.fbv)}>
      <div>顶部菜单</div>

      <div className={s.fbh}>
        <div>左边菜单</div>
        <div>右边菜单</div>
      </div>

      <div>底部菜单</div>
    </div>
  )
}
export default observer(Home)
