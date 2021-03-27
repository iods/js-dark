const execa = require("execa");
const path = require("path");

module.exports = function(plop) {
    // controller generator
    plop.setGenerator("node", {
        description: "Application scaffolding",
        prompts: [
            {
                type: "input",
                name: "name",
                message: "package name",
                default: "template-test",
            },
            {
                type: "input",
                name: "desc",
                message: "package description",
                default: "This package is just a test",
            },
            {
                type: "input",
                name: "author",
                message: "author name",
                default: "Adam Powers",
            },
            {
                type: "input",
                name: "email",
                message: "author email",
                default: "apowers@ato.ms",
            },
            {
                type: "input",
                name: "githubName",
                message: "github user name",
                default: "apowers313",
            },
            {
                type: "input",
                name: "year",
                message: "what year is it?",
                default: "2021",
            },
        ],
        actions: [
            {
                type: "addMany",
                templateFiles: [
                    "templates/**/*",
                ],
                globOptions: {
                    dot: true,
                },
                destination: "../{{name}}",
            },
            async function gitInit(answers) {
                let {stdout, stderr} = await execa("git", ["init"], {
                    cwd: path.resolve("..", answers.name),
                });
                return stdout || stderr;
            },
            async function gitRemote(answers) {
                const remoteUrl = `https://github.com/${answers.githubName}/${answers.name}`;
                await execa("git", ["remote", "add", "origin", remoteUrl], {
                    cwd: path.resolve(__dirname, "..", answers.name),
                });
                return `Git Remote URL: ${remoteUrl}`;
            },
            async function npmInstall(answers) {
                let {stderr} = await execa("npm", ["install"], {
                    cwd: path.resolve(__dirname, "..", answers.name),
                    stdout: process.stdout,
                    stderr: process.stderr,
                });
                return stderr || "";
            },
            async function instructions(answers) {
                console.log("\n\nTO FINISH INSTALLING:");
                console.log(`Create repo "${answers.name}": https://github.com/new`);
                console.log(`Description: ${answers.desc}`);
                console.log("----------------------");
                console.log(`cd ../${answers.name}`);
                console.log("git add *");
                console.log("git add .??*");
                console.log("git commit -a");
                console.log("git push origin master");
                console.log("\n");
            },
        ],
    });
};
