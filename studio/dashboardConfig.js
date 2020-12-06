export default {
  widgets: [
    {
      name: 'sanity-tutorials',
      options: {
        templateRepoId: 'sanity-io/sanity-template-nextjs-landing-pages'
      }
    },
    {name: 'structure-menu'},
    {
      name: 'project-info',
      options: {
        __experimental_before: [
          {
            name: 'netlify',
            options: {
              description:
                'NOTE: Because these sites are static builds, they need to be re-deployed to see the changes when documents are published.',
              sites: [
                {
                  buildHookId: '5fcd13c7c8d7e301b3d7a31f',
                  title: 'Sanity Studio',
                  name: 'sanity-nextjs-landing-pages-studio-ndboutps',
                  apiId: '6ec2b72d-d227-41f7-bcbe-03244a4f4481'
                },
                {
                  buildHookId: '5fcd13c7ded7dda55ff57a78',
                  title: 'Landing pages Website',
                  name: 'sanity-nextjs-landing-pages-web-mn3egbox',
                  apiId: 'f9c16967-bffb-4437-a63b-6e82b9c95e96'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/KYH00/sanity-nextjs-landing-pages',
            category: 'Code'
          },
          {title: 'Frontend', value: 'https://sanity-nextjs-landing-pages-web-mn3egbox.netlify.app', category: 'apps'}
        ]
      }
    },
    {name: 'project-users', layout: {height: 'auto'}},
    {
      name: 'document-list',
      options: {title: 'Recently edited', order: '_updatedAt desc', limit: 10, types: ['page']},
      layout: {width: 'medium'}
    }
  ]
}
