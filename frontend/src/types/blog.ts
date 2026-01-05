// Blog document type from Sanity
export interface Blog {
  _id: string
  _type: 'blog'
  title: string
  description?: string
  coverUrl?: string
  coverAlt?: string
  content: PortableTextContent
  category: BlogCategory
  tags: string[]
  _createdAt?: string
  _updatedAt?: string
}

// Blog category type
export type BlogCategory = 'aikhe' | 'acedia' | 'elapse' | 'miscs'

// Portable Text content type
export type PortableTextContent = Array<PortableTextBlock | PortableTextImage>

// Portable Text block type (used in content array)
export interface PortableTextBlock {
  _type: 'block'
  [key: string]: unknown
}

// Portable Text image type (used in content array)
export interface PortableTextImage {
  _type: 'image'
  asset: {
    _ref?: string
    _type?: string
    url?: string
  }
  alt?: string
  caption?: string
}

// Image value type for PortableText component
export interface ImageValue {
  _type: 'image'
  asset: {
    _ref?: string
    _type?: string
  }
  alt?: string
  caption?: string
}
