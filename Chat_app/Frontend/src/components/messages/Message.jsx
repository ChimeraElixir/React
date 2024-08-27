import React from "react"

const Message = () => {
  return (
    <div className="chat chat-end mr-3">
      <div className="chat-image avatar">
        <div className="w-10 rounded-full">
          <img
            src="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.webp"
            alt="user avatar"
          />
        </div>
      </div>
      <div className={`chat-bubble text-white bg-blue-500`}>Hi whats up</div>
      <div className="chat-footer text-sx opacity-50 flex gap-1 items-center"> 12:00</div>
    </div>
  )
}

export default Message
