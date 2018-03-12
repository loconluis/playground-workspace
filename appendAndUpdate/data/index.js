const data = [
  {
    id: 'b120711a-0302-4a19-a23d-b4339f1bc6a2',
    name: "Empresa",
    parentId: undefined,
    children: [
      {
        id: 'cb6fae6f-028c-4262-98aa-9fd36d26bc51',
        name: "Areas",
        parentId: 'b120711a-0302-4a19-a23d-b4339f1bc6a2',
        children: [
          {
            id: '62de6222-9b84-491c-848b-deb2296a959d',
            name: "Ventas",
            parentId: 'cb6fae6f-028c-4262-98aa-9fd36d26bc51',
            children: [
              {
                id: 'e5ee2edc-6d03-4813-9fe8-f0ce09d62bcb',
                name: "Juan Perez",
                parentId: '62de6222-9b84-491c-848b-deb2296a959d',
                children: [
                  {
                    id: '5141b464-d522-42d3-9abb-4a9a1a219487',
                    name: "Sahir Mhid",
                    parentId: 'e5ee2edc-6d03-4813-9fe8-f0ce09d62bcb',
                    children: []
                  },
                  {
                    id: 'f99e3632-4001-4a8e-8e34-fe99f1659196',
                    name: "Cristiano Ronaldo",
                    parentId: 'e5ee2edc-6d03-4813-9fe8-f0ce09d62bcb',
                    children: []
                  },
                  {
                    id: 'dbacef87-a84d-493f-97ce-48a7ae0f08be',
                    name: "Sahir Mhid",
                    parentId: 'e5ee2edc-6d03-4813-9fe8-f0ce09d62bcb',
                    children: []
                  },
                  {
                    id: '4784cca8-17d4-4c62-8e59-59d1e83fd5a0',
                    name: "Ala Hadid",
                    parentId: 'e5ee2edc-6d03-4813-9fe8-f0ce09d62bcb',
                    children: []
                  },
                  {
                    id: 'e828f779-0155-41e1-843e-203568fdbcae',
                    name: "Jupiter Saturno",
                    parentId: 'e5ee2edc-6d03-4813-9fe8-f0ce09d62bcb',
                    children: []
                  },
                  {
                    id: 'decc2cba-b7ed-4819-8be9-fafb7d37b023',
                    name: "Roberto Carlos",
                    parentId: 'e5ee2edc-6d03-4813-9fe8-f0ce09d62bcb',
                    children: []
                  }
                ]     
              },
              {
                id: '5ff4c445-5714-4845-af00-51534ea2355b',
                name: "Norman Ramirez",
                parentId: '62de6222-9b84-491c-848b-deb2296a959d',
                children: []
              }
            ]
          },
          {
            id: '39d87fd5-f730-4a34-94e4-058319df62a1',
            name: "Desarrollo",
            parentId: 'cb6fae6f-028c-4262-98aa-9fd36d26bc51',
            children: [
              {
                id: '5b89925a-3751-491b-bc8b-6bb6108cb2a0',
                name: "Mark Twain",
                children: []
              },
              {
                id: '5dba8dbc-f23c-4e9c-9490-1ecf4208a0b7',
                name: "Chung Ho!",
                children: []
              }
            ]
          }
        ]
      }
    ]
  },
  {
    id: '04267eb9-2ba0-4abf-b979-821a1bbf125e',
    name: "Empresa 2",
    parentId: undefined,
    children: [
      {
        id: 'e3ad62ad-859a-4289-9c5e-2e3541a9e022',
        name: 'Areas',
        parentId: '04267eb9-2ba0-4abf-b979-821a1bbf125e',
        children: 
        [
          {
            id: 'f4f5e63c-7d64-4e76-90b0-5e8c4493c5c8',
            name: 'Gerentes',
            parentId: 'e3ad62ad-859a-4289-9c5e-2e3541a9e022',
            children: 
              [
                {
                  id: '43f833b7-f8c8-4fab-95d0-3b202e3f7092',
                  name: 'Amado Salvador',
                  parentId: 'f4f5e63c-7d64-4e76-90b0-5e8c4493c5c8',
                  children: []
                },
                {
                  id: '689cdc59-b723-4081-b03e-9721d4a0e685',
                  name: 'Jupiter Saturno',
                  parentId: 'f4f5e63c-7d64-4e76-90b0-5e8c4493c5c8',
                  children: []
                }
              ]
          },
          {
            id: 'e237d414-92ae-4e15-b54b-4f75ac4cf4c0',
            name: 'not defined',
            parentId: 'e3ad62ad-859a-4289-9c5e-2e3541a9e022',
            children: []
          }
        ]
      }
    ]
  },
  {
    id: 'c3f53f5a-955b-48a5-9c51-23140ba305e8',
    name: 'Empresa 3',
    parentId: undefined,
    children: [
      {
        id: 'c8aff606-1e30-4190-950e-05be6ad1b6ec',
        name: 'Areas',
        parentId: 'c3f53f5a-955b-48a5-9c51-23140ba305e8',
        children: [
          {
            id: 'a4019b9d-8816-4803-a3c8-bb927e267684',
            name: 'Despacho',
            parentId: 'c8aff606-1e30-4190-950e-05be6ad1b6ec',
            children: [
              {
                id: '987a6744-eace-4bf0-a328-33844f2e7439',
                name: 'Justo Cabal',
                parentId: 'a4019b9d-8816-4803-a3c8-bb927e267684',
                children: []
              },
              {
                id: '02f33235-e04a-46fe-9a4e-a2c35436c3bd',
                name: 'Cristian Castro',
                parentId: 'a4019b9d-8816-4803-a3c8-bb927e267684',
                children: []
              },
              {
                id: '4704982e-0d08-45e2-9fe7-964245c6ab04',
                name: 'Belen Perez',
                parentId: 'a4019b9d-8816-4803-a3c8-bb927e267684',
                children: []
              }
            ]
          }
        ]
      }
    ]
  }
];

module.exports = data;