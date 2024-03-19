import { ApexLegendsAPI } from '../src/API.js'

const apexAPI = new ApexLegendsAPI() // No API key provided

let news = apexAPI.getNews().catch(err => console.error(err))

console.log(news)