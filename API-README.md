## Server API --- sample data

### 12 random listings
  * GET `/api/more_places`

**Path Parameters:**
  * none ( get all limit 12 (randomized) )

**Success Status Code:** `200`

**Returns:** JSON

```json (12 objects, reduced to 1 to save space)
  [
      {
          "_id": "5f86884bd4a01b32b1541f47",
          "houseId": 47,
          "photoUrl": "https://airbnb-fake-images.s3-us-west-1.amazonaws.com/img-48.jpg",
          "location": "Los Angeles",
          "description": "Ultra Luxury Room",
          "isSuperHost": true,
          "rating": "5.0",
          "reviewCount": 74,
          "isSaved": false,
          "savedTo": "None",
          "roomType": "Entire Apartment",
          "numBeds": 1,
          "price": 441,
          "__v": 0
      }
  ]
```



### Get saved lists
  * GET `/api/saved_lists`

**Path parameters:**
  * none (get all)

**Success Status Code:** `200`

**Returns:** JSON

```json (list of list objects)
[
    {
        "_id": "5f873d26c45c11154b4f50b0",
        "name": "mylist",
        "photoUrl": "https://source.unsplash.com/480x480/?home&sig=0.8394293199360257",
        "count": 2,
        "time": "Any time"
    }
]
```


### Get specific collection by houseId
  * `/api/collection_name`

**Path parameters:**
  * query `/hcho1?houseId=1`

**Success Status Code:** `200`

**Returns:** JSON

```json (object with info)
{
    "_id": "5f86884bd4a01b32b1541f2c",
    "savedTo": "mylist"
}
```



### Add list
  * POST `/api/create_list`

**Success Status Code:** `201`

**Request Body**: Expects JSON with the following keys.

```json
    {
      "name": "String",
      "photoUrl": "String"
    }
```


### update the saved props of a listing when created
  * PATCH `/api/update_listing`

**Path Parameters:**
  * none, uses req.body

**Success Status Code:** `202`

**Request Body**: Expects JSON with the following keys.

```json
    {
      "houseId": "String",
      "name": "String"
    }
```


### update the saved props of a listing and count of collection when clicked
  * PATCH `/api/update_collection`

**Path Parameters:**
  * none, uses req.body

**Success Status Code:** `202`

**Request Body**: Expects JSON with the following keys.

```json
    {
      "houseId": "String",
      "name": "String",
      "isSaved": "Boolean"
    }
```




### Delete restaurant
  * DELETE `/api/restaurant/:id`

**Path Parameters:**
  * `id` restaurant id

**Success Status Code:** `204`

### Add image to restaurant
  * POST `/api/restaurants/:restaurantId/images`

**Path Parameters:**

  * `restaurantId` restaurant id

**Success Status Code:** `201`

**Request Body**: Expects JSON with the following keys.

```json
    {
      "user": "String",
      "image": "image URL",
      "description": "String",
      "posted": "YYYY-MM-MM",
      "googleMap": "String location",
      "category": "String",
      "restaurant": "id Number",
      "cost": "Number"
    }
```