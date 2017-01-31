# angular-observer-pattern
Using the Observer pattern to show One-to-Many event notifier in action

The components `myOutput` and `toastNotifications` attach them selves to an event service, `eventNotify`, which notifies them each time a change is made. 

The method `eventNotify.attach()` is called from each object to attach itself to the `eventNotify.listeners` array.

Each time a new post is added or removed, `eventNotify.notify()` is called, this in turn calls the `update()` method of each of the objects inside it's `listeners` array, and passes in a `type` and an `obj`.

The `myOutput` and `toastNotifications` components each have their `update()` methods set to accept these arguments.
The `type` determines which alert is going to show as a toast notification. It also determines whether the data should be displayed as a new post in `myOutput`, the data coming from `obj.title` and `obj.message`

![example of form](https://cloud.githubusercontent.com/assets/2794355/22409142/4006a2b6-e67d-11e6-9e02-83cfe9f8ea85.PNG)
