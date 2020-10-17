## Server API --- sample data



### at a given property listings, gets 12 random property listings for more-places component
  * GET `/api/more_places`


UPDATE ROUTES TO USE STANDARD CONVENTION (ID PER PAGE)
  * GET `/api/listings/:id/more-places`

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



### Gets a user's saved property collections
  * GET `/api/collections`
  * GET `/api/user/:id/collections`

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
    },
    {
        "_id": "5f873d26c45c11154b4f50b0",
        "name": "mylist",
        "photoUrl": "https://source.unsplash.com/480x480/?home&sig=0.8394293199360257",
        "count": 2,
        "time": "Any time",
        "saved_properties": "['456217652', '561643219']"
    }
]
```



### FLAGGED FOR DEPRECATION - When removing a property from saved lists, gets the saved list name from a property id
  * GET `/api/properties/collections`
  * GET `/api/properties/:id/collections`

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



### Adds a new collection to db
  * POST `/api/collections`
  * POST `/api/user/:id/collections`

**Success Status Code:** `201`

**Request Body**: Expects JSON with the following keys.

```json
    {
      "name": "String",
      "photoUrl": "String"
    }
```



### update the saved props of a listing and count of collection when clicked

### save and unsave a property to a list (or lists)

  * PATCH `/api/collections`
  * PATCH `/api/user/:id/collections`

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



### Delete all collections
  * DELETE `/api/collections`
  * DELETE `/api/user/:id/collections/:name`

**Path Parameters:**
  * REMOVE, use request parameters instead of: query `/?name=String`

**Success Status Code:** `204`



### DEPRECATED - update the saved props of a listing when created
  * PATCH `/api/saved_listing`

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