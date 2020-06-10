export default {
  widgets: [
    {
      name: 'sanity-tutorials',
      options: {
        templateRepoId: 'sanity-io/sanity-template-gatsby-portfolio'
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
                  buildHookId: '5ee0d9ac49d3c96c215ce808',
                  title: 'Sanity Studio',
                  name: 'sanity-gatsby-portfolio-studio-jm38bo8f',
                  apiId: '0ca21d19-828e-4db3-8aad-8dc991c17a16'
                },
                {
                  buildHookId: '5ee0d9acf3a5918a5152c7ce',
                  title: 'Portfolio Website',
                  name: 'sanity-gatsby-portfolio-web-bw9ko962',
                  apiId: '08b9035f-670a-4bf0-a12d-4cb8f226b7e4'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/hcdw/sanity-gatsby-portfolio',
            category: 'Code'
          },
          {
            title: 'Frontend',
            value: 'https://sanity-gatsby-portfolio-web-bw9ko962.netlify.app',
            category: 'apps'
          }
        ]
      }
    },
    {name: 'project-users', layout: {height: 'auto'}},
    {
      name: 'document-list',
      options: {title: 'Recent projects', order: '_createdAt desc', types: ['sampleProject']},
      layout: {width: 'medium'}
    }
  ]
}
