import { Options } from "arg";
import chalk from "chalk";
import fs from "fs";
import path from "path";
import { promisify } from "util";

const access = promisify(fs.access);

async function createFileTree(options: CLIOptions) {}

export async function sherlock(options: CLIOptions) {
	options = {
		...options,
		targetDirectory: options.targetDirectory || process.cwd(),
	};

	try {
		await access(options.targetDirectory, fs.constants.R_OK);
	} catch (err) {
		console.error(
			"%s The target directory cannot be accessed. Please make sure you have the correct user privilage level.",
			chalk.red.bold("ERROR")
		);
		process.exit(1);
	}

	console.log("Scanning project files...");
	await createFileTree(options);
}
