# byjohann.link

My link page. The content lives in the Kirby site behind [johannschopplich.com](https://github.com/johannschopplich/johannschopplich.com) and is edited there.

## How It's Built

- [Nuxt](https://nuxt.com) – the app, rendered on the server
- [nuxt-kirby](https://nuxt-kirby.byjohann.dev) – fetches the page from Kirby with a KQL query and caches the response
- [UnoCSS](https://unocss.dev) – styling

## Development

1. Enable [Corepack](https://github.com/nodejs/corepack) using `corepack enable`
2. Install dependencies using `pnpm install`
3. Copy `.env.example` to `.env` and add the Kirby API token
4. Start the development server using `pnpm run dev` and visit [localhost:3000](http://localhost:3000/)

## Deployment

Every push to `main` builds the app and deploys it to Cloudflare Workers. The cached KQL responses are stored in Workers KV.

## License

[MIT](./LICENSE) License © 2023-PRESENT [Johann Schopplich](https://github.com/johannschopplich)
