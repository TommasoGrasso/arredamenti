import{r as i,j as s}from"./index-fcYKr-mQ.js";const h=({onClose:d})=>{const[m,r]=i.useState(!1),[a,n]=i.useState([{from:"bot",text:"Benvenuto! Come possiamo aiutarti?"}]),[o,l]=i.useState(""),c=i.useRef(null),f=()=>{r(!0),setTimeout(()=>{d(),r(!1)},350)},x=t=>{const e=t.toLowerCase();return e.includes("ciao")||e.includes("salve")||e.includes("buongiorno")?"Ciao! 😊 Come posso aiutarti?":e.includes("informazioni")||e.includes("info")?"Certo! Dimmi pure di quali informazioni hai bisogno.":e.includes("prezzo")||e.includes("costo")||e.includes("quanto")?"Possiamo fornirti un preventivo personalizzato. Su quale prodotto o servizio ti interessa avere il prezzo?":e.includes("montaggio")||e.includes("consegna")?"Effettuiamo consegna e montaggio con personale qualificato. Vuoi sapere tempi, costi o disponibilità?":e.includes("progettazione")||e.includes("progetto")?"I nostri designer realizzano progetti d’arredo su misura. Vuoi parlarci del tuo spazio?":e.includes("appuntamento")||e.includes("showroom")||e.includes("visita")?"Possiamo fissare un appuntamento nel nostro showroom. Quale giorno preferisci?":e.includes("orari")||e.includes("aperti")?"Siamo aperti dal lunedì al sabato. Vuoi conoscere gli orari esatti?":e.includes("assistenza")||e.includes("aiuto")||e.includes("problema")?"Siamo qui per aiutarti! Raccontami il problema e ti forniamo subito assistenza.":e.includes("contatti")||e.includes("telefono")||e.includes("numero")?"Vuoi essere ricontattato da un nostro consulente? Posso raccogliere i tuoi dati.":"Perfetto, dimmi qualcosa in più così posso aiutarti al meglio!"},u=()=>{if(!o.trim())return;const t=o;n(e=>[...e,{from:"user",text:t}]),l(""),setTimeout(()=>{const e=x(t);n(p=>[...p,{from:"bot",text:e}])},700)};return i.useEffect(()=>{const t=c.current;t&&(t.scrollTop=t.scrollHeight,requestAnimationFrame(()=>{t.scrollTo({top:t.scrollHeight,behavior:"smooth"})}))},[a]),s.jsxs("div",{className:`
    absolute
    z-50
    will-change-transform

    /* -------MOBILE + TABLET (fino a 1023px)------- */
    max-lg:top-[54%]
    max-lg:w-[90%]
    max-lg:h-[65%]
    max-lg:left-1/2
    max-lg:-translate-x-1/2
    max-lg:-translate-y-1/2

    /* -----DESKTOP (1024px e oltre)------- */
    lg:top-[15%]
    lg:right-10
    lg:w-[40%]
    lg:h-[75%]

    rounded-2xl
    shadow-xl
    flex flex-col

    ${m?"animate-softClose":"animate-softPop"}
  `,children:[s.jsxs("div",{className:"flex justify-between items-center p-4 bg-red-950 text-white rounded-t-xl",children:[s.jsx("h3",{className:"text-xl font-semibold tracking-wide",children:"Assistenza Clienti"}),s.jsx("button",{onClick:f,className:"text-white hover:text-gray-300 text-2xl",children:"✕"})]}),s.jsxs("div",{className:"flex-1 overflow-y-auto p-4 space-y-3 bg-gray-50",ref:c,children:[s.jsxs("div",{className:"text-red-950 inline-flex flex-col items-start cursor-pointer scale-90 origin-left",children:[s.jsx("div",{className:"w-[100px] h-14 relative",children:s.jsxs("div",{className:"absolute top-0 left-0 inline-flex items-center transition-all scale-100 origin-left",children:[s.jsx("div",{className:"w-14 h-14 flex items-center justify-center border-2 relative cursor-pointer",children:s.jsx("span",{className:"text-3xl font-[Oswald] font-light tracking-widest transform translate-x-4.5 translate-y-2",children:"F"})}),s.jsx("span",{className:"ml-1 mt-4.5 self-center text-3xl font-[Oswald] font-light tracking-widest",children:"INO"})]})}),s.jsx("div",{className:"w-full flex justify-center mt-0.5 transition-all",children:s.jsx("span",{className:"text-base font-[Oswald] font-light tracking-[0.2em] z-20 whitespace-nowrap",children:"ARREDAMENTI"})})]}),a.map((t,e)=>s.jsx("div",{className:`px-4 py-2 text-red-950 text-sm max-w-[80%] rounded-lg shadow-sm ${t.from==="user"?"ml-auto bg-white border border-gray-300":"mr-auto bg-red-100 text-red-900 border border-red-300"}`,children:t.text},e))]}),s.jsxs("div",{className:"p-3 bg-white border-t border-gray-300 flex gap-2 items-center",children:[s.jsx("input",{type:"text",placeholder:"Richiedi Informazioni...",value:o,onChange:t=>l(t.target.value),onKeyDown:t=>t.key==="Enter"&&u(),className:"w-full text-red-950 p-3 rounded-lg border border-red-950 focus:outline-none focus:border-red-900"}),s.jsx("button",{onClick:u,className:"px-4 py-2 bg-red-950 text-white rounded-lg hover:bg-red-800 transition font-bold",children:"➤"})]})]})};export{h as default};
