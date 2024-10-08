import React from "react"
import Sidebar from "../../components/sidebar/Sidebar"
import MessageContainer from "../../components/messages/MessageContainer"

const Home = () => {
  return (
    <div className="flex sm:h-[450px] md:h-[650px] rounded-lg overflow-hidden border border-slate-300 p-2 ">
      <Sidebar />
      <MessageContainer />
    </div>
  )
}

export default Home
