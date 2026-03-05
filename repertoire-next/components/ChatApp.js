'use client'

import { useState, useEffect } from 'react'
import Form from './Form'

export default function ChatApp() {
  const [user, setUser] = useState(null)

  return (
    <div className="text-center">
      <div className="bg-primary py-5 px-5 text-white">
        <h2 className="text-white">Talk To Me</h2>
      </div>
      <div className="w-full max-w-[600px] py-5 px-5 mx-auto">
        <Form user={user} />
      </div>
    </div>
  )
}
