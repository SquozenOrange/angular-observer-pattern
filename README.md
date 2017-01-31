# angular-observer-pattern
Using the Observer pattern to show One-to-Many event notifier in action

# Basic Explanation

When a post is made using the input form, the data will show as a new panel in `myOutput` which is seperate component. A "Toast" notification will also show on screen for 5 seconds informing you that a new post has been made. This is mirrored when a post is removed; the Toast notification will display the fact that a post has been removed and state it's Title. All of this is handled by the same service, `eventNotify`

# Breakdown

The components `myOutput` and `toastNotifications` attach them selves to an event service, `eventNotify`, which notifies them each time a change is made. 

The method `eventNotify.attach()` is called from each object to attach itself to the `eventNotify.listeners` array.

Each time a new post is added or removed, `eventNotify.notify()` is called, this in turn calls the `update()` method of each of the objects inside it's `listeners` array, and passes in a `type` and an `obj`.

The `myOutput` and `toastNotifications` components each have their `update()` methods set to accept these arguments.
The `type` determines which style of alert is going to show as a toast notification. It also determines whether the data should be displayed as a new post in `myOutput`, the data coming from `obj.title` and `obj.message`

# Screenshots

![post_new_item_example](https://cloud.githubusercontent.com/assets/2794355/22462192/39907326-e7a4-11e6-9fd7-d85828bb5ed9.png)
