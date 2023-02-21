console.log("ciao")

const slides = [
    {
      image: './img/01.webp',
      title: "Marvel's Spiderman Miles Morales",
      text: 'Experience the rise of Miles Morales as the new hero masters incredible, explosive new powers to become his own Spider-Man.',
    },
    {
      image: './img/02.webp',
      title: 'Ratchet & Clank: Rift Apart',
      text: 'Go dimension-hopping with Ratchet and Clank as they take on an evil emperor from another reality.',
    },
    {
      image: './img/03.webp',
      title: 'Fortnite',
      text: 'Grab all of your friends and drop into Epic Games Fortnite, a massive 100 - player face - off that combines looting, crafting, shootouts and chaos.',
    },
    {
      image: './img/04.webp',
      title: 'Stray',
      text: 'Lost, injured and alone, a stray cat must untangle an ancient mystery to escape a long-forgotten city',
    },
    {
      image: './img/05.webp',
      title: "Marvel's Avengers",
      text: "Marvel's Avengers is an epic, third-person, action-adventure game that combines an original, cinematic story with single-player and co-operative gameplay.",
    },
  ]

// Descrizione:
// Partendo dal markup della versione svolta in js plain, rifare lo slider ma questa volta usando Vue.
// Sotto trovate l’array di slide da cui partire.
// Le immagini potete recuperarle dalla vecchia repo o sostituirle con quelle che volete.

// Bonus:
// applicare l’autoplay allo slider: ogni 3 secondi, cambia immagine automaticamente (occorre studiare il Lifecycle Hooks di Vue, in fondo trovate il link alla doc)
// quando il mouse va in hover sullo slider, bloccare l’autoplay e farlo riprendere quando esce

// Consigli del giorno:
// procedere per piccoli step è sempre la soluzione migliore.
// potrebbe aiutarvi fare prima qualche prova per prendere confidenza con la direttiva v-for provando a stampare prima an array di stringhe e poi un array di oggetti con diverse proprietà.
// in questo esercizio la difficoltà sta nel capire in che modo tradurre in vue il vecchio codice scritto in vanilla js.
// Per questo motivo teniamo a mente che in vue js non manipoliamo il DOM direttamente dal javascript ma manipoliamo i valori delle proprietà dentro data(), e il DOM viene sincronizzato da vue per rispecchiare queste modifiche.
// regola d’oro: riciclare ovunque possibile! Questo significa che per la parte di markup possiamo recuperare html e css dell’esercizio svolto qualche giorno fa: è già tutto pronto!
// il riciclo spesso va a braccetto con le funzioni! Sapendole sfruttare bene, l’esercizio si riduce a poche righe :occhiolino:
// Ultimo ma più importante: andate sulla documentazione a rivedere ed approfondire gli argomenti visti in questi giorni: v-bind, v-for, v-if, v-model, v-on/@. sotto trovate alcuni link

const { createApp } = Vue



createApp({
  data() {
    return {
      slides: slides, //arrey di oggetti

      currentIndex: 0, 

      slideAttiva: 0,
       
    }
  },

  methods:{
    nextSlide(){
      
      const lastIndex = this.slides.length-1
      
      if(this.currentIndex < lastIndex){
        this.currentIndex++
      } else {
        this.currentIndex = 0
      }
    },

    prevSlide(){
      
      this.currentIndex--
    },
  },

}).mount('#app')

