//Practice working with objects for upcoming problems 
const user = {
    id: 101,
    email: 'jack@dev.com',
    personalInfo: {
        name: 'Jack',
        userName: 'regenJack',
        address: {
            line1: 'westwish st',
            line2: 'washmasher',
            city: 'wallas',
            state: 'WX'
        }
    }
}
//access name of user
//access the state
//change the email, name, and location 
function userUpdate(obj){
    obj.email = 'new@email.com'
    obj.personalInfo.name = 'Nancy'
    user.personalInfo.address = {
        line1: 'homestead rd', 
        line2: 'northmoor', 
        city: 'kcmo', 
        state: 'MO'
    }
    return obj
}

//this works for one object 
userUpdate(user)

//what about an array? 
//access the second to last tag in each object in this array 
let arrayObject = [
  {
    "_id": "63cd4224b9475cfde9c62ac4",
    "index": 0,
    "guid": "96ce68c0-580f-4d98-b744-5deb18aa677b",
    "isActive": false,
    "balance": "$3,634.04",
    "picture": "http://placehold.it/32x32",
    "age": 24,
    "eyeColor": "blue",
    "name": "Chambers Jimenez",
    "gender": "male",
    "company": "QABOOS",
    "email": "chambersjimenez@qaboos.com",
    "phone": "+1 (859) 539-3554",
    "address": "319 Metrotech Courtr, Boomer, Missouri, 4158",
    "about": "Do esse laborum exercitation ad. Eiusmod dolor aute veniam esse cupidatat ullamco consectetur non pariatur laboris elit. Sunt ut excepteur minim id deserunt ullamco nostrud exercitation reprehenderit do amet duis adipisicing. Exercitation et ex Lorem cillum irure nostrud velit ullamco ex. Aute non ipsum enim in adipisicing sit voluptate officia. Deserunt excepteur ex est in laborum dolor id.\r\n",
    "registered": "2021-09-13T03:00:07 +05:00",
    "latitude": 79.180835,
    "longitude": -120.475431,
    "tags": [
      "amet",
      "id",
      "ipsum",
      "amet",
      "velit",
      "consequat",
      "incididunt"
    ],
    "friends": [
      {
        "id": 0,
        "name": "James Hart"
      },
      {
        "id": 1,
        "name": "Erma Acevedo"
      },
      {
        "id": 2,
        "name": "Bette Wiggins"
      }
    ],
    "greeting": "Hello, Chambers Jimenez! You have 8 unread messages.",
    "favoriteFruit": "banana"
  },
  {
    "_id": "63cd4224112927616236e72b",
    "index": 1,
    "guid": "b363102c-4dab-4699-8c87-e506b6a0ba67",
    "isActive": false,
    "balance": "$2,622.77",
    "picture": "http://placehold.it/32x32",
    "age": 31,
    "eyeColor": "blue",
    "name": "Dixie Barnes",
    "gender": "female",
    "company": "ENTROPIX",
    "email": "dixiebarnes@entropix.com",
    "phone": "+1 (978) 535-3316",
    "address": "369 Harrison Place, Fairmount, Alaska, 8404",
    "about": "Sunt qui anim incididunt commodo deserunt cillum ea tempor culpa aute aute ex excepteur laborum. Esse ea adipisicing voluptate in irure irure consequat non voluptate. Ut cupidatat in nulla culpa consectetur aute qui aliqua ea magna ut. Sit consequat labore adipisicing do id magna quis dolor dolore aute tempor duis proident. Consectetur irure duis eiusmod officia proident sit veniam elit aliqua aliqua pariatur enim aliqua adipisicing. Pariatur eiusmod id commodo ad sint exercitation. Ut fugiat laboris Lorem veniam cupidatat fugiat ea eu eu non esse.\r\n",
    "registered": "2021-06-28T04:18:42 +05:00",
    "latitude": 3.782473,
    "longitude": 39.573689,
    "tags": [
      "incididunt",
      "labore",
      "eu",
      "Lorem",
      "veniam",
      "elit",
      "occaecat"
    ],
    "friends": [
      {
        "id": 0,
        "name": "Downs Holcomb"
      },
      {
        "id": 1,
        "name": "Kaufman Lynn"
      },
      {
        "id": 2,
        "name": "Alston Armstrong"
      }
    ],
    "greeting": "Hello, Dixie Barnes! You have 9 unread messages.",
    "favoriteFruit": "strawberry"
  }
]
//access the name of the our user
const nestedArray = [
    {
      "_id": "63cd4224b9475cfde9c62ac4",
      "index": 0,
      "guid": "96ce68c0-580f-4d98-b744-5deb18aa677b",
      "isActive": false,
      "balance": "$3,634.04",
      "picture": "http://placehold.it/32x32",
      "age": 24,
      "eyeColor": "blue",
      "name": "Chambers Jimenez",
      "gender": "male",
      "company": "QABOOS",
      "email": "chambersjimenez@qaboos.com",
      "phone": "+1 (859) 539-3554",
      "address": "319 Metrotech Courtr, Boomer, Missouri, 4158",
      "about": "Do esse laborum exercitation ad. Eiusmod dolor aute veniam esse cupidatat ullamco consectetur non pariatur laboris elit. Sunt ut excepteur minim id deserunt ullamco nostrud exercitation reprehenderit do amet duis adipisicing. Exercitation et ex Lorem cillum irure nostrud velit ullamco ex. Aute non ipsum enim in adipisicing sit voluptate officia. Deserunt excepteur ex est in laborum dolor id.\r\n",
      "registered": "2021-09-13T03:00:07 +05:00",
      "latitude": 79.180835,
      "longitude": -120.475431,
      "tags": [
        "amet",
        "id",
        "ipsum",
        "amet",
        "velit",
        "consequat",
        "incididunt"
      ],
      "friends": [
        {
          "id": 0,
          "name": "James Hart"
        },
        {
          "id": 1,
          "name": "Erma Acevedo"
        },
        {
          "id": 2,
          "name": "Bette Wiggins"
        }
      ],
      "greeting": "Hello, Chambers Jimenez! You have 8 unread messages.",
      "favoriteFruit": "banana"
    },
        {
          "_id": "63cd4224b9475cfde9c62ac4",
          "index": 0,
          "guid": "96ce68c0-580f-4d98-b744-5deb18aa677b",
          "isActive": false,
          "balance": "$3,634.04",
          "picture": "http://placehold.it/32x32",
          "age": 24,
          "eyeColor": "blue",
          "name": "Chambers Jimenez",
          "gender": "male",
          "company": "QABOOS",
          "email": "chambersjimenez@qaboos.com",
          "phone": "+1 (859) 539-3554",
          "address": "319 Metrotech Courtr, Boomer, Missouri, 4158",
          "about": "Do esse laborum exercitation ad. Eiusmod dolor aute veniam esse cupidatat ullamco consectetur non pariatur laboris elit. Sunt ut excepteur minim id deserunt ullamco nostrud exercitation reprehenderit do amet duis adipisicing. Exercitation et ex Lorem cillum irure nostrud velit ullamco ex. Aute non ipsum enim in adipisicing sit voluptate officia. Deserunt excepteur ex est in laborum dolor id.\r\n",
          "registered": "2021-09-13T03:00:07 +05:00",
          "latitude": 79.180835,
          "longitude": -120.475431,
          "tags": [
            "amet",
            "id",
            "ipsum",
            "amet",
            "velit",
            "consequat",
            "incididunt"
          ],
          "friends": [
            {
              "id": 0,
              "name": "James Hart"
            },
            {
              "id": 1,
              "name": "Erma Acevedo"
            },
            {
              "id": 2,
              "name": "Bette Wiggins"
            }
          ],
          "greeting": "Hello, Chambers Jimenez! You have 8 unread messages.",
          "favoriteFruit": "banana"
        },
        {
          "_id": "63cd4224112927616236e72b",
          "index": 1,
          "guid": "b363102c-4dab-4699-8c87-e506b6a0ba67",
          "isActive": false,
          "balance": "$2,622.77",
          "picture": "http://placehold.it/32x32",
          "age": 31,
          "eyeColor": "blue",
          "name": "Dixie Barnes",
          "gender": "female",
          "company": "ENTROPIX",
          "email": "dixiebarnes@entropix.com",
          "phone": "+1 (978) 535-3316",
          "address": "369 Harrison Place, Fairmount, Alaska, 8404",
          "about": "Sunt qui anim incididunt commodo deserunt cillum ea tempor culpa aute aute ex excepteur laborum. Esse ea adipisicing voluptate in irure irure consequat non voluptate. Ut cupidatat in nulla culpa consectetur aute qui aliqua ea magna ut. Sit consequat labore adipisicing do id magna quis dolor dolore aute tempor duis proident. Consectetur irure duis eiusmod officia proident sit veniam elit aliqua aliqua pariatur enim aliqua adipisicing. Pariatur eiusmod id commodo ad sint exercitation. Ut fugiat laboris Lorem veniam cupidatat fugiat ea eu eu non esse.\r\n",
          "registered": "2021-06-28T04:18:42 +05:00",
          "latitude": 3.782473,
          "longitude": 39.573689,
          "tags": [
            "incididunt",
            "labore",
            "eu",
            "Lorem",
            "veniam",
            "elit",
            "occaecat"
          ],
          "friends": [
            {
              "id": 0,
              "name": "Downs Holcomb"
            },
            {
              "id": 1,
              "name": "Kaufman Lynn"
            },
            {
              "id": 2,
              "name": "Alston Armstrong"
            }
          ],
          "greeting": "Hello, Dixie Barnes! You have 9 unread messages.",
          "favoriteFruit": "strawberry"
        },
        {
          "_id": "63cd42244fe9cf0ed1b81f2c",
          "index": 2,
          "guid": "611df0e1-21b0-4f94-a054-fc85d2c3500c",
          "isActive": false,
          "balance": "$3,091.82",
          "picture": "http://placehold.it/32x32",
          "age": 39,
          "eyeColor": "blue",
          "name": "Virgie Norton",
          "gender": "female",
          "company": "REVERSUS",
          "email": "virgienorton@reversus.com",
          "phone": "+1 (885) 548-3816",
          "address": "651 Pine Street, Rivers, Georgia, 9639",
          "about": "Culpa officia aliquip in commodo non esse amet. Sit commodo irure sit cillum velit mollit magna irure consequat cillum aliquip deserunt. Duis elit et sunt veniam deserunt qui do non sunt voluptate aute ad sit. Labore consectetur proident in in dolor Lorem elit labore ex. Ea sunt id mollit ullamco consequat do do dolore sint amet adipisicing et nostrud. Et et consequat exercitation deserunt laboris magna ipsum occaecat in occaecat dolor sunt sit eu. Excepteur dolore veniam exercitation ipsum aliquip mollit.\r\n",
          "registered": "2022-09-14T03:00:30 +05:00",
          "latitude": 75.225808,
          "longitude": -2.789696,
          "tags": [
            "anim",
            "eu",
            "labore",
            "incididunt",
            "nulla",
            "ad",
            "ullamco"
          ],
          "friends": [
            {
              "id": 0,
              "name": "Anthony Miller"
            },
            {
              "id": 1,
              "name": "Workman Riley"
            },
            {
              "id": 2,
              "name": "Elliott Hinton"
            }
          ],
          "greeting": "Hello, Virgie Norton! You have 5 unread messages.",
          "favoriteFruit": "strawberry"
        },
        {
          "_id": "63cd4224051d3e14023f0031",
          "index": 3,
          "guid": "a23ac480-864b-4d5c-a0f5-eae961465e74",
          "isActive": false,
          "balance": "$3,614.45",
          "picture": "http://placehold.it/32x32",
          "age": 36,
          "eyeColor": "brown",
          "name": "Carla Fernandez",
          "gender": "female",
          "company": "ZILLA",
          "email": "carlafernandez@zilla.com",
          "phone": "+1 (989) 502-2052",
          "address": "268 Gold Street, Cuylerville, New Mexico, 9775",
          "about": "Enim culpa nulla esse mollit fugiat pariatur pariatur velit. Id culpa duis adipisicing culpa officia ipsum id culpa ea reprehenderit sit quis excepteur. Lorem sit reprehenderit ipsum quis culpa non. Quis ex id dolor aute non minim.\r\n",
          "registered": "2014-08-07T04:13:36 +05:00",
          "latitude": 70.972266,
          "longitude": 150.586472,
          "tags": [
            "nostrud",
            "officia",
            "ad",
            "dolor",
            "fugiat",
            "proident",
            "aliquip"
          ],
          "friends": [
            {
              "id": 0,
              "name": "Marisol Sharpe"
            },
            {
              "id": 1,
              "name": "Harrell Soto"
            },
            {
              "id": 2,
              "name": "Lawson Leonard"
            }
          ],
          "greeting": "Hello, Carla Fernandez! You have 3 unread messages.",
          "favoriteFruit": "banana"
        },
        {
          "_id": "63cd4224e80de91f9de27af3",
          "index": 4,
          "guid": "cb45821b-8baf-4338-bc31-edaf5372fdb5",
          "isActive": false,
          "balance": "$2,520.75",
          "picture": "http://placehold.it/32x32",
          "age": 40,
          "eyeColor": "blue",
          "name": "Bowen Ramsey",
          "gender": "male",
          "company": "ELENTRIX",
          "email": "bowenramsey@elentrix.com",
          "phone": "+1 (917) 591-3575",
          "address": "831 Conklin Avenue, Canterwood, Illinois, 7478",
          "about": "Dolor sint proident cupidatat voluptate culpa in ipsum laborum et Lorem. Proident nisi ut magna amet. Minim labore veniam Lorem do excepteur minim non. Qui mollit voluptate fugiat elit eu laborum quis. Duis ut duis adipisicing excepteur. Enim commodo nulla deserunt quis.\r\n",
          "registered": "2015-03-04T08:47:20 +06:00",
          "latitude": -84.299042,
          "longitude": 90.90448,
          "tags": [
            "veniam",
            "sint",
            "dolor",
            "consequat",
            "ipsum",
            "ullamco",
            "duis"
          ],
          "friends": [
            {
              "id": 0,
              "name": "Leigh Willis"
            },
            {
              "id": 1,
              "name": "Winifred Mitchell"
            },
            {
              "id": 2,
              "name": "Lorie Park"
            }
          ],
          "greeting": "Hello, Bowen Ramsey! You have 8 unread messages.",
          "favoriteFruit": "banana"
        }
      
  ]

  //for every 
//When working with complex  data structures 
function secondToLastTag(obj){
    for(let i=0;i<obj.length; i++){
        console.log(obj[i]["tags"][(obj[i]["tags"].length)-2])
    }
    // console.log(obj.length)
}
secondToLastTag(nestedArray)
console.log(nestedArray[0]["tags"])