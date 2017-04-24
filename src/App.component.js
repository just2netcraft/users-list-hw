class AppComponent {

    appendUserPage(id){
        let userPage = new UserPageComponent(id);
        this.element.append( userPage.render() );
    }

    getUsersList() {
        userService
            .getAllUsers()
            .then( this.appendUsersList.bind(this) );
    }

    appendUsersList(list){
        let usersList = new UsersListComponent(list);
        usersList.onUserSelected( this.appendUserPage.bind(this) );
        this.element.append( usersList.render() );
    }

    render(){
        this.element = $(`<div></div>`);
        this.getUsersList();
        return this.element;
    }
}

function createApp(){
    let app = new AppComponent();
    $(document.body).append( app.render() );
}