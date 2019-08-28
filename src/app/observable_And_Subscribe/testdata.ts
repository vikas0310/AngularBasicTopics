import {InMemoryDbService} from 'angular-in-memory-web-api';

export class TestData implements InMemoryDbService {

    createDb() {
        const bookDetails =
        [
            {id: 1, name: 'Ang'},
            {id: 2, name: 'Bng'},
            {id: 3, name: 'Cng'},
        ];
        return {books: bookDetails};
    }
}
