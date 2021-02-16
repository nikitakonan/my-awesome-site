import React, { useEffect, useState } from "react"
import Cookie from "js-cookie"
import "./styles.css"

export const Gdpr = () => {
  const [isAccepted, setIsAccepted] = useState(false)

  useEffect(() => {
    const cookieValue = Cookie.get("gatsby-gdpr-google-tagmanager")
    setIsAccepted(cookieValue === "true")
  }, [])

  const handleAccept = () => {
    Cookie.set("gatsby-gdpr-google-tagmanager", true, {
      expires: 1000,
    })
    setIsAccepted(true)
  }

  return isAccepted ? null : (
    <div className="gdpr-wrapper">
      <p className="gdpr-text">GDPR</p>
      <button onClick={handleAccept} className="btn">
        Accept
      </button>
    </div>
  )
}
