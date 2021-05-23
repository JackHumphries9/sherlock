import arg from "arg";
import chalk from "chalk";

function parseArgumentsIntoOptions(rawArgs: string[]) {
	try {
		const args = arg(
			{
				"--verbose": Boolean,
				"--do": Boolean,
				"-v": "--verbose",
				"-d": "--do",
			},
			{ argv: rawArgs.slice(2) }
		);
		return {
			verbose: args["--verbose"] || false,
			do: args["--do"] || false,
		};
	} catch (e) {
		console.log(
			chalk.redBright("=== Sherlock ===") +
				chalk.reset(
					"\nUsage:\n--verbose (-v): Uses verbose mode.\n--do (-d): Let sherlock minify the files for you.\n"
				)
		);
		process.exit(0);
	}
}

export function cli(args: string[]) {
	let options = parseArgumentsIntoOptions(args);
	console.log(options);

	//targetDirectory = options.targetDirectory || process.cwd();
}
