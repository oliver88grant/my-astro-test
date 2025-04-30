export interface Product {
    id: string
    name: string
    description: string
    shortDescription: string
    price: number
    category: 'online-ups' | 'offline-ups' | 'line-interactive-ups' | 'modular-ups' | 'accessories'
    capacityRange: string
    inputVoltage: string
    outputVoltage: string
    formFactor: string
    runtime: string
    features: string[]
    applications: string[]
    images: string[]
    specs: {
      [key: string]: string | string[]
    }
    slug: string
    isFeatured?: boolean
    isNew?: boolean
    isPopular?: boolean
  }
  
  export interface ProductCategory {
    id: string
    name: string
    description: string
    slug: string
    image: string
  }
  
  export interface Testimonial {
    id: string
    name: string
    company: string
    role: string
    content: string
    image?: string
  }
  
  export interface FAQ {
    question: string
    answer: string
    category?: string
  }