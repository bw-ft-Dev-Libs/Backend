# Dev Libs Backend

## [https://dev-libs-test.herokuapp.com/](https://dev-libs-test.herokuapp.com/)

# Endpoints

# Auth

## POST /api/auth/register

#### Expected Payload

```
{
	"username": "John Doe",
	"password": "password123!"
}
```

#### Returns

```
{
  "username": "John Doe"
}
```

## POST /api/auth/login

#### Expected Payload

```
{
	"username": "John Doe",
	"password": "password123!"
}
```

#### Returns

```
{
  "userId": 1,
  "username": "John Doe",
  "token": "uyJhbGciOiJIUzI1NiIshnR5cCI6IkpXVCJ9.eyJzdWJqZWN0IjoxLCJ1c2VyrCsFtZSI6ImFkbWluIiwiaWF0IjoxNTcxNzEwMDA4LCJleHAiOjE1NzR4OTY0MDh9.vNfxryaHCkhsZ1I1jJHmH4iscWxV38FGvEyJEtKPBHI"
}
```

# devLIb

## GET /api/devLib

#### Returns

`All libs currently in the DB`

```
{
  "data": [
    {
      "id": 5,
      "lib": "another extremely good madlib",
      "user_id": 2,
      "category_id": 3
    },
    {
      "id": 6,
      "lib": "and one more",
      "user_id": 2,
      "category_id": 1
    },
    {
      "id": 7,
      "lib": "and one more",
      "user_id": 2,
      "category_id": 1
    },
    {
      "id": 3,
      "lib": "updated libo",
      "user_id": 2,
      "category_id": 2
    },
    {
      "id": 9,
      "lib": "and one more",
      "user_id": 2,
      "category_id": 1
    },
    {
      "id": 10,
      "lib": "and one more",
      "user_id": 2,
      "category_id": 1
    },
    {
      "id": 11,
      "lib": "This a test",
      "user_id": 1,
      "category_id": 3
    }
  ]
}
```

## POST /api/devLib

#### Expects

```
{
	"lib": "This a test",
	"user_id": 1,
	"category_id": 3
}
```

#### Returns

```
{
  "data": {
    "id": 11,
    "lib": "This a test",
    "user_id": 1,
    "category_id": 3
  }
}
```

## PUT /api/devLib

#### Expects 

```
{
	"id": 1,
	"lib": "This is the first post using postgres deployment...now edited",
	"user_id": 1,
	"category_id": 3
}
```

#### Returns

```
{
  "data": {
    "id": 1,
    "lib": "This is the first post using postgres deployment...now edited",
    "user_id": 1,
    "category_id": 3
  }
}
```

## DELETE api/devLib:id

#### Returns

```
{
  "data": {
    "id": 11,
    "lib": "This a test",
    "user_id": 1,
    "category_id": 3
  }
}
```