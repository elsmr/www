import {
  FunctionComponent,
  ReactNode,
  useEffect,
  useRef,
  useState,
} from 'react'
import { createPortal } from 'react-dom'

export const ClientOnlyPortal: FunctionComponent<{
  selector: string
  children: ReactNode
}> = ({ children, selector }) => {
  const ref = useRef<HTMLElement | null>(null)
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    ref.current = document.querySelector(selector)
    setMounted(true)
  }, [selector])

  return mounted ? createPortal(children, ref.current) : null
}
