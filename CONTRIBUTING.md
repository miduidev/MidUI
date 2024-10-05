# Contributing

Thanks for showing interest to contribute to MidUI ❤️, you rock!

When it comes to open source, there are different ways you can contribute, all of which are valuable. Here's a few guidelines that should help you as you prepare your contribution.

## Add new component to the collection

To add new components you need to follow the steps

**NOTE** - ALL CHANGES ARE DONE ONLY IN DEV BRANCH!

- Open an issue on the repository with :

  - Details of component
  - Figma link to component
  - Example image

- Once its approved by mods you can proceed with adding the code into the **dev** branch of midui.

- There are 2 ways to create new components
## Init Components using CLI
- To add a new component run 
- Keep the category name in lowercase

```js
// Make sure you replace {CATEGORY} with category name
pnpm run cli new {CATEGORY}

// Example
pnpm run cli new input
```

- This will add the sample code to `(/data/components/{CATEGORY})`
- Edit the files with required component data
- Additionally you can add `example(.html/.jsx/.vue)` files inside that folder.
- After approving the edits your code will be merged into the repository.

## Init Components Manually
- To add a new component go to `(/data/components)`
- Find the Category
- Make a new folder by incrementing the number i.e if 1 exists make new folder with name 2
- Add `info.tsx` file (very important) with vaild syntax
```ts
// info.tsx
// This file is required.
import { Metadata } from "@/lib/types";
import Example from "./example"; // importing your component

const metadata = {
  title: "Accordion",
  description:
    "A sleek Accordion component designed with TailwindCSS for clear, responsive, and user-friendly collapsible sections.",
  category: "accordion",
  component: Example, // At least 1 component must be present
} satisfies Metadata;

export default metadata;

```
- Make `example.tsx` (your component file)
- Add required contents.
- Additionally you can add `example(.html/.jsx/.vue)` files inside that folder.
- After approving the edits your code will be merged into the repository.

## Edit MidUI Source
We are working on a guide for this but you're free to open an issue for bugs/features.

## Updating the docs

To update the docs you can directly change (issue creation not required) the files in the folder `(/data/docs)`.

**Note you can not create new docs files without creating a new issue.**
