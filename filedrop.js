
Template.filedrop.onCreated(function() {
    /* reactive var for state:
       null: no file anywhere in sight
       window: file is being dragged over window
       over: file is held over the drop zone
    */
    this.state = new ReactiveVar(null);
});

Template.filedrop.helpers({
    'all': function() {
        // We need to manualy hand our desired helpers down to our children.
        // A usual, we are giving "all" to our children :-) (see template)
        return _.extend(Template.instance(), {
            'filedrop_over': function() {
                return (this.state && this.state.get() == 'over');    
            },
            'filedrop_window': function() {
                return (this.state && this.state.get() == 'window');    
            },
            state: Template.instance().state
        });
    }
});

Template.filedrop.onRendered(function() {

    var conf = this.data;
    var self = this;
    var dropContainer = this.$('>');
    var domNode = dropContainer.get(0);

    window.addEventListener("dragenter", function(event){
        self.state.set('window');
        return false;
    }, false);

    document.addEventListener("mouseout", function(event){
        self.state.set(null);
        event.stopPropagation();
        event.preventDefault();
        return false;
    }, false);

    domNode.addEventListener("dragenter", function(event){
        conf.onEnter && conf.onEnter(event);
        self.state.set('over');
    }, false);

    domNode.addEventListener("dragover", function(event){
        // self is important!
        event.stopPropagation();
        event.preventDefault();
        self.state.set('over');
        return false;
    }, false);

    domNode.addEventListener("dragexit", function(event){
        conf.onExit && conf.onExit(event);
        self.state.set('window');
        event.stopPropagation();
        event.preventDefault();
        return false;
    }, false);

    domNode.addEventListener("drop", function(event){
        event.stopPropagation();
        event.preventDefault();
        conf.onDrop && conf.onDrop(event.dataTransfer.files);
        self.state.set(null);
        return false;          
    }, false);
});
