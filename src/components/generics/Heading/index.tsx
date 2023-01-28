import React from 'react'

type PropType = {
    className?: string
    children: React.ReactNode
    variant?: VariantType
}

type VariantType = 'h1' | 'h2' | 'h3' | 'h4'
const variantClasses = {
    h1: 'text-left text-2xl text-black font-bold',
    h2: 'text-left text-xl text-black font-bold',
    h3: 'text-left text-md text-black font-bold',
    h4: 'text-left text-base text-black font-semibold',
}

export const H1 = ({ className, children, variant = 'h1' }: PropType) => {
    return <h1 className={`${className} ${variantClasses[variant]}`}>{children}</h1>
}

export const H2 = ({ className, children, variant = 'h2' }: PropType) => {
    return <h2 className={`${className} ${variantClasses[variant]}`}>{children}</h2>
}

export const H3 = ({ className, children, variant = 'h3' }: PropType) => {
    return <h3 className={`${className} ${variantClasses[variant]}`}>{children}</h3>
}

export const H4 = ({ className, children, variant = 'h4' }: PropType) => {
    return <h4 className={`${className} ${variantClasses[variant]}`}>{children}</h4>
}
