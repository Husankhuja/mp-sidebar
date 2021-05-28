import Head from 'next/head'
import Image from 'next/image'
import { useState } from 'react'
import Sidebar from '../components/SideBar'
import DashNav from '../components/DashNav/DashNav'
import ParentComponent from '../components/ParentComponent/index'
import Child from '../components/ChildComponent/index';
import Styles from '../styles/Home.module.css'

// import sidebar as component, easily implemented into any main page
export default function Home() {
  const [open, setOpen] = useState(false);
  const [parent, setParent] = useState("home");
  const [children, setChildren] = useState([]);
  return (
    <div className={Styles.home}>
      <Sidebar Open={open} setOpen={setOpen} parent={parent} setParent={setParent} children={children} setChildren={setChildren} />
      <DashNav Open={open} setOpen={setOpen} />

      {/* <ParentComponent page={parent} children={children} setChildren={setChildren} /> */}
      <Child child={parent} />
      {/* <ParentComponent page={parent} children={children} setChildren={setChildren} /> */}
      {
        children.map(child => <Child child={child} />)
      }

      <div className="tw-mt-10"></div>


    </div>
  )
}
