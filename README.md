# South Africa COVID-19 outbreak tracker
Please note all data comes from the official South African Coronavirus website which get their data from the NICD(National Institute for Communicatable Diseases), They are responsible for monitoring and tracking of all covid-19 cases in South Africa. The data on this website is scraped once a day from their website. All past data that appear on the graphs is before we started capturing the data is from wikipedia.

![rsa Covid-19 Dashboard](https://github.com/incrediblejagur/rsa_covid-19/blob/master/client/public/images/screencapture-rsa-covid19-herokuapp-com-1586197169754.png)



## Libraries Used:
 - Chart.js
 - MapboxGL.js
 - Puppeteer
 - Cheerio
 - Axios

## About WebScraper
 ```
The scraper script is run once a day at 11:00PM, once run it updates the data in our database. 
The script uses puppeteer and cheerio to scrape the latest data from https://sacoronavirus.co.za/.
```
 
 ## Built With
 - NodeJS
 - Express
 - MongoDB
 - React
 - Bootstrap

## DataSources:
- [South African Coronavirus News and Information](https://sacoronavirus.co.za/)
- [NICD(National Institure for Communicatable Diseases)](https://www.nicd.ac.za/media/alerts/)
- [Covid-19 South AfricaWikipedia](https://en.wikipedia.org/wiki/Template:2019%E2%80%9320_coronavirus_pandemic_data/South_Africa_medical_cases_chart)

## Versioning

  

`"version": "1.0.0",`

  

## Author

  

- **Daniel Minter** 

  

## License

  

This project is licensed under the ISC License - see the [ISC-LICENSE.md](https://github.com/nevir/readable-licenses/blob/master/markdown/ISC-LICENSE.md) file for details `"license": "ISC"`


