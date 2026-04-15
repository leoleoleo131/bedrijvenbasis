import Link from 'next/link'
import { ComponentProps } from 'react'

type ButtonVariant = 'primary' | 'ghost-dark' | 'ghost-light'

type ButtonProps = {
  variant?: ButtonVariant
  href?: string
  children: React.ReactNode
  className?: string
} & Omit<ComponentProps<'button'>, 'className'>

const variants: Record<ButtonVariant, string> = {
  'primary': 'bg-primary text-black hover:bg-primary-hover',
  'ghost-dark': 'border border-black text-black hover:bg-black hover:text-white',
  'ghost-light': 'border border-white text-white hover:bg-white hover:text-black',
}

const base = 'inline-flex items-center justify-center px-6 py-3 rounded-btn font-medium text-sm transition-colors'

export default function Button({ variant = 'primary', href, children, className = '', ...props }: ButtonProps) {
  const cls = `${base} ${variants[variant]} ${className}`
  if (href) return <Link href={href} className={cls}>{children}</Link>
  return <button className={cls} {...props}>{children}</button>
}
