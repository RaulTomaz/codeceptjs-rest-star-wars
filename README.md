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

To generate a report with Allure plugin, first you need to install the command line package globally:

```
npm install -g allure-commandline
```

Then, for running the tests with generation of allure report:

```
codeceptjs run --plugins allure
```
Finnaly, for visualizing the report, run:

```
allure serve output
```

This command will open the report in your default browser
