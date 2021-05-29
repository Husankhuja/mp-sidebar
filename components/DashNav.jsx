/* eslint-disable jsx-a11y/label-has-associated-control */
/* eslint-disable jsx-a11y/no-noninteractive-element-interactions */
/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
import React, { useEffect, useState } from 'react';
import { FaBars, FaRegEnvelope, FaRegUser, FaSearch } from 'react-icons/fa';
import { BiMenuAltLeft } from 'react-icons/bi';
import { MdDateRange } from 'react-icons/md';
import { IoMoonOutline, IoSettingsOutline } from 'react-icons/io5';
import { IoIosLogOut } from 'react-icons/io';
import { FcMoneyTransfer } from 'react-icons/fc';
import { BsBell } from 'react-icons/bs';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import { FiSun } from 'react-icons/fi';
// import { useHistory } from 'react-router';
import Notifications from './Notifications';
import UserDropDown from './UserDropDown';

import Styles from '../styles/dashnav.module.css';

const Navbar = ({ Open = false, setOpen, user }) => {
    const [notice, setNotice] = useState(false);
    const [Log, setLog] = useState(false);
    const [message, setMessage] = useState(false);
    //   const { profileImage } = user;
    // const history = useHistory();

    useEffect(() => {
        setOpen(false);
    }, []);

    return (
        <div className={Styles.DashNavContainer} >
            <div
                className={` tw-w-full tw-h-16 tw-col-start-1 tw-bg-white lg:tw-col-start-3 tw-col-end-13  tw-row-start-1 tw-row-end-2   tw-shadow-2xl tw-border-b tw-border-gray-200 `}
            >
                <ToastContainer />
                <div className="tw-flex tw-justify-between tw-items-center  ">
                    <div
                        className="tw-flex tw-items-center tw-pt-1
          tw-justify-center"
                    >
                        {!Open && (<div
                            className="burger tw-ml-4 tw-text-xl tw-mt-1.5 tw-cursor-pointer"
                            onClick={() => setOpen(!Open)}
                        >
                            <BiMenuAltLeft />
                        </div>)}

                    </div>



                    <div className="tw-flex tw-items-center tw-justify-center tw-pt-3 tw-mr-10">

                        <div className="tw-relative">
                            <BsBell
                                className="tw-text-xl tw-z-10 tw-mr-6 tw-cursor-pointer "
                                onClick={() => { setNotice(!notice); if (Log == true) { setLog(false) } }}
                            />
                            <span className="tw-bg-hover tw-nimate-pulse tw-transition tw-duration-1000 tw-ease-in-out tw-absolute tw-z-0 tw-text-xs tw-text-white  tw-right-4 tw-px-1 tw-rounded-full tw--top-2">
                                {' '}
              5
            </span>



                            <div className={`${notice ? 'tw-block' : 'tw-hidden'}`}>

                                <div
                                    className={` tw-absolute tw-top-10  tw-right-3 tw-shadow-md  tw-rounded-md tw-bg-white  tw-z-20 tw-w-64 tw-md:w-80`}
                                >
                                    <div className="tw-header tw-flex tw-text-sm tw-justify-between tw-border-b tw-border-gray-200 tw-p-2 ">
                                        <span className=" tw-font-bold">Notification</span>
                                        <a href="/#all" className="tw-text-gray-600 hover:tw-text-primary-200 tw-transition tw-duration-500 tw-ease-in-out tw-transform">
                                            Mark all as read
                  </a>
                                    </div>


                                    {/* notifications */}

                                    <div className="tw-max-h-64 tw-overflow-auto">
                                        <Notifications />
                                        <Notifications />
                                        <Notifications />
                                        <Notifications />
                                    </div>

                                    <div className="footer tw-flex tw-bg-gray-50 tw-items-center tw-justify-center tw-p-2 hover:tw-bg-profileDark hover:tw-text-white  tw-rounded-md tw-rounded-t-none tw-transition tw-duration-500 tw-ease-in-out tw-transform">
                                        <a
                                            href="#href"
                                            className="tw-capitalize tw-text-main tw-text-gray-600 tw-items-center tw-flex tw-text-sm"
                                        >
                                            View all messages
                  </a>
                                    </div>

                                </div>
                            </div>

                        </div>



                        <UserDropDown setNotice={setNotice} Log={Log} setLog={setLog} notice={notice} profilePicture={"/pic.png"} />

                    </div>
                </div>
            </div>
        </div>
    );
};

export default Navbar;
