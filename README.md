# Konami Code jQuery Plug-in
A stupid jquery plug-in to trigger an event when the konami code is entered

## Usage

```js
$.konami();
```

That's pretty much it. The plugin triggers an event on `document` when the code is entered. Just attach an event handler for a `konami` event.

```js
$(document).on('konami', function () { 
    // Code to execute
});
```