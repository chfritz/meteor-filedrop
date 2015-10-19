# FileDrop

An easy to use file drag & drop element. It attaches the necessary
event handlers to the *parent* of where it is used and provides global
helpers to design the behavior.

Install:
```
meteor add filedrop
```

## Example:

In your HTML:

```html
{{#filedrop dropHandlers}}
<div class="ui segment {{#if filedrop_over}} red {{else}} {{#if filedrop_window}} orange {{/if}} {{/if}}">
  
  {{#if filedrop_over}}
    Drop it, Drop it, Drop it!
  {{else}}
  {{#if filedrop_window}}
    Drop Files, please!
  {{else}}
    Drop Files      
  {{/if}}
  {{/if}}
</div>
{{/filedrop}}
```

To respond to events, most importantly of course the `onDrop` event, you need to specify a helper function that return an object containing the handler functions.

```javascript
Template.mytemplate.helpers({
    dropHandlers: function() {
        return {
            onEnter: function(event) {
                console.log("enter", event);
            },
            onDrop: function(files) {
                console.log("dropped", files);
            }
        };
    },
});
```

## License

MIT
