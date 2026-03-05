'use client'

import { useState, useEffect, useRef } from 'react'
import { ref, push, query, limitToLast, onValue } from 'firebase/database'
import { db } from '../lib/firebase'
import Message from './Message'

export default function Form({ user }) {
  const [userName, setUserName] = useState('')
  const [message, setMessage] = useState('')
  const [list, setList] = useState([])
  const [nameSet, setNameSet] = useState(false)
  const [popupOpen, setPopupOpen] = useState(false)
  const messageRef = useRef(null)

  // Initialize firebase ref once
  if (!messageRef.current) {
    messageRef.current = ref(db, 'messages')
  }

  // Sync user display name from Google auth
  useEffect(() => {
    if (user?.displayName) {
      setUserName(user.displayName)
    }
  }, [user])

  // Listen to messages
  useEffect(() => {
    const q = query(messageRef.current, limitToLast(10))
    const unsubscribe = onValue(q, (snapshot) => {
      if (snapshot.val()) {
        setList(Object.values(snapshot.val()))
      }
    })
    return () => unsubscribe()
  }, [])

  const handleSetName = () => {
    const regex = /^\s+$/gi
    if (!regex.test(userName) && userName !== '') {
      setNameSet(true)
    }
  }

  const handleSend = () => {
    if (message) {
      push(messageRef.current, { userName, message })
      setMessage('')
    }
  }

  return (
    <div className="flex flex-col w-full">
      {/* Username taken popup */}
      {popupOpen && (
        <div
          className="fixed inset-0 bg-black/50 flex items-center justify-center z-50"
          onClick={() => setPopupOpen(false)}
        >
          <div className="bg-white p-6 rounded shadow-lg">
            UserName: <strong>{userName}</strong> is Already Taken. Please Try Again.
          </div>
        </div>
      )}

      {/* Display name row */}
      <div className="flex w-full p-5">
        <input
          className="w-full px-5 py-4 rounded-l-[5px] border border-gray-300 outline-none focus:bg-gray-50/50 box-border"
          type="text"
          placeholder="Guest Display Name"
          value={userName}
          disabled={nameSet}
          onChange={(e) => setUserName(e.target.value)}
          onKeyPress={(e) => e.key === 'Enter' && handleSetName()}
        />
        <button
          className="px-[30px] bg-primary text-white border-0 rounded-r-[5px] outline-none cursor-pointer hover:bg-black/80 disabled:opacity-50"
          disabled={nameSet}
          onClick={handleSetName}
        >
          set
        </button>
      </div>

      {/* Messages list */}
      <div className="w-full px-5">
        {list.map((item, idx) => (
          <Message key={idx} message={item} />
        ))}
      </div>

      {/* Message input row */}
      <div className="flex w-full p-5">
        <input
          className="w-full px-5 py-4 rounded-l-[5px] border border-gray-300 outline-none focus:bg-gray-50/50 box-border"
          type="text"
          placeholder="Type message"
          value={message}
          disabled={!nameSet}
          onChange={(e) => setMessage(e.target.value)}
          onKeyPress={(e) => e.key === 'Enter' && handleSend()}
        />
        <button
          className="px-[30px] bg-primary text-white border-0 rounded-r-[5px] outline-none cursor-pointer hover:bg-black/80 disabled:opacity-50"
          disabled={!nameSet}
          onClick={handleSend}
        >
          send
        </button>
      </div>
    </div>
  )
}
