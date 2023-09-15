'use client'

import { useContext, useEffect, useState } from 'react'

import cn from '@/lib/cn'

import { ScrollContext } from './scroll-observer'

const ScrollProgressBar = () => {
  const [width, setWidth] = useState(0)
  const { scrollY, scrollHeight } = useContext(ScrollContext)

  useEffect(() => {
    const el = document.documentElement
    const percent = (scrollY / (scrollHeight - el.clientHeight)) * 100

    setWidth(percent)
  }, [setWidth, scrollHeight, scrollY])

  return (
    <div
      className={cn('fixed top-0 left-0 h-1 z-50')}
      style={{ width: `${width}%` }}
    />
  )
}

export default ScrollProgressBar
