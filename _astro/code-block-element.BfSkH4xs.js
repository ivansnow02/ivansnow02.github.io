import{t as e}from"./web-components-base.CmBtcaLx.js";var t=class t extends e{static COLLAPSE_THRESHOLD=15;static icons=null;container=null;copied=!1;isCollapsed=!1;shouldShowCollapse=!1;isFullscreen=!1;isExiting=!1;isInGroup=!1;isMultiTab=!1;isDark=!1;codeLanguage=``;collapseBtn=null;contentContainer=null;copyBtn=null;fullscreenBtn=null;langText=null;root=null;renderShadowMarkup(){return`
      <div class="codeblock">
        <div class="header">
          <div class="controls">
            <div class="dot red"></div>
            <div class="dot yellow"></div>
            <div class="dot green"></div>
            <span class="lang-text"></span>
          </div>
          <div class="actions">
            <button class="action-btn copy-btn" aria-label="Copy code"></button>
            <button class="action-btn fullscreen-btn" aria-label="Enter fullscreen"></button>
          </div>
        </div>
        <div class="content-container">
          <div class="content-wrapper"><slot></slot></div>
          <button class="collapse-btn" style="display:none;" aria-label="Expand code"></button>
        </div>
      </div>
    `}shadowStyleCss(){let e=t.icons??{};return r.replaceAll(`__ICON_COPY__`,e.copy??``).replaceAll(`__ICON_COPIED__`,e.copied??``).replaceAll(`__ICON_FULLSCREEN__`,e.fullscreen??``).replaceAll(`__ICON_FULLSCREEN_EXIT__`,e.fullscreenExit??``).replaceAll(`__ICON_ARROW_DOWN__`,e.arrowDown??``).replaceAll(`__ICON_ARROW_UP__`,e.arrowUp??``)}themeTracked(){return!0}onThemeChange(e){this.isDark=e,this.renderThemeState()}onDetach(){window.removeEventListener(`keydown`,this.handleKeydown),typeof document<`u`&&(document.body.style.overflow=``)}onShadowReady(){this.codeLanguage=this.getCodeLanguage(),this.langText&&(this.langText.textContent=this.codeLanguage),this.detectCodeGroup(),setTimeout(()=>this.checkCodeLength(),100),window.addEventListener(`keydown`,this.handleKeydown)}bindDom(){this.shadowRoot&&(this.root=this.shadowRoot.querySelector(`.codeblock`),this.contentContainer=this.shadowRoot.querySelector(`.content-container`),this.container=this.shadowRoot.querySelector(`.content-wrapper`),this.copyBtn=this.shadowRoot.querySelector(`.copy-btn`),this.fullscreenBtn=this.shadowRoot.querySelector(`.fullscreen-btn`),this.langText=this.shadowRoot.querySelector(`.lang-text`),this.collapseBtn=this.shadowRoot.querySelector(`.collapse-btn`),this.copyBtn?.addEventListener(`click`,()=>void this.copyCode()),this.fullscreenBtn?.addEventListener(`click`,()=>this.toggleFullscreen()),this.collapseBtn?.addEventListener(`click`,()=>this.toggleCollapse()))}getPreElement(){let e=this.container?.querySelector(`slot`);if(e instanceof HTMLSlotElement)return(e.assignedElements({flatten:!0})??[]).find(e=>e.tagName===`PRE`)}getCodeLanguage(){return this.getPreElement()?.dataset.language??``}checkCodeLength(){let e=this.getPreElement();if(!e)return;let n=e.querySelector(`code`);n&&n.querySelectorAll(`.line`).length>t.COLLAPSE_THRESHOLD&&(this.shouldShowCollapse=!0,this.isCollapsed=!0,this.renderCollapseState())}toggleCollapse(){this.shouldShowCollapse&&(this.isCollapsed=!this.isCollapsed,this.renderCollapseState())}detectCodeGroup(){let e=this.getRootNode(),t=(e instanceof ShadowRoot?e.host:this).closest(`.tabs.code-group`);if(!t)return;this.isInGroup=!0;let n=t.querySelectorAll(`:scope > .tabs-panels > .tab-item`).length;this.isMultiTab=n>1,this.renderGroupState()}renderThemeState(){this.root?.classList.toggle(`dark`,this.isDark)}renderGroupState(){this.root?.classList.toggle(`in-group`,this.isInGroup),this.root?.classList.toggle(`in-multi-tab`,this.isMultiTab)}renderCollapseState(){this.collapseBtn&&(this.collapseBtn.style.display=this.shouldShowCollapse?``:`none`,this.contentContainer?.classList.toggle(`collapsed`,this.isCollapsed),this.collapseBtn.setAttribute(`aria-label`,this.isCollapsed?`Expand code`:`Collapse code`),this.collapseBtn.dataset.collapsed=this.isCollapsed?`true`:`false`)}async copyCode(){let e=this.getPreElement();if(!e)return;let t=e.textContent??``;try{await navigator.clipboard.writeText(t),this.copied=!0,this.renderCopyState(),setTimeout(()=>{this.copied=!1,this.renderCopyState()},3e3)}catch(e){console.error(`Failed to copy:`,e)}}renderCopyState(){this.copyBtn&&(this.copyBtn.dataset.copied=this.copied?`true`:`false`)}toggleFullscreen(){this.isFullscreen?(this.isExiting=!0,this.renderFullscreenState(),setTimeout(()=>{this.isFullscreen=!1,this.isExiting=!1,this.renderFullscreenState(),typeof document<`u`&&(document.body.style.overflow=``)},300)):(this.isFullscreen=!0,this.renderFullscreenState(),typeof document<`u`&&(document.body.style.overflow=`hidden`))}renderFullscreenState(){this.root?.classList.toggle(`fullscreen`,this.isFullscreen),this.root?.classList.toggle(`exiting`,this.isExiting),this.fullscreenBtn&&(this.fullscreenBtn.dataset.fullscreen=this.isFullscreen?`true`:`false`,this.fullscreenBtn.setAttribute(`aria-label`,this.isFullscreen?`Exit fullscreen`:`Enter fullscreen`))}handleKeydown=e=>{e.key===`Escape`&&this.isFullscreen&&this.toggleFullscreen()}};function n(e){t.icons=e,typeof customElements<`u`&&!customElements.get(`code-block`)&&customElements.define(`code-block`,t)}var r=`
  .codeblock {
    margin: 1.5rem 0;
    border-radius: 0.5rem;
    overflow: hidden;
    box-shadow: var(--codeblock-shadow);
    font-family: "Maple Mono", "Courier New", monospace;
  }
  .dark.codeblock { box-shadow: none; }
  .codeblock.in-group { margin: 0; border-radius: 0; box-shadow: none; }
  .codeblock.in-group.in-multi-tab .lang-text { display: none; }
  .header {
    display: flex; justify-content: space-between; align-items: center;
    padding: 0.5rem 1rem; background-color: var(--surface-code-header);
    min-height: 1.5rem; border-top-right-radius: 0.5rem; border-top-left-radius: 0.5rem;
  }
  .controls { display: flex; align-items: center; gap: 0.6rem; margin-left: 0.8125rem; }
  .dot { width: 0.9375rem; height: 0.9375rem; border-radius: 50%; }
  .red { background: var(--codeblock-dot-red); }
  .yellow { background: var(--codeblock-dot-yellow); }
  .green { background: var(--codeblock-dot-green); }
  .lang-text { margin-left: 0.75rem; font-size: 1rem; color: var(--text-color-muted); text-transform: uppercase; }
  .actions { display: flex; flex-direction: row; gap: 0.75rem; padding-right: 1.5rem; color: var(--text-color-muted); }
  .action-btn, .collapse-btn {
    border: none; cursor: pointer; background-color: var(--codeblock-action-color);
    mask-size: contain; mask-repeat: no-repeat; mask-position: center;
    -webkit-mask-size: contain; -webkit-mask-repeat: no-repeat; -webkit-mask-position: center;
    transition: background-color 0.2s;
  }
  .copy-btn { width: 1.1rem; height: 1.1rem;
    mask-image: url(__ICON_COPY__); -webkit-mask-image: url(__ICON_COPY__); }
  .copy-btn[data-copied="true"] {
    mask-image: url(__ICON_COPIED__); -webkit-mask-image: url(__ICON_COPIED__);
  }
  .fullscreen-btn { width: 1.1rem; height: 1.1rem;
    mask-image: url(__ICON_FULLSCREEN__); -webkit-mask-image: url(__ICON_FULLSCREEN__); }
  .fullscreen-btn[data-fullscreen="true"] {
    mask-image: url(__ICON_FULLSCREEN_EXIT__); -webkit-mask-image: url(__ICON_FULLSCREEN_EXIT__);
  }
  .action-btn:hover { background-color: var(--codeblock-action-hover-color); }
  .content-container { position: relative; transition: max-height 0.3s ease-in-out; }
  .content-container.collapsed { max-height: 400px; overflow: hidden; }
  .content-container.collapsed::after {
    content: ""; position: absolute; bottom: 0; left: 0; right: 0; height: 100px;
    background: linear-gradient(to bottom, transparent, var(--codeblock-collapse-gradient-end));
    pointer-events: none;
  }
  .collapse-btn {
    position: absolute; bottom: 1rem; left: 50%; transform: translateX(-50%);
    border: 1px solid var(--border-color-muted); border-radius: 50%;
    width: 2rem; height: 2rem; mask-size: 1.75rem; mask-repeat: no-repeat; mask-position: center;
    -webkit-mask-size: 1.25rem; -webkit-mask-repeat: no-repeat; -webkit-mask-position: center;
    transition: all 0.2s ease; box-shadow: var(--codeblock-button-shadow);
    z-index: var(--z-dropdown); animation: float 2s ease-in-out infinite; scale: 1.5;
    mask-image: url(__ICON_ARROW_UP__); -webkit-mask-image: url(__ICON_ARROW_UP__);
  }
  .collapse-btn[data-collapsed="true"] {
    mask-image: url(__ICON_ARROW_DOWN__); -webkit-mask-image: url(__ICON_ARROW_DOWN__);
  }
  .collapse-btn:hover {
    background-color: var(--codeblock-action-hover-color);
    transform: translateX(-50%) scale(1.1);
    box-shadow: var(--codeblock-button-shadow-hover);
    animation-play-state: paused;
  }
  @keyframes float {
    0%, 100% { transform: translateX(-50%) translateY(0); }
    50% { transform: translateX(-50%) translateY(-6px); }
  }
  .content-wrapper {
    font-family: "Maple Mono", "Courier New", monospace;
  }
  .fullscreen {
    position: fixed; top: 0; left: 0; right: 0; bottom: 0;
    width: 100vw; height: 100vh; margin: 0; z-index: var(--z-fullscreen);
    border-radius: 0; animation: fullscreenIn 0.3s ease-out;
    display: flex; flex-direction: column; background-color: var(--codeblock-overlay-bg);
    backdrop-filter: blur(8px); padding: 2rem; box-sizing: border-box;
  }
  .fullscreen .header { border-radius: 0.5rem 0.5rem 0 0; }
  .fullscreen .content-container {
    flex: 1; overflow: auto; max-height: none !important;
    border-radius: 0 0 0.5rem 0.5rem;
  }
  .fullscreen .content-container.collapsed { max-height: none !important; }
  .fullscreen .content-container::after { display: none; }
  .fullscreen ::slotted(pre) { border-radius: 0 0 0.5rem 0.5rem !important; }
  @keyframes fullscreenIn {
    from { opacity: 0; transform: scale(0.95); }
    to { opacity: 1; transform: scale(1); }
  }
  .exiting { animation: fullscreenOut 0.3s ease-in forwards; }
  @keyframes fullscreenOut {
    from { opacity: 1; transform: scale(1); }
    to { opacity: 0; transform: scale(0.95); }
  }
`;export{n as registerCodeBlock};