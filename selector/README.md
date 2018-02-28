### Selectors Example

This example returns data in an array with nested arrays.

Example of the array 
```
const data = [
  {
    id: '1-1',
    name: "Factory",
    children: [
      {
        id: '1-1-1',
        name: "Areas",
        children: [
          {                
            id: '1-1-1-1',
            name: "Sales",
            children: [
              {
                id: '1-1-1-1-1',
                name: "Bill Gates",
                children:[...]
              },
              ...
             ]
          },
          ...
         ]
       },
       ...
      ],
    },
    ...
   ]
```

It is a console application that runs when running `$ node index.js --search <STRING>`

| Argv |  Function |
| ------ | ------ |
| --search, -s | It is the argument that receives the word that is going to search for in the array. |
| --help, -h | Show all the argv permitted |


TODO Return parents if the node have