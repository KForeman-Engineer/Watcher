
>[!info]
>Welcome to Watcher API Documentation before we begin please look at the Folder #structure to understand the placement of files and folders


## Folder structure
#structure
Watcher is built using a feature-based folder structure meaning that each resource we have such as satellites or users is a #feature and there related code is isolated to there respective folder an example is below.

#### V1 Folder structure
```
Watcher/
docs/
	api-design.md --> this file
	README.md --> entrypoint documentation
src/
 config/
 features/
  satellite/ --> feature name
     satelliteroute.rs
     satellitecontroller.rs
   user/
   shared/
```

### Why?
We picked this because it suited our design alot as i wanted a structure that could keep related code together instead of separating routes into a dedicated route folder. And this structure is useful for our project as in scale as we add more there is less moving around to do later on between folders.

