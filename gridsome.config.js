// This is where project configuration and plugin options are located.
// Learn more: https://gridsome.org/docs/config

// Changes here require a server restart.
// To restart press CTRL + C in terminal and run `gridsome develop`

module.exports = {
  siteName: 'MyGridsome',
  plugins: [
    {
      use: 'gridsome-source-storyblok',
      options: {
        client: {
          accessToken: 'mBDrO1IORtNxqQClaNpwfwtt' // you must be replace with your token
        },
        version: 'draft',
        typeName: 'StoryblokEntry'
      }
    }
  ]
}
