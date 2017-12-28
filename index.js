var App = {
    contacts: [],
    addContact: function(contactObject) {
        this.contacts.push(contactObject);
    },
    deleteContact: function(position) {
        this.contacts.splice(position, 1);
    },
    changeContact: function(position, contact) {
        this.contacts[position] = contact;
    }
};



var view = {
    init: function() {
        var source = document.getElementById("contact-template").innerHTML;
        this.contactTemplate = Handlebars.compile(source);
    },
    displayContacts: function() {
        var $container = $("#js-contact-list");
        var html = App.contacts.map(function(contact) {
            return this.contactTemplate(contact);
        }, this).join('');
        $container.html(html);
    }
};

App.addContact({name: 'james', email: 'mail@mail.com'});
App.addContact({name: 'loki', email: 'mail@mail.com', bio: "This's a bio of great Loki"});
App.addContact({name: 'lily'});
view.init();
view.displayContacts();
