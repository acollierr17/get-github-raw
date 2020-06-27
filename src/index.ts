import { getRawURL } from './raw.ts';

const regex = /https:\/\/github.com\/[^\/]+\/[^\/]+/;

if (Deno.args.length !== 1) throw new Error('Need a GitHub URL!');

const url = Deno.args[0];
if (!regex.test(url)) throw new Error('Not a valid GitHub URL!');

console.log('Input:', url); 
console.log('Output:', getRawURL(url));
