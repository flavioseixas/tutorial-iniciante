export class NoteService {

    notes=[
        {
          id: '1',
          date: '2016-01-01',
          title: 'Ionic 2',
          content: 'Learn the basics of Ionic 2.'
        },
        {
          id: '2',
          date: '2016-01-01',
          title: 'Ionic 2',
          content: 'Learn the basics of Ionic 2.'
        },
        {
          id: '3',
          date: '2016-01-01',
          title: 'Ionic 2',
          content: 'Learn the basics of Ionic 2.'
        }
      ];
    
      removeNote(note) {
        let index = this.notes.indexOf(note);
        if(index>-1) {
            this.notes.splice(index,1);
        }

      }
}