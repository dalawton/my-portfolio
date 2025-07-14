import { useEffect } from 'react'

export default function Stars() {
  useEffect(() => {
    const createStars = () => {
      const starsContainer = document.querySelector('.stars')
      if (!starsContainer) return

      for (let i = 0; i < 100; i++) {
        const star = document.createElement('div')
        star.className = 'star'
        star.style.left = Math.random() * 100 + '%'
        star.style.top = Math.random() * 100 + '%'
        star.style.animationDelay = Math.random() * 3 + 's'
        starsContainer.appendChild(star)
      }
    }

    createStars()
  }, [])

  return <div className="stars"></div>
}