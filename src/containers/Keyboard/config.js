const base = {
  C: 12,
  D: 14,
  E: 16,
  F: 17,
  G: 19,
  A: 21,
  B: 23,
};

const enharmonic = ['B', 'E'];

const range = (map, func, start = 2, stop = 8) => {
  for (let octave = start; octave <= stop; ++octave) {
    for (let note in map) {
      func({ note, octave });
    }
  }
};

export default {
  keys(total = 49) {
      let arr = [];
      const notes = this.notes;
      range(notes, ({ note }) => {
        const number = notes[note];
        arr = [...arr, { note, number }];
      });

      return arr.slice(0, total);
    },
    get notes() {
      let map = {};
      range(base, ({ note, octave }) => {
        const key = base[note] + (octave * 12);
        map[`${note}${octave}`] = key;
        if (!enharmonic.includes(note)) map[`${note}#${octave}`] = key + 1;
      });

      return map;
    },
};
