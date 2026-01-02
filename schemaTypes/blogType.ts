import {defineType, defineField} from 'sanity'

export default defineType({
  name: 'myDocument',
  type: 'document',
  fields: [
    defineField({
      title: 'Title',
      name: 'title',
      type: 'string',
      validation: (Rule) => [
        Rule.required().error('Title is required'),
        Rule.min(3).error('Title must be at least 3 characters long'),
        Rule.max(200).error('Title cannot exceed 200 characters'),
        Rule.custom((value) => {
          if (!value) return true

          // if title is only whitespace
          if (value && value.trim().length === 0) {
            return 'Title cannot be only whitespace'
          }

          // if title has invalid characters
          const invalidChars = /[<>|~@#$%^*[]{}\]/
          if (invalidChars.test(value)) {
            return 'Title contains invalid characters'
          }

          return true
        }),
      ],
    }),
    defineField({
      title: 'Description',
      name: 'description',
      type: 'text',
      description: 'A dramatic description for the Blog',
      validation: (Rule) => [
        Rule.max(5000).error('Description cannot exceed 5000 characters'),
        Rule.custom((value) => {
          if (!value) return true

          if (value && value.trim().length === 0) {
            return 'Description cannot be only whitespace'
          }

          return true
        }),
      ],
    }),
    defineField({
      title: 'Cover Image',
      name: 'cover',
      type: 'image',
      validation: (Rule) => [Rule.required().error('Cover Image is required')],
    }),
    defineField({
      name: 'content',
      type: 'array',
      of: [
        {
          type: 'block',
        },
        {
          type: 'image',
          fields: [
            {
              name: 'alt',
              type: 'string',
              title: 'Alternative text',
              description: 'Important for SEO and accessibility',
              validation: (Rule) => Rule.required().error('Alt text is required for accessibility'),
              options: {
                isHighlighted: true,
              },
            },
            {
              name: 'caption',
              type: 'string',
              title: 'Caption',
            },
          ],
        },
      ],
      validation: (Rule) => [
        Rule.required().error('Content is required'),
        Rule.custom((blocks) => {
          const content = (blocks as any[]) || []

          if (content.length === 0) return true

          // ensure first block is not an image
          if (content[0]?._type === 'image') {
            return 'Please start with text before adding images.'
          }

          return true
        }),
      ],
    }),
  ],
})
