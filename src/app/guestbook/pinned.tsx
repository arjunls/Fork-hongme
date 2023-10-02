import { IconPinnedFilled } from '@tabler/icons-react'
import React from 'react'

const Pinned = () => {
  return (
    <div className='relative mb-12 rounded-lg border border-transparent bg-background p-4 after:absolute after:-inset-0.5 after:-z-10 after:rounded-[9px] after:bg-rainbow-gradient after:content-[""]'>
      <div className='mb-3 flex items-center gap-2'>
        <IconPinnedFilled className='rotate-45' />
        Pinned
      </div>
      <div>
        Hey there! Thanks for visiting my website. If you have a moment,
        I&apos;d love to hear your thoughts on my work. Please log in with your
        GitHub account to leave a comment. Thanks!
      </div>
    </div>
  )
}

export default Pinned
