import styles from './Cards.module.css';

export default function Cards() {
  return (
    <div>
      <h1 className={styles.mainTitle}>Pick your perfect web hosting plan</h1>
    <div className={styles.Cards}>
        <div className={styles.Maximum}>
            <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 16 16">
	<path d="M0 0h16v16H0z" fill="none" />
	<path fill="currentColor" d="M10.706 4.596a.501.501 0 0 1 .741.628l-.002.003l-.004.007l-.015.033l-.063.123l-.22.44c-.185.364-.436.857-.7 1.36a53 53 0 0 1-.778 1.442c-.118.209-.229.398-.324.55a2.4 2.4 0 0 1-.28.38A1.5 1.5 0 0 1 6.939 7.44c.127-.126.44-.373.793-.644c.37-.283.824-.622 1.263-.947c.44-.326.87-.639 1.187-.87l.38-.279l.107-.077l.027-.02l.008-.005zM8 1a7 7 0 0 1 3.732 12.923a.5.5 0 0 1-.534-.846a6 6 0 0 0 2.78-4.577h-1.51C12.204 8.5 12 8.266 12 8s.203-.5.469-.5h1.508a6 6 0 0 0-5.48-5.479v1.513C8.495 3.798 8.263 4 8 4c-.268 0-.504-.205-.504-.473V2.022a5.97 5.97 0 0 0-3.374 1.4L5.19 4.49c.188.188.166.497-.021.685c-.188.188-.497.21-.686.022L3.416 4.13A5.97 5.97 0 0 0 2.022 7.5h1.51c.265 0 .468.234.468.5s-.203.5-.469.5H2.022a6 6 0 0 0 2.78 4.577a.5.5 0 0 1-.534.846A7 7 0 0 1 8 1" />
</svg>
            <h2> Maximum 
              <br/>
             Performance</h2>
            <p>Sample text. Click to select the Text Element.</p>
            <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 24 24">
	<path d="M0 0h24v24H0z" fill="none" />
	<path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 12h16m-7-7l7 7l-7 7" />
</svg>
     </div>
  
      <div className={styles.Secure}> 

        <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 20 20">
	<path d="M0 0h20v20H0z" fill="none" />
	<path fill="currentColor" d="M15.625 5.005L10 2.755l-5.625 2.25v4.577c0 3.322 2.338 6.01 5.625 7.639c3.287-1.628 5.625-4.317 5.625-7.64zm1.25 4.577c0 4.088-2.95 7.178-6.608 8.9a.63.63 0 0 1-.534 0c-3.657-1.722-6.608-4.812-6.608-8.9v-5c0-.256.155-.485.393-.58l6.25-2.5a.63.63 0 0 1 .464 0l6.25 2.5a.625.625 0 0 1 .393.58z" />
	<path fill="currentColor" d="M12.292 10.001a.21.21 0 0 0-.209-.208H7.917a.21.21 0 0 0-.209.208v2.5c0 .114.093.208.209.208h4.166a.21.21 0 0 0 .209-.208zm1.25 2.5c0 .806-.653 1.458-1.459 1.458H7.917a1.46 1.46 0 0 1-1.459-1.458v-2.5c0-.806.653-1.458 1.459-1.458h4.166c.806 0 1.459.652 1.459 1.458z" />
	<path fill="currentColor" d="M11.042 7.917c0-.572-.47-1.042-1.042-1.042s-1.042.47-1.042 1.042v1.25h-1.25v-1.25A2.297 2.297 0 0 1 10 5.625a2.297 2.297 0 0 1 2.292 2.292v1.25h-1.25z" />
</svg>
        <h2> Fully Secure
            <br/>
           Data Centers </h2>
        <p> Sample text. Click to select the Text Element.</p>
<svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 24 24">
	<path d="M0 0h24v24H0z" fill="none" />
	<path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 12h16m-7-7l7 7l-7 7" />
</svg>
      </div>

      <div className={styles.DDoSttack}>
      <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 24 24">
	<path d="M0 0h24v24H0z" fill="none" />
	<path fill="currentColor" d="M3 1h16a1 1 0 0 1 1 1v4a1 1 0 0 1-1 1H3a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1m0 8h16a1 1 0 0 1 1 1v.67l-2.5-1.11l-6.5 2.88V15H3a1 1 0 0 1-1-1v-4a1 1 0 0 1 1-1m0 8h8c.06 2.25 1 4.4 2.46 6H3a1 1 0 0 1-1-1v-4a1 1 0 0 1 1-1M8 5h1V3H8zm0 8h1v-2H8zm0 8h1v-2H8zM4 3v2h2V3zm0 8v2h2v-2zm0 8v2h2v-2zm13.5-7l4.5 2v3c0 2.78-1.92 5.37-4.5 6c-2.58-.63-4.5-3.22-4.5-6v-3zm0 1.94L15 15.06v2.66c0 1.54 1.07 2.98 2.5 3.34z" />
</svg>
<h2>DDos Attack
    <br/>
   Prevention</h2>

<p>Sample text. Click to select the Text Element.</p>
<svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 24 24">
	<path d="M0 0h24v24H0z" fill="none" />
	<path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 12h16m-7-7l7 7l-7 7" />
</svg>
</div>

    <div className={styles.Bandwidth}>
        <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 1024 1024">
	<path d="M0 0h1024v1024H0z" fill="none" />
	<path fill="currentColor" d="M704 446H320c-4.4 0-8 3.6-8 8v402c0 4.4 3.6 8 8 8h384c4.4 0 8-3.6 8-8V454c0-4.4-3.6-8-8-8m-328 64h272v117H376zm272 290H376V683h272z" />
	<path fill="currentColor" d="M424 748a32 32 0 1 0 64 0a32 32 0 1 0-64 0m0-178a32 32 0 1 0 64 0a32 32 0 1 0-64 0" />
	<path fill="currentColor" d="M811.4 368.9C765.6 248 648.9 162 512.2 162S258.8 247.9 213 368.8C126.9 391.5 63.5 470.2 64 563.6C64.6 668 145.6 752.9 247.6 762c4.7.4 8.7-3.3 8.7-8v-60.4c0-4-3-7.4-7-7.9c-27-3.4-52.5-15.2-72.1-34.5c-24-23.5-37.2-55.1-37.2-88.6c0-28 9.1-54.4 26.2-76.4c16.7-21.4 40.2-36.9 66.1-43.7l37.9-10l13.9-36.7c8.6-22.8 20.6-44.2 35.7-63.5c14.9-19.2 32.6-36 52.4-50c41.1-28.9 89.5-44.2 140-44.2s98.9 15.3 140 44.3c19.9 14 37.5 30.8 52.4 50c15.1 19.3 27.1 40.7 35.7 63.5l13.8 36.6l37.8 10c54.2 14.4 92.1 63.7 92.1 120c0 33.6-13.2 65.1-37.2 88.6c-19.5 19.2-44.9 31.1-71.9 34.5c-4 .5-6.9 3.9-6.9 7.9V754c0 4.7 4.1 8.4 8.8 8c101.7-9.2 182.5-94 183.2-198.2c.6-93.4-62.7-172.1-148.6-194.9" />
</svg>
<h2> Get Unmetered 
    <br/>       
  Bandwidth</h2>
<p>Sample text. Click to select the Text Element.</p>
<svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 24 24">
	<path d="M0 0h24v24H0z" fill="none" />
	<path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 12h16m-7-7l7 7l-7 7" />
</svg>
    </div>
     </div>
      </div>
  )
}
