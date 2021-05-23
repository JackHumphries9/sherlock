"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.cli = void 0;
const arg_1 = __importDefault(require("arg"));
const chalk_1 = __importDefault(require("chalk"));
function parseArgumentsIntoOptions(rawArgs) {
    try {
        const args = arg_1.default({
            "--verbose": Boolean,
            "--do": Boolean,
            "-v": "--verbose",
            "-d": "--do",
        }, { argv: rawArgs.slice(2) });
        return {
            verbose: args["--verbose"] || false,
            do: args["--do"] || false,
        };
    }
    catch (e) {
        console.log(chalk_1.default.redBright("=== Sherlock ===") +
            chalk_1.default.reset("\nUsage:\n--verbose (-v): Uses verbose mode.\n--do (-d): Let sherlock minify the files for you.\n"));
        process.exit(0);
    }
}
function cli(args) {
    let options = parseArgumentsIntoOptions(args);
    console.log(options);
}
exports.cli = cli;
//# sourceMappingURL=cli.js.map