const questions = {
    questions: [
        {
            i: 1,
            q: "¿cuales de los siguientes libros son obligatorios para tus consorcios?",
            o: [
                {n: "a", a: "libro de actas", c: false},
                {n: "b", a: "libro de propietarios", c: false},
                {n: "c", a: "libro de sueldos", c: false},
                {n: "d", a: "todos", c: true},
            ]
        },
        {
            i: 2,
            q: "¿quien es el mas groso de octopus?",
            o: [
                {n: "a", a: "seba", c: true},
                {n: "b", a: "chiama", c: false},
                {n: "c", a: "bacci", c: false},
                {n: "d", a: "guido", c: false},
            ]
        }
    ],
    getRandom(q) {
        return this.shuffle(this.questions).slice(0, q);
    },
    shuffle(array) {
        let currentIndex = array.length, temporaryValue, randomIndex;

        // While there remain elements to shuffle...
        while (currentIndex !== 0) {

            // Pick a remaining element...
            randomIndex = Math.floor(Math.random() * currentIndex);
            currentIndex -= 1;

            // And swap it with the current element.
            temporaryValue = array[currentIndex];
            array[currentIndex] = array[randomIndex];
            array[randomIndex] = temporaryValue;
        }

        return array;
    }
};

export default questions;