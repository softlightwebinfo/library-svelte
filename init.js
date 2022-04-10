import * as fs from "fs";

const path = "src/lib/components/index.ts";

let files = fs.readdirSync("src/lib/components")
files = files.filter(i => i !== "index.ts")

const template = (files) => {
  return `
  ${files.map(file => `import ${file.split(".svelte")[0]} from "./${file}";`).join("\n")}
export { ${files.map(file => file.split(".svelte")[0]).join(", ")} };
`.trim();
};

fs.writeFileSync(path, template(files));

const path2 = "src/lib/apps/index.ts";

let files2 = fs.readdirSync("src/lib/apps")
files2 = files2.filter(i => i !== "index.ts")

fs.writeFileSync(path2, template(files2));
