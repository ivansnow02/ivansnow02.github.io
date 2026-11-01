import{n as e,t}from"./i18n.CpCqBC-8.js";import{t as n}from"./scrollLock.CphHndS9.js";import{t as r}from"./web-components-base.CmBtcaLx.js";var i=220,a=class extends r{container=null;dialogElement=null;isOpen=!1;isClosing=!1;previewIndex=0;previewImages=[];cleanupImageListeners=null;closeTimer=null;releaseBodyScrollLock=null;t=e(t);renderShadowMarkup(){let e=this.t;return`
      <div class="image-zoom-wrapper"><slot></slot></div>
      <dialog class="image-zoom-overlay hidden">
        <button type="button" class="image-zoom-nav image-zoom-nav-prev" aria-label="${e(`imageZoom.previous`)}">‹</button>
        <button type="button" class="image-zoom-close" aria-label="${e(`imageZoom.close`)}">×</button>
        <img class="image-zoom-content" alt="" loading="eager" decoding="async" />
        <p class="image-zoom-caption"></p>
        <button type="button" class="image-zoom-nav image-zoom-nav-next" aria-label="${e(`imageZoom.next`)}">›</button>
      </dialog>
    `}shadowStyleCss(){return s}onShadowReady(){this.container=this.shadowRoot?.querySelector(`.image-zoom-wrapper`)??null,this.dialogElement=this.shadowRoot?.querySelector(`.image-zoom-overlay`)??null,this.bindImage(),this.dialogElement?.addEventListener(`click`,this.handleOverlayClick),window.addEventListener(`keydown`,this.handleWindowKeydown)}onSlotChange(){this.bindImage()}onDetach(){this.cleanupImageListeners?.(),this.closeTimer&&=(clearTimeout(this.closeTimer),null),this.dialogElement?.removeEventListener(`click`,this.handleOverlayClick),window.removeEventListener(`keydown`,this.handleWindowKeydown),this.restoreBodyScroll()}bindImage(){this.cleanupImageListeners?.(),this.cleanupImageListeners=null;let e=this.container?.querySelector(`slot`);if(!(e instanceof HTMLSlotElement))return;let t=(e.assignedElements({flatten:!0})??[]).find(e=>e.tagName===`IMG`);if(!t)return;t.classList.add(`image-zoom-trigger`);let n=t.hasAttribute(`role`),r=t.hasAttribute(`tabindex`);n||t.setAttribute(`role`,`button`),r||t.setAttribute(`tabindex`,`0`);let i=e=>this.openPreview(t,e),a=e=>{(e.key===`Enter`||e.key===` `)&&(e.preventDefault(),this.openPreview(t,e))};t.addEventListener(`click`,i),t.addEventListener(`keydown`,a),this.cleanupImageListeners=()=>{t.removeEventListener(`click`,i),t.removeEventListener(`keydown`,a),t.classList.remove(`image-zoom-trigger`),n||t.removeAttribute(`role`),r||t.removeAttribute(`tabindex`)}}resolvePreviewImages(e){let t=e.closest(`[data-image-zoom-gallery]`);return(t?Array.from(t.querySelectorAll(`image-zoom img`)):[e]).map(e=>({element:e,src:e.currentSrc||e.src,alt:e.alt||``})).filter(e=>!!e.src)}openPreview(e,t){t?.preventDefault(),t?.stopPropagation();let r=this.resolvePreviewImages(e);r.length!==0&&(this.closeTimer&&=(clearTimeout(this.closeTimer),null),this.isClosing=!1,this.previewImages=r.map(({src:e,alt:t})=>({src:e,alt:t})),this.previewIndex=Math.max(0,r.findIndex(t=>t.element===e)),this.syncPreviewWithIndex(),this.isOpen=!0,typeof document<`u`&&typeof window<`u`&&!this.releaseBodyScrollLock&&(this.releaseBodyScrollLock=n(document,{innerWidth:window.innerWidth,getComputedPaddingInlineEnd:()=>window.getComputedStyle(document.body).paddingInlineEnd})),this.syncDialog())}finalizeClosePreview(){this.isOpen=!1,this.isClosing=!1,this.previewImages=[],this.closeTimer&&=(clearTimeout(this.closeTimer),null),this.syncDialog(),this.restoreBodyScroll()}requestClosePreview(){if(!this.isOpen||this.isClosing)return;let e=typeof window<`u`&&window.matchMedia(`(prefers-reduced-motion: reduce)`).matches?0:i;if(e===0){this.finalizeClosePreview();return}this.isClosing=!0,this.syncDialog(),this.closeTimer&&clearTimeout(this.closeTimer),this.closeTimer=setTimeout(()=>{this.finalizeClosePreview()},e)}syncPreviewWithIndex(){let e=this.previewImages[this.previewIndex];if(!e||!this.dialogElement)return;let t=this.dialogElement.querySelector(`.image-zoom-content`),n=this.dialogElement.querySelector(`.image-zoom-caption`);t instanceof HTMLImageElement&&(t.src=e.src,t.alt=e.alt),n&&(n.textContent=e.alt),this.dialogElement.setAttribute(`aria-label`,e.alt||this.t(`imageZoom.dialog`));let r=this.dialogElement.querySelector(`.image-zoom-nav-prev`),i=this.dialogElement.querySelector(`.image-zoom-nav-next`),a=this.previewImages.length>1;r instanceof HTMLElement&&(r.style.display=a?``:`none`),i instanceof HTMLElement&&(i.style.display=a?``:`none`)}syncDialog(){this.dialogElement&&(this.dialogElement.classList.toggle(`hidden`,!this.isOpen),this.dialogElement.classList.toggle(`closing`,this.isClosing),this.isOpen&&!this.dialogElement.open?this.dialogElement.showModal():!this.isOpen&&this.dialogElement.open&&this.dialogElement.close())}showPreviousPreview(e){e?.preventDefault(),e?.stopPropagation(),!(this.previewImages.length<=1)&&(this.previewIndex=(this.previewIndex-1+this.previewImages.length)%this.previewImages.length,this.syncPreviewWithIndex())}showNextPreview(e){e?.preventDefault(),e?.stopPropagation(),!(this.previewImages.length<=1)&&(this.previewIndex=(this.previewIndex+1)%this.previewImages.length,this.syncPreviewWithIndex())}handleOverlayClick=e=>{let t=e.target,n=t instanceof HTMLElement?t:null;n?.closest(`.image-zoom-content`)||n?.closest(`.image-zoom-close`)||n?.closest(`.image-zoom-nav`)||this.requestClosePreview()};handleWindowKeydown=e=>{this.isOpen&&(e.key===`Escape`?this.requestClosePreview():e.key===`ArrowLeft`?this.showPreviousPreview(e):e.key===`ArrowRight`&&this.showNextPreview(e))};restoreBodyScroll(){this.releaseBodyScrollLock?.(),this.releaseBodyScrollLock=null}};function o(){typeof customElements<`u`&&!customElements.get(`image-zoom`)&&customElements.define(`image-zoom`,a)}var s=`
  .image-zoom-overlay {
    position: fixed;
    inset: 0;
    z-index: var(--z-fullscreen);
    display: grid;
    place-items: center;
    gap: 0;
    width: 100%;
    max-width: none;
    height: 100%;
    max-height: none;
    border: 0;
    margin: 0;
    padding: 2rem 1rem;
    box-sizing: border-box;
    background: var(--codeblock-overlay-bg, rgba(8, 10, 16, 0.72));
    backdrop-filter: blur(0.35rem);
    animation: image-zoom-fade-in 220ms ease forwards;
  }

  .image-zoom-overlay.hidden { display: none; }

  .image-zoom-overlay::backdrop {
    background: var(--codeblock-overlay-bg, rgba(8, 10, 16, 0.72));
    backdrop-filter: blur(0.35rem);
  }

  .image-zoom-overlay.closing { animation: image-zoom-fade-out 220ms ease forwards; }

  .image-zoom-content {
    margin: 0;
    max-width: min(92vw, 1100px);
    max-height: 86vh;
    object-fit: contain;
    border-radius: 0.5rem;
    box-shadow: 0 0.75rem 2rem var(--grey-9-a15);
    cursor: zoom-out;
    animation: image-zoom-scale-in 220ms cubic-bezier(0.22, 0.61, 0.36, 1) forwards;
  }

  .image-zoom-overlay.closing .image-zoom-content {
    animation: image-zoom-scale-out 220ms cubic-bezier(0.4, 0, 0.2, 1) forwards;
  }

  .image-zoom-close {
    position: absolute;
    top: 1rem;
    right: 1rem;
    width: 2.4rem;
    height: 2.4rem;
    border: 0;
    border-radius: 50%;
    background: rgba(17, 25, 40, 0.58);
    color: #fff;
    font-size: 1.5rem;
    line-height: 1;
    cursor: pointer;
    transition: background-color 0.2s ease, transform 0.2s ease;
    animation: image-zoom-ui-in 220ms ease forwards;
  }

  .image-zoom-overlay.closing .image-zoom-close { animation: image-zoom-ui-out 220ms ease forwards; }
  .image-zoom-close:hover { background: rgba(17, 25, 40, 0.8); transform: scale(1.06); }

  .image-zoom-nav {
    position: absolute;
    top: 50%;
    width: 2.75rem;
    height: 2.75rem;
    border: 0;
    border-radius: 999px;
    background: rgba(17, 25, 40, 0.58);
    color: #fff;
    font-size: 2rem;
    line-height: 1;
    cursor: pointer;
    transform: translateY(-50%);
    transition: background-color 0.2s ease, transform 0.2s ease;
    animation: image-zoom-ui-in 220ms ease forwards;
  }

  .image-zoom-nav:hover { background: rgba(17, 25, 40, 0.8); transform: translateY(-50%) scale(1.06); }
  .image-zoom-nav-prev { left: max(1rem, calc(50vw - min(46vw, 550px) - 3.75rem)); }
  .image-zoom-nav-next { right: max(1rem, calc(50vw - min(46vw, 550px) - 3.75rem)); }

  .image-zoom-caption {
    margin: 0.8rem 0 0;
    font-size: 0.9rem;
    color: var(--grey-1);
    text-align: center;
    max-width: min(92vw, 1100px);
    line-height: 1.5;
    animation: image-zoom-ui-in 220ms ease forwards;
  }

  .image-zoom-overlay.closing .image-zoom-caption { animation: image-zoom-ui-out 220ms ease forwards; }
  .image-zoom-overlay.closing .image-zoom-nav { animation: image-zoom-ui-out 220ms ease forwards; }

  @keyframes image-zoom-fade-in { from { opacity: 0; } to { opacity: 1; } }
  @keyframes image-zoom-fade-out { from { opacity: 1; } to { opacity: 0; } }
  @keyframes image-zoom-scale-in {
    from { opacity: 0; transform: scale(0.94) translateY(10px); }
    to { opacity: 1; transform: scale(1) translateY(0); }
  }
  @keyframes image-zoom-scale-out {
    from { opacity: 1; transform: scale(1) translateY(0); }
    to { opacity: 0; transform: scale(0.94) translateY(10px); }
  }
  @keyframes image-zoom-ui-in {
    from { opacity: 0; transform: translateY(-6px); }
    to { opacity: 1; transform: translateY(0); }
  }
  @keyframes image-zoom-ui-out {
    from { opacity: 1; transform: translateY(0); }
    to { opacity: 0; transform: translateY(-6px); }
  }

  @media (prefers-reduced-motion: reduce) {
    .image-zoom-close, .image-zoom-nav { transition: none; }
    .image-zoom-overlay, .image-zoom-overlay.closing,
    .image-zoom-content, .image-zoom-overlay.closing .image-zoom-content,
    .image-zoom-caption, .image-zoom-overlay.closing .image-zoom-caption,
    .image-zoom-nav, .image-zoom-overlay.closing .image-zoom-nav,
    .image-zoom-overlay.closing .image-zoom-close { animation: none; }
  }
`;export{o as registerImageZoom};