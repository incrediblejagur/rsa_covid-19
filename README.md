# South Africa COVID-19 outbreak tracker/visualisation
Please note all the latest data comes from the official South African Coronavirus website which get their data from the NICD(National Institute for Communicatable Diseases), They are responsible for monitoring and tracking of all covid-19 cases in South Africa. Past data was taken from wikipedia and checked thoroughly with diffrent sources to see if it was correct(before i started capturing it on a daily basis). 


## Libraries Used:
 - Chart.js
 - MapboxGL.js
 - Puppeteer
 - Cheerio
 - Axios

## About WebScraper
 ```
This is run every 10min and if changes are found it updates the data in our database.(heroku scheduler)
The script uses puppeteer and cheerio to scrape the latest data from https://sacoronavirus.co.za/.
To make it update in intervals locallay you can use the 'setInterval method' and run the automate.js script.
```
 
 ## Built With
 - NodeJS
 - Express
 - MongoDB
 - React
 - Bootstrap
 
 ## API

| Data                                                  | URL                                                   |
| ----------------------------------------------------- | ----------------------------------------------------- |
| Total Tests Conducted, Cases, Recoveries and Deaths   | http://rsa-covid19.herokuapp.com/api/all-stats        |
| Cases by province                                     | http://rsa-covid19.herokuapp.com/api/province-stats   |
| Cases by province(GeoJSON Data)                       | http://rsa-covid19.herokuapp.com/api/geojson          |
| Latest/Average increase in cases                      | http://rsa-covid19.herokuapp.com/api/extra-stats       |


## Data Sources:
- [South African Coronavirus News and Information](https://sacoronavirus.co.za/)
- [Data Science for Social Impact Research Group @ University of Pretoria
](https://dsfsi.github.io/)
- [Covid-19 South Africa Wikipedia](https://en.wikipedia.org/wiki/Template:2019%E2%80%9320_coronavirus_pandemic_data/South_Africa_medical_cases_chart)



 

## Author

  

- [incrediblejagur](github.com/incrediblejagur)

  

## License

  

This project is licensed under the ISC License - see the [ISC-LICENSE.md](https://github.com/nevir/readable-licenses/blob/master/markdown/ISC-LICENSE.md) file for details `"license": "ISC"`


