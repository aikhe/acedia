import {defineType, defineField} from 'sanity'

export default defineType({
  name: 'myDocument',
  type: 'document',
  fields: [
    defineField({
      name: 'title',
      type: 'text',
    }),
    defineField({
      name: 'cover',
      type: 'image',
    }),
    defineField({
      name: 'content',
      type: 'array',
      of: [
        {
          type: 'block', // Standard rich text
        },
        {
          type: 'image', // This adds image blocks!
          fields: [
            {
              name: 'alt',
              type: 'string',
              title: 'Alternative text',
              description: 'Important for SEO and accessibility',
              options: {
                isHighlighted: true, // Shows the field prominently
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
    }),
  ],
})
