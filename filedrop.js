// Write your package code here!

var state;
Template.filedrop.onCreated(function() {
    /* reactive var for state:
       null: no file anywhere in sight
       window: file is being dragged over window
       over: file is held over the drop zone
    */
    state = new ReactiveVar(null);
});

Template.registerHelper('filedrop_over', function() {
    return (state && state.get() == 'over');
});
Template.registerHelper('filedrop_window', function() {
    return (state && state.get() == 'window');
});

Template.filedrop.onRendered(function() {

    conf = this.data;

    var dropContainer = this.$('>').parent();
    var domNode = dropContainer.get(0);

    window.addEventListener("dragenter", function(event){
        state.set('window');
        return false;
    }, false);

    document.addEventListener("mouseout", function(event){
        state.set(null);
        event.stopPropagation();
        event.preventDefault();
        return false;
    }, false);

    domNode.addEventListener("dragenter", function(event){
        conf.onEnter && conf.onEnter(event);
        state.set('over');
    }, false);

    domNode.addEventListener("dragover", function(event){
        // this is important!
        event.stopPropagation();
        event.preventDefault();
        state.set('over');
        return false;
    }, false);

    domNode.addEventListener("dragexit", function(event){
        conf.onExit && conf.onExit(event);
        state.set('window');
        event.stopPropagation();
        event.preventDefault();
        return false;
    }, false);

    domNode.addEventListener("drop", function(event){
        event.stopPropagation();
        event.preventDefault();
        conf.onDrop && conf.onDrop(event.dataTransfer.files);
        state.set(null);
        return false;          
    }, false);
});
