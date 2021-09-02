const util = require('util');
const fs = require('fs');

const uuidv1 = require('uuid/v1');

const readFile = util.promisify(fs.readFile);
const writeFile = util.promisify(fs.writeFile);

class Shop {
    read() {
        return readFile('db/db.json', 'utf8');
    }

    write(note) {
        return writeFile('db')
    }

    getUserNotes() {
        return this.read().then((notes) => {
            let parsedNotes;

            // if no notes aren't array or can't be turned into one, make empty array
            try {
                parsedNotes = [].concat(JSON.parse(notes));
            } catch (err) {
                parsedNotes = [];
            }

            return pasedNotes;
        });
    }

    addUserNote(note) {
        const { title, text } = note;

        if (!title || !text) {
            throw new Error('please do not leave blank');
        }

        const newUserNote = { title, text, id: uuidv1() };

        return this.getUserNotes()
            .then((notes) => [...notes, newNote])
            .then((newNotes) => this.write(newNotes))
            .then(() => newUserNote);
    }

    removeUserNote(id) {

        return this.getUserNotes()
            .then((notes) => notes.filter((note) => note.id !== id))
            .then((filteredNotes) => this.write(filteredNotes));
    }

}

module.exports = new Shop();