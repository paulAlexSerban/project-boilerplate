# ./app

- this directory holds the application files
- is is usually lined to one or multiple git repos

## Structure

### `./ui-ux` (Presentation layer)

- contains the components that implement and display the user interface and manage user interaction

  #### `./components`

    - the application's visual elements used to display information to the user and accept user input

  ##### `./views`

  ##### `./models`

  ##### `./controllers`

  #### `./build`

    - Front-end build tools and configuration

### `./core` (Business layer)

- Abstracts the schema, defines object-specific functionality, and handles housekeeping such as audit
- contains rules that determine the behavior of the whole application
  #### `./facade`
- optional component
- typically provides a simplified interface to the business logic components, often by combining multiple business operations into a single operation that makes it easier to use the business logic
- reduces dependencies because external callers do not need to know details of the business components and the relationships between them.

  #### `./components`

- is defined as any application logic that is concerned with the retrieval, processing, transformation, and management of application data
- application of business rules and policies
- ensures data consistency and validity
- to maximize reuse opportunities, business logic components should not contain any behavior or application logic that is specific to a use case or user story.

  ##### `./workflow`

  - define and coordinate long running, multi-step business processes, and can be implemented using business process management tools;

  ##### `./entity`

  - encapsulate the business logic and data necessary to represent real world elements, such as Customers or Orders, within your application;
  - store data values and expose them through properties;
  - contain and manage business data used by the application;
  - provide stateful programmatic access to the business data and related functionality.
  - validate the data contained within the entity and encapsulate business logic to ensure consistency and to implement business rules and behavior

### `./apis` (Services layer)

- Ensures consistent functionality no matter how you access the app (UI, mobile, integration, etc.)
  - Centralizes external access to data and functions
  - Hides (abstracts) internal implementation and changes
  - Allows for versioning of the services
- Serves as a middle layer between the business logic layer and the presentation layer
- If the application needs to interchange data with another application, then serve as a gateway for communication between the 2.
  > All three are critical, because services are forever. Once they are published, you can’t control who uses them, and changes will break something somewhere.

Example: an engineer originally coded events without storing a time zone. Later, we realized we wanted to display those events in the user’s time zone, which meant we needed to expose that to the users.

Because we had a good service layer, we were able to change the event object and underlying schema but have the APIs still show the old way because the API endpoint was abstracted from the object by a service layer. We were also able to put out a new version of the API endpoint so that the users of the API could decide if and when they wanted to leverage that new data. Without a service layer (for example, if others could have queried the data directly), there would have been a very high chance of other systems breaking.

Many startups don’t have these layers from day one, as they take precious time to build, time which might be better spent ensuring market fit and making customers successful. But somewhere around fifty customers, not having service layers starts to get more and more expensive in terms of development effort and regressions.

### `./models` (Persistance layer or Functionality Layer)

- abstracts the data stores and may also enforce visibility rules;
- presents the functions, methods, and procedures of the system based on the business rules layer;
- determines how the pull-down menus work, how the buttons work, and how the system navigates through screens;
- the persistence layer consists of classes and components which are responsible for saving and retrieving application data.
- This layer also defines a mapping between the model class and the database

### `./database`

- contains the tables, indexes, and data managed by the application
- searches and insert/delete/update operations are executed here

## Resources

- [Microsoft Application Architecture Guide, 2nd Edition](<https://docs.microsoft.com/en-us/previous-versions/msp-n-p/ff650706(v=pandp.10)>))
