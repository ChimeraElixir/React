import React from "react"
import Conversation from "./Conversation"
import useGetConversation from "../../hooks/useGetConversations"

const Conversations = () => {
  const { loading, conversations } = useGetConversation()

  return (
    <div className="py-2 flex flex-col overflow-auto ">
      {loading ? (
        <div className="loading loading-spinner mx-auto my-auto"></div>
      ) : (
        conversations.map((conversation) => (
          <Conversation key={conversation._id} conversation={conversation} />
        ))
      )}
    </div>
  )
}

export default Conversations
