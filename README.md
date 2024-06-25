# AstroKit: Minimal

```sh
pnpm create astro@latest -- --template jllahi/astrokit-minimal
```

[![Open in StackBlitz](https://developer.stackblitz.com/img/open_in_stackblitz.svg)](https://stackblitz.com/github/jllahi/astrokit-minimal)
[![Open with CodeSandbox](https://assets.codesandbox.io/github/button-edit-lime.svg)](https://codesandbox.io/p/sandbox/github/jllahi/astrokit-minimal)
[![Open in GitHub Codespaces](https://github.com/codespaces/badge.svg)](https://codespaces.new/jllahi/astrokit-minimal)

[![Deploy with Vercel](https://vercel.com/button)][vercel-deploy]

> 🧑‍🚀 **Seasoned astronaut?** Delete this file. Have fun!

## 🚩 Next steps

- React: pnpm astro add react -y
- Svelte: pnpm astro add svelte -y
- DB: pnpm astro add db -y
- SSR: pnpm astro add vercel -y

## 🚀 Project Structure

Inside of your Astro project, you'll see the following folders and files:

```text
/
├── public/
├── src/
│   └── pages/
│       └── index.astro
└── package.json
```

Astro looks for `.astro` or `.md` files in the `src/pages/` directory. Each page is exposed as a route based on its file name.

There's nothing special about `src/components/`, but that's where we like to put any Astro/React/Vue/Svelte/Preact components.

Any static assets, like images, can be placed in the `public/` directory.

## 🧞 Commands

All commands are run from the root of the project, from a terminal:

| Command                    | Action                                           |
| :------------------------- | :----------------------------------------------- |
| `pnpm install`             | Installs dependencies                            |
| `pnpm dev`                 | Starts local dev server at `localhost:4321`      |
| `pnpm build`               | Build your production site to `./dist/`          |
| `pnpm preview`             | Preview your build locally, before deploying     |
| `pnpm astro ...`           | Run CLI commands like `astro add`, `astro check` |
| `pnpm run astro -- --help` | Get help using the Astro CLI                     |
| `pnpm format`              | Format your code using Prettier                  |
| `pnpm lint`                | Lint your code using Eslint                      |
| `pnpm clean`               | Remove generated code                            |

## 📂 Important files and folders

| File(s)                                     | Description                                             |
| ------------------------------------------- | ------------------------------------------------------- |
| `tailwind.config.mjs`                       | Config file for Tailwind CSS                            |
| `prettier.config.mjs`                       | Config file for Prettier                                |
| `/data/config.ts`                           | Data for config variables used globally                 |
| `/utils/styles.ts`                          | Functions for handling styles                           |
| `/pages/api/preview.ts`                     | Serverless route for triggering Preview mode            |
| `/schemas`                                  | Where Sanity Studio gets its content types from         |
| `/plugins`                                  | Where the advanced Sanity Studio customization is setup |
| `/lib/sanity.api.ts`,`/lib/sanity.image.ts` | Configuration for the Sanity Content Lake client        |
| `/lib/sanity.preview.ts`                    | Configuration for the live Preview Mode                 |

## 👀 Want to learn more?

Feel free to check [our documentation](https://docs.astro.build) or jump into our [Discord server](https://astro.build/chat).

[vercel-deploy]: https://vercel.com/new/clone?repository-url=https%3A%2F%2Fgithub.com%2Fjllahi%2Fastrokit-minimal&repository-name=astrokit-minimal&project-name=astrokit-minimal&demo-title=Astro%20Kit%20Starter&demo-description=Astro-powered%20site%20with%20minimal%20configuration&demo-url=https%3A%2F%2Fastrokit-minimal.vercel.app%2F&demo-image=https%3A%2F%2Fastrokit-minimal.vercel.app%2Freadme.jpg
