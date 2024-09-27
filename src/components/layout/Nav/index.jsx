import React from 'react'
// import { Link } from 'react-router-dom'
import { HashLink } from 'react-router-hash-link';

import { Dropdown } from 'antd';
import { MenuOutlined, HomeOutlined, InfoCircleOutlined, ContainerOutlined, ScheduleOutlined, ThunderboltOutlined, LoginOutlined } from '@ant-design/icons';

import styles from "./index.module.scss"

export default function Nav() {
  const navMemuItems = [
    {
      key: "home",
      value: "Home",
      icon: <HomeOutlined />,
      to: "/",
    },
    {
      key: "about",
      value: "About",
      icon: <InfoCircleOutlined />,
      to: "/#about",
    },
    {
      key: "menu",
      value: "Menu",
      icon: <ContainerOutlined />,
      to: "/#menu",
    },
    {
      key: "reservations",
      value: "Reservations",
      icon: <ScheduleOutlined />,
      to: "/booking",
    },
    {
      key: "order-online",
      value: "Order Online",
      icon: <ThunderboltOutlined />,
      to: "/order",
    },
    {
      key: "login",
      value: "Login",
      icon: <LoginOutlined />,
      to: "/login",
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
                    <HashLink to={item.to}>{item.icon} {item.value}</HashLink>
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
            <li key={item.key}><HashLink to={item.to}>{item.value}</HashLink></li>
          )
        }
      </ul>
    </nav>
  )
}
