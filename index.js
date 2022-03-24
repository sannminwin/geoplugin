import fetch from 'cross-fetch';

/**
 * Get geolocation data from user's browser.
 * @returns 
 */
export const getGeo = () => {
  return new Promise((resolve, reject) => {
      //this let us use the SSL request in react
        fetch("http://www.geoplugin.net/json.gp") 
            .then((response) => response.json())
            .then((data) => {
                resolve(_getGeoObject(data));
            })
            .catch((err) => reject(err));
    });
};

/**
 * Get geolocation data from user's browser using premium service.
 * @param {*} key 
 * @returns 
 */
 export const getGeoSSL = (key) => {
    return new Promise((resolve, reject) => {
        if(key == undefined || key == '') {
            reject({
                msg: 'Please provide valid license key.'
            })
        }
          fetch(`https://ssl.geoplugin.net/json.gp?k${key}`) 
              .then((response) => response.json())
              .then((data) => {
                  resolve(_getGeoObject(data));
              })
              .catch((err) => reject(err));
      });
  };

/**
 * Get geolocation data from given IP address.
 * @returns 
 */
export const getGeoByIp = (ip) => {
    return new Promise((resolve, reject) => {
        fetch(`http://www.geoplugin.net/json.gp?ip=${ip}`) 
            .then((response) => response.json())
            .then((data) => {
                resolve(_getGeoObject(data));
            })
            .catch((err) => reject(err));
    });
};

/**
 * Get geolocation data from given IP address using premium service.
 * @returns 
 */
 export const getGeoByIpSSL = (key, ip) => {
    if(key == undefined || key == '') {
        reject({
            msg: 'Please provide valid license key.'
        })
    }
    return new Promise((resolve, reject) => {
        fetch(`https://ssl.geoplugin.net/json.gp?k${key}&ip=${ip}`) 
            .then((response) => response.json())
            .then((data) => {
                resolve(_getGeoObject(data));
            })
            .catch((err) => reject(err));
    });
};

/**
 * Map Geolocation object.
 * @param {
 * } data 
 * @returns 
 */
const _getGeoObject = (data) => {
    return  {
        request:  data.geoplugin_request,
        status: data.geoplugin_status,
        delay: data.geoplugin_delay,
        areaCode: data.geoplugin_areaCode,
        city: data.geoplugin_city,
        continentCode: data.geoplugin_continentCode,
        continentName: data.geoplugin_continentName,
        countryCode: data.geoplugin_countryCode,
        countryName: data.geoplugin_countryName,
        credit: data.geoplugin_credit,
        currencyCode: data.geoplugin_currencyCode,
        currencyConverter: data.geoplugin_currencyConverter,
        currencySymbol: data.geoplugin_currencySymbol,
        currencySymbol_UTF8: data.geoplugin_currencySymbol_UTF8,
        delay: data.geoplugin_delay,
        dmaCode: data.geoplugin_dmaCode,
        euVATRate: data.geoplugin_euVATrate,
        inEU: data.geoplugin_inEU,
        locationAccuracyRadius:
            data.geoplugin_locationAccuracyRadius,
        latitude: data.geoplugin_latitude,
        longitude: data.geoplugin_longitude,
        region: data.geoplugin_region,
        regionCode: data.geoplugin_regionCode,
        regionName: data.geoplugin_regionName,
        request: data.geoplugin_request,
        status: data.geoplugin_status,
        timezone: data.geoplugin_timezone,
    };
}


getGeoByIp('68.174.201.64')
  .then(response => console.log(response)) // handle success
  .catch(error => console.log(error)) // handle error
  .then(() => {  }); // always executed
