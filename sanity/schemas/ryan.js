import UserIcon from 'part:@sanity/base/user-icon'

export default {
  name: 'ryan',
  title: 'Ryan',
  type: 'document',
  icon: UserIcon,
  fields: [
    {
      name: 'name',
      title: 'Name',
      type: 'string',
      description: 'What is this a photo of',
    },
    {
      title: 'Summary',
      name: 'summary',
      type: 'text',
      description: 'Why does it exist',
    },
    {
      title: 'Date',
      name: 'date',
      type: 'date',
     
    },
    {
      title: 'Height',
      name: 'height',
      type: 'number',
      validation: Rule => Rule.required().min(1).max(5).integer().positive()
     
    },
    {
      title: 'Width',
      name: 'width',
      type: 'number',
      validation: Rule => Rule.required().min(1).max(5).integer().positive()
     
    },
    {
      name: 'slug',
      title: 'Slug',
      type: 'slug',
      options: {
        source: 'name',
        maxLength: 100,
      },
    },
    {
      name: 'image',
      title: 'Image',
      type: 'image',
      options: {
        hotspot: true,
      },
    },
  ],
  preview: {
    select: {title: 'name', media: 'image'},
  },
}
