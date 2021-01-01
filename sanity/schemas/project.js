import UserIcon from 'part:@sanity/base/user-icon'

export default {
  name: 'projects',
  title: 'Projects',
  type: 'document',
  icon: UserIcon,
  fields: [
    {
      name: 'name',
      title: 'Name',
      type: 'string',
      description: 'Project title',
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
    {
      name: 'projectElements',
      title: 'Ryan',
      type: 'array',
      of: [
      {
        type: 'reference',
        to: [{type: 'ryan'}]
      }]
    },
  ],
  preview: {
    select: {title: 'name', media: 'image'},
  },
}
