import Head from 'next/head'
import Image from 'next/image'
import { useState } from 'react'
import Sidebar from '../components/SideBar/index'
import DashNav from '../components/DashNav/DashNav'

// import sidebar as component, easily implemented into any main page
export default function Home() {
  const [open, setOpen] = useState(false);
  return (
    <div>
      <Sidebar Open={open} setOpen={setOpen} />
      <DashNav Open={open} setOpen={setOpen} />
    </div>
  )
}
