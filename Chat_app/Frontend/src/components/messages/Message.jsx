import { useAuthContext } from "../../context/AuthContext"
import { extractTime } from "../../utils/extractTime"
import useConversation from "../../zustand/useConversation"

const Message = ({ message }) => {
  console.log(message)
  const { authUser } = useAuthContext()
  const { selectedConversation } = useConversation()
  const fromMe = message.senderId !== authUser._id
  const formattedTime = extractTime(message.createdAt)
  const chatClassName = fromMe ? "chat-end" : "chat-start"
  const profilePic = fromMe
    ? authUser.profilePic
    : selectedConversation?.profilePic

  return (
    <div className={`chat ${chatClassName}`}>
      {fromMe ? (
        <div className="chat-image avatar">
          <div className="w-10 rounded-full">
            <img
              alt="Tailwind CSS chat bubble component"
              src={authUser.profilePic}
            />
          </div>
        </div>
      ) : (
        <div className="chat-image avatar">
          <div className="w-10 rounded-full">
            <img
              alt="Tailwind CSS chat bubble component"
              src={selectedConversation?.profilePic}
            />
          </div>
        </div>
      )}
      <div
        className={`chat-bubble text-white ${fromMe ? "bg-blue-500" : ""} pb-2`}
      >
        {message.message}
      </div>
      <div className="chat-footer opacity-50 text-xs flex gap-1 items-center">
        {formattedTime}
      </div>
    </div>
  )
}
export default Message