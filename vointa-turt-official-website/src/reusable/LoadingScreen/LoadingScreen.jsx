import React, { Suspense } from 'react'
import { Loader } from './Loader'


export const LoadingScreen = ({ children }) => {
  return <Suspense fallback={<Loader fullscreen />}>{children}</Suspense>
}
