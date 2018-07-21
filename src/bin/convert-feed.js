#!/usr/bin/env node
import program from 'commander';
import FeedConverter from '../FeedConverter';


program
  .version('0.1.0')
  .description('Do something')
  .arguments('<pathToFile>')
  .option('-o, --out <type>', 'Output format', (format, supportedFormats) => {
    // return supportedFormats.includes(format) ? format : null
    // console.log('-----');
    // console.log(a);
    // console.log(supportedFormats);
    // console.log('-----');
    // return a;
  }, ['rss', 'atom'])
  .action((pathToFile) => {
    const feedConverter = new FeedConverter(pathToFile);
    feedConverter.toRss();
    console.log(program.out);
  })
  .parse(process.argv);
