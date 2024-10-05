const infoTemplate = (category : string) => 
`import { Metadata } from "@/lib/types";
import Example from "./example";

const metadata = {
  title: "Demo Title",
  description:
    "Demo description, change this description",
  category: "${category}",
  component: Example,
} satisfies Metadata;

export default metadata;
`

const exampleTemplate = () =>
`
/**
 * CLI Generated Code
 * Note : change the name of your component.
 * Remove this comment.
 */

const example = () => {
    return (
        <>
        // your component goes here...
        </>
    )
}

export default example;
`

export const starterTemplate = (category : string) => { 
    return [

        {
            filename: "info.tsx",
            content: infoTemplate(category)
        },
        {
            filename: "example.tsx",
            content: exampleTemplate()
        }

    ]
}