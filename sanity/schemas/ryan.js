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
      name: 'slug',
      title: 'Slug',
      type: 'slug',
      options: {
        source: 'name',
        maxLength: 100,
      },
    },
    {
      name: 'projects',
      title: 'Project',
      type: 'reference',
      to: [{type: 'projects'}]
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
