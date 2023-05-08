import React, { useState, useEffect } from 'react'
import axios from 'axios'

const InstagramFeed = () => {
  const [feed, setFeed] = useState([])

  const fetchInstagramFeed = async () => {
    try {
      const response = await axios.get(
        `https://graph.instagram.com/me/media?fields=id,caption,media_type,media_url,thumbnail_url,permalink,timestamp&access_token=${process.env.REACT_APP_IG_ACCESS_TOKEN}`
      )

      if (response.data && response.data.data) {
        setFeed(response.data.data.slice(0, 10)) // Only get the first ten items
      }
    } catch (error) {
      console.error('Error fetching Instagram feed:', error)
    }
  }

  useEffect(() => {
    fetchInstagramFeed()
  }, [])

  return (
    <div>
      <p className='text-center font-semibold text-2xl p-10 mt-10'>Instagram</p>
      <div className='instagram-feed justify-center grid md:grid-cols-4 lg:grid-cols-5 gap-2'>
        {feed.map((post) => (
          <div key={post.id} className='instagram-post'>
            {post.media_type === 'IMAGE' ||
            post.media_type === 'CAROUSEL_ALBUM' ? (
              <div>
                <img
                  src={post.media_url}
                  alt={post.caption}
                  className='h-[250px] w-[250px] bg-cover object-cover'
                />
              </div>
            ) : (
              <video controls src={post.media_url} />
            )}
          </div>
        ))}
      </div>
    </div>
  )
}

export default InstagramFeed
