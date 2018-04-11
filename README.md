# User Management System
This is a small user and groups management system.
Relies on ReactJS & Redux. 


## Usage
### Instalation
Install all the dependencies running the following command
` npm install `

## Expected API
* 	`/users`

This endpoind expects a JSON array of objects
and returns a list of users and the groups the user has assigned

#### Example of JSON structure expected
```
[{
  name: 'Karen',
  groups: [{id:1},{id:2}]
}, {
  name: 'Andres',
  groups: [{id:1},{id:2}]
}]
```




* `/groups`  

This endpoind expects a JSON array of objects
and returns a list of groups

#### Example of JSON structure expected
```
[
	{id:1, name:'Administrator'},
	{id:2, name:'Developer'}
]
```



## Getting Started
To start the aplication run

`npm run start`

To test the aplication run
`npm run test`

For dev enviornment

`npm run dev`







