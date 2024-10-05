import fs from "node:fs";
import path from "node:path";
import { starterTemplate } from "./templates";

type ComponentData = {
    filename: string, 
    content: string
}

const args = process.argv.splice(2);


function help(error?: string) { 
    if(error){
        console.log(error);
    }
}

function generateFile(dir: string, files : ComponentData[]) {

    let folder = path.resolve(dir);
    let componentNumber = 1;
    
    if (!fs.existsSync(folder)) {
        fs.mkdirSync(folder);
    } else { 
        componentNumber = fs.readdirSync(folder).length+1;
    }

    folder = path.resolve(folder, componentNumber.toString());

    fs.mkdirSync(folder);

    for (const {filename , content} of files) {
        fs.writeFileSync(path.resolve(folder , filename), content);
    }

}


if(args.length < 2 ){
    help("Invalid argument length! Provide atleast 2 arguments");
    process.exit();
}

const command = args[0];

switch (command) { 
    case "new": { 
        const category = args[1];
        generateFile(`./data/components/${category}` , starterTemplate(category));
        break;
    }

    default: {
        help("Command not found!");
    }
        
}
