import React from "react"
import { ethers } from 'ethers'

type Props = {
    account : string,
    setAccount: any
}
const NavBar = (props : Props) => {
    const connectWallet = async () => {
        // alert("clicked")
        const acc = await window.ethereum.request({method : 'eth_requestAccounts'})
        const account = ethers.getAddress(acc[0])
        props.setAccount(account)
    }
    return (
        <nav className="bg-white border-gray-200 dark:bg-gray-900">
            <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4"><h1 className="self-center text-2xl font-bold whitespace-nowrap text-purple-800">Token Tix</h1>
           

            {props.account ? (
         <button className="relative inline-flex items-center justify-center p-0.5 mb-2 me-2 overflow-hidden text-sm font-medium text-gray-900 rounded-lg group bg-gradient-to-br from-purple-500 to-pink-500 group-hover:from-purple-500 group-hover:to-pink-500 hover:text-white dark:text-white focus:ring-4 focus:outline-none focus:ring-purple-200 dark:focus:ring-purple-800">
         <span className="relative px-5 py-2.5 transition-all ease-in duration-75 bg-white dark:bg-gray-900 rounded-md group-hover:bg-opacity-0">
         {props.account.slice(0,7) + '...' + props.account.slice(38,42)}
         </span>
         </button>
      ) : (
        <button className="relative inline-flex items-center justify-center p-0.5 mb-2 me-2 overflow-hidden text-sm font-medium text-gray-900 rounded-lg group bg-gradient-to-br from-purple-500 to-pink-500 group-hover:from-purple-500 group-hover:to-pink-500 hover:text-white dark:text-white focus:ring-4 focus:outline-none focus:ring-purple-200 dark:focus:ring-purple-800" onClick={connectWallet}>
         <span className="relative px-5 py-2.5 transition-all ease-in duration-75 bg-white dark:bg-gray-900 rounded-md group-hover:bg-opacity-0">
         Connect
         </span>
         </button>
      )}</div>
            
        </nav>
    )
}
export default NavBar