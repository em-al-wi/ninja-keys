import {LitElement, html, css} from 'lit';
import {customElement, property} from 'lit/decorators.js';

@customElement('ninja-footer')
export class NinjaFooter extends LitElement {
  static override styles = css`
    .modal-footer {
      background: var(--ninja-footer-background);
      padding: 0.5em 1em;
      display: flex;
      /* font-size: 0.75em; */
      border-top: var(--ninja-separate-border);
      color: var(--ninja-secondary-text-color);
    }

    .modal-footer .help {
      display: flex;
      margin-right: 1em;
      align-items: center;
      font-size: 0.75em;
    }

    .ninja-examplekey {
      background: var(--ninja-secondary-background-color);
      padding: 0.06em 0.25em;
      border-radius: var(--ninja-key-border-radius);
      color: var(--ninja-secondary-text-color);
      width: 1em;
      height: 1em;
      margin-right: 0.5em;
      font-size: 1.25em;
      fill: currentColor;
    }
    .ninja-examplekey.esc {
      width: auto;
      height: auto;
      font-size: 1.1em;
    }
    .ninja-examplekey.backspace {
      opacity: 0.7;
    }
  `;

  @property() toSelect = '';
  @property() toNavigate = '';
  @property() toClose = '';

  override render() {
    return html`
      <div class="modal-footer" slot="footer">
        <span class="help">
          <svg
            version="1.0"
            class="ninja-examplekey"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 1280 1280"
          >
            <path
              d="M1013 376c0 73.4-.4 113.3-1.1 120.2a159.9 159.9 0 0 1-90.2 127.3c-20 9.6-36.7 14-59.2 15.5-7.1.5-121.9.9-255 1h-242l95.5-95.5 95.5-95.5-38.3-38.2-38.2-38.3-160 160c-88 88-160 160.4-160 161 0 .6 72 73 160 161l160 160 38.2-38.3 38.3-38.2-95.5-95.5-95.5-95.5h251.1c252.9 0 259.8-.1 281.4-3.6 72.1-11.8 136.9-54.1 178.5-116.4 8.6-12.9 22.6-40.5 28-55.4 4.4-12 10.7-36.1 13.1-50.6 1.6-9.6 1.8-21 2.1-132.8l.4-122.2H1013v110z"
            />
          </svg>

          ${this.toSelect}
        </span>
        <span class="help">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            class="ninja-examplekey"
            viewBox="0 0 24 24"
          >
            <path d="M0 0h24v24H0V0z" fill="none" />
            <path
              d="M20 12l-1.41-1.41L13 16.17V4h-2v12.17l-5.58-5.59L4 12l8 8 8-8z"
            />
          </svg>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            class="ninja-examplekey"
            viewBox="0 0 24 24"
          >
            <path d="M0 0h24v24H0V0z" fill="none" />
            <path
              d="M4 12l1.41 1.41L11 7.83V20h2V7.83l5.58 5.59L20 12l-8-8-8 8z"
            />
          </svg>
          ${this.toNavigate}
        </span>
        <span class="help">
          <span class="ninja-examplekey esc">esc</span>
          ${this.toClose}
        </span>
      </div>
    `;
  }
}

declare global {
  interface HTMLElementTagNameMap {
    'ninja-footer': NinjaFooter;
  }
}
