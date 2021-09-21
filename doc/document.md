# Sun-glasses

## Future

### Create Profile `createProfile`

save profile and data in sunglasses

#### Example

/api/createProfile?username=njfamirm&email=njfamirm@gmail.com&github=njfamirm&twitter=njfamirm

#### Username `require`

unique user name

<!-- if not unique returned error code -->

#### Email `require`

valid and unique email

<!-- if not valid returned error code -->
<!-- if not unique returned error code -->

#### Github `require`

github user name

<!-- if not valid returned error code -->
<!-- if not unique returned error code -->

#### Twitter `require`

twitter user name

<!-- if not valid returned error code -->
<!-- if not unique returned error code -->

### Get Profile `getProfile`

get sunglasses user data

#### Example

/api/getProfile?username=njfamirm&email

#### username `require`

sunglasses user name
