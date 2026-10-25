# Instagram Scraper API for Node.js & TypeScript

[![Latest release](https://img.shields.io/github/v/tag/jsonscraper/instagram-api-node?label=release&style=flat-square)](https://github.com/jsonscraper/instagram-api-node/tags)
[![Node.js requirements](https://img.shields.io/badge/Node.js-20%2B-339933?logo=nodedotjs&logoColor=white&style=flat-square)](#quick-start)
[![Last commit](https://img.shields.io/github/last-commit/jsonscraper/instagram-api-node?style=flat-square)](https://github.com/jsonscraper/instagram-api-node/commits)
[![MIT license](https://img.shields.io/github/license/jsonscraper/instagram-api-node?style=flat-square)](LICENSE)

[![Run in Postman](https://run.pstmn.io/button.svg)](https://www.postman.com/jsonscraper/workspace/jsonscraper/collection/52903714-fe84d353-0a19-431f-a39d-1c2640d96fb0)

A small, configurable client with named methods and ready-to-run examples. Supports **97 Instagram Scraper API methods**.

**Package:** `@jsonscraper/instagram` · **[Methods](#main-methods)** · **[Examples](#ready-to-run-examples)** · **[Documentation](docs/guide.md)**

<picture>
  <source media="(max-width: 640px) and (prefers-color-scheme: dark)" srcset="docs/quickstart-mobile-dark.svg">
  <source media="(max-width: 640px)" srcset="docs/quickstart-mobile.svg">
  <source media="(prefers-color-scheme: dark)" srcset="docs/quickstart-dark.svg">
  <img src="docs/quickstart.svg" alt="Quick start: API key, setup, first request, JSON response" width="880">
</picture>

## Quick start

**1. Get your key** from the [Instagram API product page](https://jsonscraper.com/services/ig-scraper-api?utm_source=github&utm_medium=sdk&utm_campaign=instagram-api-node&utm_content=readme) and set it on your server:

```sh
export JSONSCRAPER_INSTAGRAM_LICENSE_KEY='your-license-key'
```

**2. Install the package:**

```sh
npm install github:jsonscraper/instagram-api-node#0.1.1
```

**3. Make a request:**

```javascript
import {Instagram, APIError} from '@jsonscraper/instagram';

const client = new Instagram(process.env.JSONSCRAPER_INSTAGRAM_LICENSE_KEY, {timeout: 30000, retries: 1});
try {
  const response = await client.v1_user_by_username({username: 'apple', cache_timeout: 60});
  if (response.status !== 'ok') throw new Error('The API returned an application error');
  console.log(response.ig);
} catch (error) {
  if (error instanceof APIError) console.error('HTTP', error.status);
  else throw error;
}
```

The API payload is in `ig`. Live calls require a valid API license and may consume quota. [Response examples and status handling](docs/responses.md).

## Main methods

97 methods are available. Common starting points:

| What you need | Method |
| --- | --- |
| Read a profile | `v1_user_by_username()` |
| Read a profile by ID | `v1_user_by_id()` |
| List profile posts | `v1_user_medias_chunk()` |
| Read a post or reel | `v1_media_by_code()` |
| Read comments | `v1_media_comments_chunk()` |
| Search profiles | `v1_search_users()` |

[All methods and parameters →](docs/endpoints.md)

## Ready-to-run examples

- [Read a profile](examples/endpoints/v1_user_by_username.mjs).
- [Read a post or reel](examples/endpoints/v1_media_by_code.mjs).
- [Read comments](examples/endpoints/v1_media_comments_chunk.mjs).
- [Search users](examples/endpoints/v1_search_users.mjs).
- [List profile posts](examples/endpoints/v1_user_medias_chunk.mjs).

Each example includes command-line parameters, key setup, timeouts, error handling and response output. Run it with `--help` first; this makes no API request.

**[Browse all 97 complete examples](examples/README.md)** · **[Full method and parameter reference](docs/endpoints.md)**

## Configuration

Requests use a 30-second timeout by default. Configure caching and retries to fit your application's request budget. Keys are read from your server environment; redirects are disabled.

[Configuration options, HTTP errors, caching and pagination](docs/configuration.md) · [Full integration guide](docs/guide.md)

## Use with ChatGPT and Codex

Prefer an assistant connection? Use the separate [Instagram MCP server](https://jsonscraper.com/mcp/instagram?utm_source=github&utm_medium=sdk&utm_campaign=instagram-api-node&utm_content=mcp). It accepts the same product API license and uses the normal API quota. [MCP source and setup](https://github.com/jsonscraper/instagram-mcp-server).

## Access, pricing and support

The SDK source is **MIT-licensed**. Hosted API access requires a separate Instagram license. Check [current plans and get access](https://jsonscraper.com/services/ig-scraper-api?utm_source=github&utm_medium=sdk&utm_campaign=instagram-api-node&utm_content=readme).

[Service support](https://jsonscraper.com/contacts?utm_source=github&utm_medium=sdk&utm_campaign=instagram-api-node&utm_content=support) · [SDK issues](https://github.com/jsonscraper/instagram-api-node/issues) · [Changelog](CHANGELOG.md) · [MIT license](LICENSE)

## Development

```sh
python3 tests/contract.py
```

Tests use a local/mock server and require no API key. A [GitHub Actions template](docs/github-actions.yml) is available for optional automation.

The SDK has no installation or usage telemetry. README links use campaign parameters for website referral analytics. jsonscraper is independent and is not affiliated with Instagram or Meta.
