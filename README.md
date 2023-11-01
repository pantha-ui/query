# @pantha/toast

Pantha is a light library of reusable React components to help you ship faster. It is still in development and more components will be added at regular intervals.

## Documentation


**Import**

```js filename="example.js"
import { useQuery } from "@pantha/query"
```

**Usage**

Call useQuery as a hook and assign it to a variable name of your choice. We used toast here as an example.

```js filename="example.js"
export default () => {
  const toast = useQuery();

  console.log(toast)

  // Suppose URL is https://localhost:3000/?viewMode=dark&role=admin&name=Pantha

  // Console log should return { viewMode: "dark", role: "admin", name: "Pantha" }

  return (
    <div></div>
  );
};
```

## Installation

To use @pantha/query, install the package by running:

```js filename="terminal"
yarn add @pantha/query

# or

npm i @pantha/query

# or

pnpm i @pantha/query
```
