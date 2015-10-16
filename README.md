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

```
<div class="dropzone">
  {{> filedrop dropHandlers}}
  
  {{#if filedrop_over}}
  <div class="ui segment red">
    Drop it, Drop it, Drop it!
  </div>
  {{else}}
  {{#if filedrop_window}}
  <div class="ui segment orange">
    Drop Files, please!
  </div>
  {{else}}
  <div class="ui segment">
    Drop Files      
  </div>
  {{/if}}
  {{/if}}
</div>
```

To respond to events, most importantly of course the `onDrop` event, you need to specify a helper function that return an object containing the handler functions.

```
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
