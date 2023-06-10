import swal from "sweetalert";
import "../component/monsList.js";
import "../component/searchBar.js";
import DataSource from "../data/data-source.js";

const main = () => {
  const searchElement = document.querySelector("search-bar");
  const monsListElement = document.querySelector("club-list");

  const onButtonSearchClicked = () => {
    DataSource.searchClub(searchElement.value)
      .then(renderResult)
      .catch(fallbackResult);
  };

  const renderResult = (results) => {
    monsListElement.clubs = results;
    swal({
      title: "SELAMATT!",
      text: "Monster di Temukan",
      icon: "success",
      button: "Kembali",
    });
  };

  const fallbackResult = (message) => {
    monsListElement.renderError(message);
    swal("ID Tidak Ditemukan!, buka file README", {
      button: "Kembali",
      icon: "warning",
    });
  };

  searchElement.clickEvent = onButtonSearchClicked;
};

export default main;
