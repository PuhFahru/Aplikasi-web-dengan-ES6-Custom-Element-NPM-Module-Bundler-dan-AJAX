class SearchBar extends HTMLElement {
  constructor() {
    super();
    this.shadowDOM = this.attachShadow({ mode: "open" });
  }

  connectedCallback() {
    this.render();
  }

  set clickEvent(event) {
    this._clickEvent = event;
    this.render();
  }

  get value() {
    return this.shadowDOM.querySelector("#searchElement").value;
  }

  render() {
    this.shadowDOM.innerHTML = `
            <style>
                .search-container {
                    max-width: 850px;
                    box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2);
                    padding: 15px;
                    border-radius: 10px;
                    display: flex;
                    position: static;
            
                    background-color: #f5f6fa;
                }

                .search-container > input {
                    width: 75%;
                    padding: 16px;
                    border: 0;
                    border-bottom: 1px solid cornflowerblue;
                    font-weight: bold;
                }

                .search-container > input:focus {
                    outline: 0;
                    border-bottom: 2px solid cornflowerblue;
                    
                }

                .search-container > input:focus::placeholder {
                    font-weight: bold;
                    font-size: 14px;
                    
                }

                .search-container > input::placeholder {
                    color: cornflowerblue;
                    font-weight: normal;
                    
                }

                .search-container > button {
                    width: 10%;
                    cursor: pointer;
                    margin-left: 50px;
                    padding: 5px;
                    background-color: #4b7bec;
                    color: white;
                    border-radius: 5px;
                    text-transform: uppercase;
                }

                @media screen and (max-width: 550px) {
                    .search-container {
                        flex-direction: column;
                        position: static;
                    }

                    .search-container > input {
                        width: 100%;
                        margin-bottom: 12px;
                    }

                    .search-container > button {
                        width: 80%;
                        
                    }
                }
            </style>

            <div id="search-container" class="search-container">
            <input placeholder=" Masukan ID Monster " id="searchElement" type="search">
            <button id="searchButtonElement" type="submit">Cari</button>
            </div>
        `;

    this.shadowDOM
      .querySelector("#searchButtonElement")
      .addEventListener("click", this._clickEvent);
  }
}

customElements.define("search-bar", SearchBar);
