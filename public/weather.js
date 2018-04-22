class weather {
    constructor(country = "", name = "", icon = "", temp = "", description = "", humidity = "", speed = ""){
        this.country = country;
        this.name = name;
        this.icon = icon;
        this.temp = temp;
        this.description = description;
        this.humidity = humidity;
        this.speed = speed;
    }
    setCountry(newCountry){
        this.country = newCountry;
    }
    setName(newName){
        this.name = newName;
    }
    setIcon(newIcon){
        this.icon = newIcon;
    }
    setTemp(newTemp){
        this.temp = newTemp;
    }
    setDescription(newDescription){
        this.description = newDescription;
    }
    setHumidity(newHumidity){
        this.humidity = newHumidity;
    }
    setSpeed(newSpeed){
        this.speed = newSpeed;
    }
    setInit(apiAccess){
        this.setCountry(apiAccess['sys']['country']);
        this.setName(apiAccess['name']);
        this.setIcon(apiAccess['weather'][0]['icon'])
        this.setTemp(apiAccess['main']['temp']);
        this.setDescription(apiAccess['weather'][0]['description']);
        this.setHumidity(apiAccess['main']['humidity']);
        this.setSpeed(apiAccess['wind']['speed']);
    }
    print(){
        document.getElementById("active").innerHTML = `Weather in ${this.name}, ${this.country}`;
        document.getElementById("icon").src = `https://openweathermap.org/img/w/${this.icon}.png`;
        document.getElementById("temp").innerHTML = `${this.temp} °C`;
        $('table').css ({'border-collapse':'collapse'})
        $('tr'),$('td').css ({'border':'1px solid black'});
        document.getElementById("cloudTitle").innerHTML = 'Cloudiness'.bold();
        document.getElementById("cloud").innerHTML = this.description;
        document.getElementById("humidityTitle").innerHTML = 'humidity'.bold();
        document.getElementById("humidity").innerHTML = `${this.humidity} %`;
        document.getElementById("windTitle").innerHTML = 'wind'.bold();
        document.getElementById("speed").innerHTML = `${this.speed} m/s`;
    }
}