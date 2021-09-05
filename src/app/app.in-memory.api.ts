import {InMemoryDbService} from 'angular-in-memory-web-api';

export class AppInMemoryApi implements InMemoryDbService {
  createDb() {
    return {
      students: [
        {
          id: 1,
          name: 'Arturas Baravykas',
          markDate: '2021-09-04',
          mark: `10`
        },
        {
          id: 2,
          name: 'Eimantas Baravykas',
          markDate: '2021-09-03',
          mark: `9`
        },
        {
          id: 3,
          name: 'Domantas Baravykas',
          markDate: '2021-09-03',
          mark: `8`
        },
      ],
    };
  }
}
