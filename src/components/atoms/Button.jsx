import React, { forwardRef } from 'react'
import { cn } from '@/utils/cn'

const Button = forwardRef(({ 
  children, 
  variant = 'primary', 
  size = 'md', 
  className,
  disabled,
  ...props 
}, ref) => {
  const baseClasses = 'inline-flex items-center justify-center font-medium transition-all duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 relative overflow-hidden transform-gpu'
  
  const variants = {
    primary: 'bg-primary-500 text-white hover:bg-primary-600 focus-visible:ring-primary-500 hover:shadow-button-hover hover:scale-105 hover:-translate-y-0.5 active:scale-95 active:translate-y-0',
    secondary: 'bg-white text-primary-500 border border-primary-500 hover:bg-primary-50 focus-visible:ring-primary-500 hover:shadow-lg hover:scale-105 hover:-translate-y-0.5 active:scale-95 active:translate-y-0 hover:border-primary-600',
    outline: 'border border-gray-300 bg-white text-gray-700 hover:bg-gray-50 focus-visible:ring-gray-500 hover:shadow-md hover:scale-105 hover:-translate-y-0.5 active:scale-95 active:translate-y-0 hover:border-gray-400',
    ghost: 'text-gray-700 hover:bg-gray-100 focus-visible:ring-gray-500 hover:scale-105 active:scale-95',
    danger: 'bg-red-500 text-white hover:bg-red-600 focus-visible:ring-red-500 hover:shadow-lg hover:scale-105 hover:-translate-y-0.5 active:scale-95 active:translate-y-0'
  }
  
  const sizes = {
    sm: 'px-3 py-2 text-sm rounded-md',
    md: 'px-4 py-2 text-sm rounded-lg',
    lg: 'px-6 py-3 text-base rounded-lg',
    xl: 'px-8 py-4 text-lg rounded-xl'
  }

  const shimmerEffect = variant === 'primary' ? 'before:absolute before:inset-0 before:-translate-x-full before:bg-gradient-to-r before:from-transparent before:via-white/20 before:to-transparent hover:before:translate-x-full before:transition-transform before:duration-700' : '';
  
  return (
    <button
      ref={ref}
      className={cn(
        baseClasses,
        variants[variant],
        sizes[size],
        shimmerEffect,
        className
      )}
      disabled={disabled}
      {...props}
    >
      {children}
    </button>
  )
})

Button.displayName = 'Button'

export default Button