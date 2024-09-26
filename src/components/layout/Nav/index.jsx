import React from 'react'

import { Dropdown } from 'antd';
import { MenuOutlined, HomeOutlined, InfoCircleOutlined, ContainerOutlined, ScheduleOutlined, ThunderboltOutlined, LoginOutlined } from '@ant-design/icons';

import styles from "./index.module.scss"

export default function Nav() {
  const navMemuItems = [
    {
      key: "home",
      value: "Home",
      icon: <HomeOutlined />,
    },
    {
      key: "about",
      value: "About",
      icon: <InfoCircleOutlined />,
    },
    {
      key: "menu",
      value: "Menu",
      icon: <ContainerOutlined />,
    },
    {
      key: "reservations",
      value: "Reservations",
      icon: <ScheduleOutlined />,
    },
    {
      key: "order-online",
      value: "Order Online",
      icon: <ThunderboltOutlined />,
    },
    {
      key: "login",
      value: "Login",
      icon: <LoginOutlined />,
    },

  ]

  return (
    <nav className={styles["nav"]}>

      <div className={styles["nav-mobile"]}>
        <Dropdown
          menu={{
            items: navMemuItems.map(item => {
              return {
                  key: item.key,
                  label: (
                    <a href="/">{item.icon} {item.value}</a>
                  )
                }
            }),
          }}
          placement="bottomLeft"
        >
          <MenuOutlined />
        </Dropdown>
      </div>
      <ul className={styles["nav-pc"]}>
        {
          navMemuItems.map(item =>
            <li key={item.key}><a href="/">{item.value}</a></li>
          )
        }
      </ul>
    </nav>
  )
}
