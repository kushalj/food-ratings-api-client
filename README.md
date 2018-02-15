# food-ratings-api-client
A (very) simple script to learn how to read data from api.ratings.food.gov.uk as the docs are not clear.

```yarn install``` (or npm install)

```node ./script.js '<establishment name>' '<authority name>'```

Authority name is just a .includes() so 'Leicester' returns positive for 'Leicester City' or similar.

from the folder:

```node ./script.js 'Siam' 'Leicester'```

