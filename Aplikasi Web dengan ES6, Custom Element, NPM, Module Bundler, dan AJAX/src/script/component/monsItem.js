class MonsItem extends HTMLElement {
  constructor() {
    super();
    this.shadowDOM = this.attachShadow({ mode: "open" });
  }

  set club(club) {
    this._mons = club;
    console.log(this._mons);
    this.render();
  }

  render() {
    this.shadowDOM.innerHTML = `
    <style>
    @import url("https://fonts.googleapis.com/css2?family=Montserrat&display=swap");
    * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: 'Montserrat', sans-serif;
    <img>
  }
  :host {
    display: block;
    margin-bottom: 18px;
    box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2);
    border-radius: 10px;
    overflow: hidden;
  }
  
  .club-info {
    padding: 24px;
    background-color : white;
  }
  
  .club-info > h1 {
    font-weight: bold;
    padding-bottom: 5px;
  }
  .club-info > h3 {
    padding-bottom: 4px;
  }
  
  .club-info > p {
    margin-top: 10px;
    overflow: hidden;
    text-overflow: ellipsis;
    display: -webkit-box;
    -webkit-box-orient: vertical;
    -webkit-line-clamp: 10; 
  }
  .club-info > button {
    padding: 10px;
    border-radius: 5px;
    cursor: pointer;
    background-color : #9980FA;
    
  }
  
  </style>
          <div class="club-info">
            <h1>Monster : ${this._mons.name}</h1>
            <h3>Type : ${this._mons.type}</h3>
            <h3>Species : ${this._mons.species}</h3>
            <h4>Is : ${this._mons.description}</h4><br>
            <button>  </button>  <button> </button> <button>  </button>
          </div>
        `;
  }
}

customElements.define("club-item", MonsItem);
