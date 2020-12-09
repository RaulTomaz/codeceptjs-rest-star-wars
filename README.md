# codeceptjs - api automation using javascript

API automation - basic structure using CodeceptJS

To Run the tests, you must do the following:

- Install codeceptjs globally by putting in the command line:

```
npm install -g codeceptjs
```

- Run the command:

```
codeceptjs run
```

# Run with Allure Report plugin

To generate a report with Allure plugin, run the following command:

```
codeceptjs run --plugins allure
```
Then, for visualizing the report, run:

```
allure serve output
```

This command will open the report in your default browser
