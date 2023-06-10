class AppBar extends HTMLElement {
  constructor() {
    super();
    this.shadowDOM = this.attachShadow({ mode: "open" });
  }

  connectedCallback() {
    this.render();
  }

  render() {
    this.shadowDOM.innerHTML = `
        <style>
            * {
                margin: 0;
                padding: 0;
                box-sizing: border-box;
            }

            :host {
                display: block;
                width: 100%;
                background-color: #686de0;
                color: white;
                box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2);
            }

            h2 {
                padding: 20px;
                
                
            }
            .gaming-hype > h2 {
              color: #c7ecee;
              font-size: 25px;
              
            }
            .gaming-hype > h2 > span{
              color: #ffffff;
              
            }

        </style>
        <div class="gaming-hype" > 
        <h2>Monster <span>GAMING.ID<span></h2>
        
        </div>

      `;
  }
}

customElements.define("app-bar", AppBar);
