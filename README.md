## Building and running on localhost

Get some alias for the projects:
```sh
source ./profile
```

Install dependencies:

```sh
yarn
```

To run in hot module reloading mode:

```sh
yarn start
```

You can play around with the app at this point. Try changing some values and hit submit

To see the app fully translated, checkout `translation` branch and select `pirate` language from the dropdown

To play around with making translation change, start with `master`, make some changes, run `fe lingui extract`, refresh the page. You should the strings get translated when switching to `pirate`

