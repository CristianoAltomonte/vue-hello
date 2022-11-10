// DESCRIZIONE:
// Stampare a schermo un messaggio all’interno di un h1, utilizzando i data.
// Bonus:
// Aggiungere alla pagina un’immagine, presa anch’essa da un data.

var app = new Vue({
    el: '#root',
    data: {
        testo: 'text-danger',
        message: 'Hello Vue!',
        image: 'https://picsum.photos/id/237/300/300'
    },

    methods: {

        // Possiamo associare un evento a molti
        // dei nostri tag come il click su un
        // bottone, il premere invio all’interno di
        // un input e tanti altri!

        coloreTesto: function () {

            if (this.testo == 'text-danger') {
                return this.testo = 'text-primary'
            }
            return this.testo = 'text-danger';

        },

        cambioImmagine: function () {

            if (this.image == 'https://picsum.photos/id/237/300/300') {
                return this.image = 'https://picsum.photos/300/300?grayscale'
            }
            return this.image = 'https://picsum.photos/id/237/300/300';
            

        },
    }
})
