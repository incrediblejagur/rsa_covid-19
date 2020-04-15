# South Africa COVID-19 outbreak tracker/visualisation
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
This is run every 10min and if changes are found it updates the data in our database. 
The script uses puppeteer and cheerio to scrape the latest data from https://sacoronavirus.co.za/.
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
| Latest/Average increase in cases                      | http://rsa-covid19.herokuapp.com/api/extra-info       |


## Data Sources:
- [South African Coronavirus News and Information](https://sacoronavirus.co.za/)
- [Data Science for Social Impact Research Group @ University of Pretoria
](https://dsfsi.github.io/)
- [Covid-19 South Africa Wikipedia](https://en.wikipedia.org/wiki/Template:2019%E2%80%9320_coronavirus_pandemic_data/South_Africa_medical_cases_chart)



 

## Author

  

- [incrediblejagur](github.com/incrediblejagur)

  

## License

  

This project is licensed under the ISC License - see the [ISC-LICENSE.md](https://github.com/nevir/readable-licenses/blob/master/markdown/ISC-LICENSE.md) file for details `"license": "ISC"`


