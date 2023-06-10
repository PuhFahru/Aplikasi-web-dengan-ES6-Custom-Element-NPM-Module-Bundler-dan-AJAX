class DataSource {
  static searchClub(keyword) {
    return fetch(`https://mhw-db.com/monsters/${keyword}`)
      .then((response) => {
        return response.json();
      })
      .then((responseJson) => {
        if (responseJson.id) {
          return Promise.resolve(responseJson);
        } else {
          return Promise.reject(`${keyword} ID Tidak diTemukan`);
        }
      });
    // .catch((err) => {
    //   console.log(`${err} Silahkan Masukan Menggunakan ID `);
    // });
  }
}

export default DataSource;
