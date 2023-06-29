# @pantha/toast

Pantha is a light library of reusable React components to help you ship faster. It is still in development and more components will be added at regular intervals.

## Documentation


**Import**

```js filename="example.js"
import { useToast, Toast } from "@pantha/toast"
```

**Usage**

Call useToast as a hook and place Toast as a component in your code.

```js filename="example.js"
export default () => {
  const { toast, items } = useToast();

  const handleNewToast = () =>
    toast({
      bg: "blue.700",
      color: "white",
      info: "Login successful, Redirecting now",
      size: "30rem",
    });

  return (
    <div>
      <h1>Just some random text</h1>
      <Toast items={items} />
      <button onClick={handleNewToast}>New toast</button>
    </div>
  );
};
```

## Installation

To use @pantha/toast, install the package and its peer dependencies by running:

```js filename="terminal"
yarn add @pantha/toast framer-motion react-icons

# or

npm i @pantha/toast framer-motion react-icons
```
