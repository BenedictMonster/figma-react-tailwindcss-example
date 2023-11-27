# Figma Plugin React Tailwindcss Example

An example project for the Figma plugin with React.js, React Router, and Tailwind CSS.

<img src="https://github.com/BenedictMonster/figma-react-tailwindcss-example/blob/main/img/Screenshot-2023-11-28.gif" width="300" alt="A screenshot of this plugin.">

## Development Guide

### Pre-requisites

- [Node.js](https://nodejs.org) – v18
- [Figma desktop app](https://figma.com/downloads/)

### Build the plugin

Clone this project, and then...

To install dependencies:

```
$ yarn install
```

To build the plugin:

```
$ yarn run build
```

This will generate a `dist/` directory containing the JavaScript bundles for the plugin.

To watch for code changes and rebuild the plugin automatically:

```
$ yarn run watch
```

To upgrade packages:

```
npm install -g syncyarnlock
yarn upgrade --latest
syncyarnlock -s -k
```

### Install the plugin

1. In the Figma desktop app, open a Figma document.
2. Search for and run `Import plugin from manifest…` via the Quick Actions search bar.
   - Location of the action: `Menu bar` > `Plugins` > `Development` > `Import plugin from manifest…`
3. Select the `manifest.json` file.

### Debugging

Use `console.log` statements to inspect values in your code.

To open the developer console, search for and run `Open Console` via the Quick Actions search bar.

- Location of the action: `Menu bar` > `Plugins` > `Development` > `Show/Hide console`

## See also

Official docs and code samples from Figma:

- [Plugin API docs](https://figma.com/plugin-docs/)
- [`figma/plugin-samples`](https://github.com/figma/plugin-samples#readme)

I referenced the project's configuration and structure below.

Figma plugin boilerplates with React.js, TailwindCSS

- https://github.com/hseoy/figma-plugin-react-boilerplate

Routing on Figma plugin.

- https://reactrouter.com/en/main/router-components/memory-router

Related to Tailwind CSS

- https://github.com/bricks-cloud/figma-plugin-tailwindcss-template
- https://github.com/tailwindlabs/tailwindcss-forms
- https://tailwindcss-forms.vercel.app/

## Problems

- When Hot-Reload doesn't work...
  - If a plugin doesn't reload itself on Figma, press `command + option + p` to re-run the last plugin. -> This works for me. But I'm not satisfied with this solution...
  - https://forum.figma.com/t/hot-reload-not-working-with-react/46831 -> This doesn't work for me.
  - https://www.reactjunkie.com/react-graphql-figma-plugin -> I didn't test yet.
