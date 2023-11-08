var fetchButton = document.querySelector('.btn');
fetchButton.addEventListener('click', getApi);
var today = document.querySelector('#today');
var cityNameEl = document.querySelector('#inputCity');
var todayEl = document.querySelector('#today');
var todateEl = document.querySelector('#card-title');
var cityFormEl = document.querySelector('#cityForm');
var cityEl = document.querySelector('#cityName');
var day1 = document.querySelector('#day1');
var day2 = document.querySelector('#day2');
var day3 = document.querySelector('#day3');
var day4 = document.querySelector('#day4')
var ticon = document.querySelector('#tIcon')
var icon1 = document.querySelector('.id1')
var icon2 = document.querySelector('.id2')
var icon3 = document.querySelector('.id3')
var icon4 = document.querySelector('.id4')
var head1 = document.querySelector('#this1')
var head2 = document.querySelector('#this2')
var head3 = document.querySelector('#this3')
var head4 = document.querySelector('#this4')


var formSubmitHandler = function(event){
  event.preventDefault();

  //remove empty spaces with trim
  var citychoice = cityNameEl.value.trim();

  if(citychoice) {
    getApi(citychoice);
  }else {
    alert('Please enter a city name')
  }
}



var getApi = function(city){
  var apiUrl = 'https://api.openweathermap.org/data/2.5/forecast?q='+ city +'&appid=932891f970d879716f109a3b5af52d42&units=imperial';

      fetch(apiUrl)
        .then(function (response) {
          if (response.ok){
            console.log(response);
            response.json().then(function(data){
              console.log(data);
              displayForecast(data,city)
            });
          } else{
            alert('Error :' + response.statusText);
          }  
        })
        .catch(function (error) {
          alert('Unable to connect to open Weather');
        });
      };

  var displayForecast = function (data){
    //CITY NAME
    cityEl.textContent = data.city.name;
    //icon
    ticon.innerHTML = "http://openweathermap.org/img/w/" + data.list[0].weather[0].icon + ".png' alt='Icon depicting current weather.'>";

    //date
    var tdate = document.createElement('p');
    tdate.textContent = data.list[0].dt_txt;
    today.append(tdate);
    //temperature
    var ttemp = document.createElement('p');
    ttemp.textContent = 'Temperature : ' + data.list[0].main.temp;
    today.append(ttemp);
    //wind
    var twind = document.createElement('p');
    twind.textContent = 'Wind Speed : '+ data.list[0].wind.speed;
    today.append(twind);
    //humidity
    var thum = document.createElement('p');
    thum.textContent = 'Humidity : ' + data.list[0].main.humidity;
    today.append(thum);

    //day 1
    
     icon1.innerHTML =  "http://openweathermap.org/img/w/" + data.list[7].weather[0].icon + ".png' alt='Icon depicting current weather.'>";

    
    var d1 = document.createElement('p');
    d1.textContent = data.list[7].dt_txt;
    head1.append(d1);

    var d1t = document.createElement('p');
    d1t.textContent = 'Temperature : ' + data.list[7].main.temp;
    day1.append(d1t);

    var d1w = document.createElement('p');
    d1w.textContent = 'Wind Speed : ' + data.list[7].wind.speed;
    day1.append(d1w);

    var d1h = document.createElement('p');
    d1h.textContent = 'Humidity : ' + data.list[7].main.humidity;
    day1.append(d1h); 

    //day 2
     icon2.innerHTML = "http://openweathermap.org/img/w/" + data.list[15].weather[0].icon + ".png' alt='Icon depicting current weather.'>";

    var d2 = document.createElement('p');
    d2.textContent = data.list[15].dt_txt;
    head2.append(d2);

    var d2t = document.createElement('p');
    d2t.textContent = 'Temperature : ' + data.list[15].main.temp;
    day2.append(d2t);

    var d2w = document.createElement('p');
    d2w.textContent = 'Wind Speed : ' +  data.list[15].wind.speed;
    day2.append(d2w);

    var d2h = document.createElement('p');
    d2h.textContent = 'Humidity : ' + data.list[15].main.humidity;
    day2.append(d2h);


    // //day3

     icon3.innerHTML = "http://openweathermap.org/img/w/" + data.list[23].weather[0].icon + ".png' alt='Icon depicting current weather.'>";


    var d3 = document.createElement('p');
    d3.textContent = data.list[23].dt_txt;
    head3.append(d3);

    var d3t = document.createElement('p');
    d3t.textContent = 'Temperature : ' + data.list[23].main.temp;
    day3.append(d3t);

    var d3w = document.createElement('p');
    d3w.textContent = 'Wind Speed : ' +  data.list[23].wind.speed;
    day3.append(d3w);

    var d3h = document.createElement('p');
    d3h.textContent = 'Humidity : ' + data.list[23].main.humidity;
    day3.append(d3h);


    //day4

     icon4.innerHTML = "http://openweathermap.org/img/w/" + data.list[31].weather[0].icon + ".png' alt='Icon depicting current weather.'>";

    var d4 = document.createElement('p');
    d4.textContent = data.list[31].dt_txt;
    head4.append(d4);

    var d4t = document.createElement('p');
    d4t.textContent = 'Temperature : ' + data.list[31].main.temp;
    day4.append(d4t);

    var d4w = document.createElement('p');
    d4w.textContent =  'Wind Speed : ' +  data.list[31].wind.speed;
    day4.append(d4w);

    var d4h = document.createElement('p');
    d4h.textContent = 'Humidity : ' + data.list[31].main.humidity;
    day4.append(d4h);

  }

  cityFormEl.addEventListener('submit', formSubmitHandler);
     

       
   