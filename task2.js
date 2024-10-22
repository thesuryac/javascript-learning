fetch("https://restcountries.com/v3.1/all")
  .then((res) => res.json())
  .then((data) => {
    for (object of data) {
      console.log(object.flag + " " + object.name.common);
    }
  })
  .catch((error) => console.log(error));
