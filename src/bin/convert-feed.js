#!/usr/bin/env node
import program from 'commander';
import convert from '../';


program
  .version('0.1.0')
  .description('Do something')
  .arguments('<pathToFile>')
  .option('-o, --out <type>', 'Output format', /^(rss|atom)$/i, 'rss')
  .action(async (pathToFile) => {
    const result = await convert(pathToFile, program.out);
    console.log(result);
  })
  .parse(process.argv);
