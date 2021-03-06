module.exports = function (api) {
  api.loadSource(({ addCollection }) => {
    // Use the Data Store API here: https://gridsome.org/docs/data-store-api/
  })
 
  api.createPages(async ({ graphql, createPage }) => {
    // load data from Storblok API
    const { data } = await graphql(`{
      allStoryblokEntry {
        edges {
          node {
            id
            full_slug
          }
        }
      }
    }`)
 
    // for each content found create a page
    data.allStoryblokEntry.edges.forEach(({ node }) => {
      if (node.full_slug === 'home') {
        createPage({
          path: '/',
          component: './src/templates/StoryblokEntry.vue',
          context: {
            id: node.id
          }
        })
      }
      createPage({
        path: `/${node.full_slug}`,
        component: './src/templates/StoryblokEntry.vue',
        context: {
          id: node.id
        }
      })
    })
  })
}
