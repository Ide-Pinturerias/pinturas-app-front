import React from 'react'

const LoadingScreen = ({ isLoading }) => {
  if (!isLoading) return null

  else {
    return (
        <div
            style={{
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center',
              height: '100vh',
              width: '100%',
              backgroundColor: 'transparent'
            }}
        >
            <img
                src="https://i.pinimg.com/originals/6b/e0/89/6be0890f52e31d35d840d4fe2e10385b.gif"
                alt="loading"
            />
        </div>
    )
  }
}

export default LoadingScreen
