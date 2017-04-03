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

export default {
  range(func, start = 2, stop = 8) {
    for (let octave = start; octave <= stop; ++octave) {
      func(octave);
    }
  },
  get keys() {
    let arr = [];
    const notes = this.notes;
    this.range(octave => {
      for (let note in notes) {
        const number = notes[note];
        arr = [...arr, { note, number }];
      }
    });
    
    return arr.slice(0, 49);
  },
  get notes() {
    let map = {};
    this.range(octave => {
      for (let note in base) {
        const key = base[note] + (octave * 12);
        map[`${note}${octave}`] = key;
        if (!enharmonic.includes(note)) map[`${note}#${octave}`] = key + 1;
      }
    });
    
    return map;
  },
};
