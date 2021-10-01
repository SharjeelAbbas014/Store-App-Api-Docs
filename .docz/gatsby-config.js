const { mergeWith } = require('docz-utils')
const fs = require('fs-extra')

let custom = {}
const hasGatsbyConfig = fs.existsSync('./gatsby-config.custom.js')

if (hasGatsbyConfig) {
  try {
    custom = require('./gatsby-config.custom')
  } catch (err) {
    console.error(
      `Failed to load your gatsby-config.js file : `,
      JSON.stringify(err),
    )
  }
}

const config = {
  pathPrefix: '/',

  siteMetadata: {
    title: 'Store App Api Docs',
    description: 'My awesome app using docz',
  },
  plugins: [
    {
      resolve: 'gatsby-theme-docz',
      options: {
        themeConfig: {},
        src: './',
        gatsbyRoot: null,
        themesDir: 'src',
        mdxExtensions: ['.md', '.mdx'],
        docgenConfig: {},
        menu: [],
        mdPlugins: [],
        hastPlugins: [],
        ignore: [],
        typescript: false,
        ts: false,
        propsParser: true,
        'props-parser': true,
        debug: false,
        native: false,
        openBrowser: null,
        o: null,
        open: null,
        'open-browser': null,
        root: 'C:\\proj\\FYP\\Docs\\.docz',
        base: '/',
        source: './',
        'gatsby-root': null,
        files: '**/*.{md,markdown,mdx}',
        public: '/public',
        dest: '.docz/dist',
        d: '.docz/dist',
        editBranch: 'master',
        eb: 'master',
        'edit-branch': 'master',
        config: '',
        title: 'Store App Api Docs',
        description: 'My awesome app using docz',
        host: 'localhost',
        port: 3000,
        p: 3000,
        separator: '-',
        paths: {
          root: 'C:\\proj\\FYP\\Docs',
          templates:
            'C:\\proj\\FYP\\Docs\\node_modules\\docz-core\\dist\\templates',
          docz: 'C:\\proj\\FYP\\Docs\\.docz',
          cache: 'C:\\proj\\FYP\\Docs\\.docz\\.cache',
          app: 'C:\\proj\\FYP\\Docs\\.docz\\app',
          appPackageJson: 'C:\\proj\\FYP\\Docs\\package.json',
          appTsConfig: 'C:\\proj\\FYP\\Docs\\tsconfig.json',
          gatsbyConfig: 'C:\\proj\\FYP\\Docs\\gatsby-config.js',
          gatsbyBrowser: 'C:\\proj\\FYP\\Docs\\gatsby-browser.js',
          gatsbyNode: 'C:\\proj\\FYP\\Docs\\gatsby-node.js',
          gatsbySSR: 'C:\\proj\\FYP\\Docs\\gatsby-ssr.js',
          importsJs: 'C:\\proj\\FYP\\Docs\\.docz\\app\\imports.js',
          rootJs: 'C:\\proj\\FYP\\Docs\\.docz\\app\\root.jsx',
          indexJs: 'C:\\proj\\FYP\\Docs\\.docz\\app\\index.jsx',
          indexHtml: 'C:\\proj\\FYP\\Docs\\.docz\\app\\index.html',
          db: 'C:\\proj\\FYP\\Docs\\.docz\\app\\db.json',
        },
      },
    },
  ],
}

const merge = mergeWith((objValue, srcValue) => {
  if (Array.isArray(objValue)) {
    return objValue.concat(srcValue)
  }
})

module.exports = merge(config, custom)
