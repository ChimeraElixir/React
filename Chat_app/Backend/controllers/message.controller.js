import Message from "../models/message.model.js"
import Conservation from "../models/conversation.model.js"

export const sendMessage = async (req, res) => {
  try {
    const { message } = req.body
    const senderId = req.user._id
    const receiverId = req.params.id

    let conversation = await Conservation.findOne({
      participants: {
        $all: [senderId, receiverId],
      },
    })

    if (!conversation) {
      conversation = new Conservation({
        participants: [senderId, receiverId],
      })
    }

    const newMessage = new Message({
      senderId,
      receiverId,
      message,
    })

    if (newMessage) {
      conversation.messages.push(newMessage._id)
    }

    await Promise.all([conversation.save(), newMessage.save()])

    res.status(201).json(newMessage)
  } catch (error) {
    console.log("Error in send message", error.message)
    res.status(500).json({ error: error.message })
  }
}

export const getMessages = async (req, res) => {
  try {
    const senderId = req.user._id
    const receiverId = req.params.id

    const conversation = await Conservation.findOne({
      participants: {
        $all: [senderId, receiverId],
      },
    }).populate("messages")
    if (!conversation) return res.status(200).json([])

    res.status(200).json(conversation.messages)
  } catch (error) {
    console.log("Error in get message", error.message)
    res.status(500).json({ error: error.message })
  }
}