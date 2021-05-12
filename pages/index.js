import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'

import Sidebar from '../components/SideBar/index'

// import sidebar as component, easily implemented into any main page
export default function Home() {
  return (
    <div>
      <Sidebar />
    </div>
  )
}
