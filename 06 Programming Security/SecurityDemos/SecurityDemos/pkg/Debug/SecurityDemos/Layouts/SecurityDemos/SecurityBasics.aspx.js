

//Groups

function createGroup() {
    var cc = new SP.ClientContext();
    var web = cc.get_web();
    var siteGroups = web.get_siteGroups();

    var gci = new SP.GroupCreationInformation();
    gci.set_title("MyJSOMGrp");
    gci.set_description('This is a new group created by JSOM!');
    var grp = siteGroups.add(gci);
    cc.load(siteGroups);
    cc.executeQueryAsync(function () {
        console.log("Web contains the following groups:");
        for (var i = 0; i < siteGroups.get_count() ; i++) {
            console.log(siteGroups.itemAt(i).get_title());
        }
    }, logError);
}

function listAllGroups() {
    var cc = new SP.ClientContext();
    var siteGrps = cc.get_web().get_siteGroups();
    cc.load(siteGrps);
    cc.executeQueryAsync(function() {
        var grpEnumerator = siteGrps.getEnumerator();
        while (grpEnumerator.moveNext()) {
            var grp = grpEnumerator.get_current();
            console.log('User: ' + grp.get_title() + ' ID: ' + grp.get_id());
        }        
    }, logError);
}

function retrieveAllUsersInGroup() {
    
    var cc = new SP.ClientContext();
    var siteGrps = cc.get_web().get_siteGroups();
    var grp = siteGrps.getById(7);
    this.usrs = grp.get_users();
    cc.load(usrs);
    cc.executeQueryAsync(function() {
        var userEnumerator = usrs.getEnumerator();
        while (userEnumerator.moveNext()) {
            var usr = userEnumerator.get_current();
            console.log('User: ' + usr.get_title() + ' ID: ' + usr.get_id() + ' Email: ' + usr.get_email() + ' Login Name: ' + usr.get_loginName());
        }        
    }, logError);
}

//User

function addUserToGroup() {
    var cc = new SP.ClientContext(siteUrl);
    var grps = cc.get_web().get_siteGroups();
    var oGroup = grps.getById(7);
    var uci = new SP.UserCreationInformation();
    uci.set_email('alias@somewhere.com');
    uci.set_loginName('DOMAIN\alias');
    uci.set_title('John');
    this.usr = oGroup.get_users().add(uci);

    cc.load(usr);
    cc.executeQueryAsync(function() {
        console.log("user created");
    }, logError);

}

function createUser() {
    var cc = new SP.ClientContext();
    var siteUsers = cc.get_web().get_siteUsers();
    var uci = new SP.UserCreationInformation();
    uci.set_email('donald.duck@integrations.at');
    uci.set_loginName('SPDOM\donald.duck');
    uci.set_title('Donald');
    var x = siteUsers.addUser(uci);
    cc.load(x);
    cc.executeQueryAsync(function() {
            console.log("user created");
        },
        logError);
}

function retrieveAllUsersInSite() {

    var cc = new SP.ClientContext();
    var siteUsers = cc.get_web().get_siteUsers();
    cc.load(siteUsers);
    cc.executeQueryAsync(function () {
        var userEnumerator = siteUsers.getEnumerator();
        while (userEnumerator.moveNext()) {
            var usr = userEnumerator.get_current();
            console.log('User: ' + usr.get_title() + ' ID: ' + usr.get_id() + ' Email: ' + usr.get_email() + ' Login Name: ' + usr.get_loginName());
        }        
    }, logError);
}


function retrieveUser() {

    var cc = new SP.ClientContext();
    var user = cc.get_web().get_siteUsers().getById(3);
    cc.load(user);
    cc.executeQueryAsync(function () {        
        console.log('User: ' + user.get_title() + ' ID: ' + user.get_id() + ' Email: ' + user.get_email() + ' Login Name: ' + user.get_loginName());
    }, logError);
}

//Permissions

function createPermissionLevel() {
    var cc = new SP.ClientContext(siteUrl);
    var web = cc.get_web();
    var basePerm = new SP.BasePermissions();
    basePerm.set(SP.PermissionKind.createAlerts);
    basePerm.set(SP.PermissionKind.manageAlerts);
    var roleCreationInfo = new SP.RoleDefinitionCreationInformation();
    roleCreationInfo.set_basePermissions(basePerm);
    roleCreationInfo.set_description('A new role with create and manage alerts permission');
    roleCreationInfo.set_name('Create and Manage AlertsT');
    roleCreationInfo.set_order(4);
    var permissionLevel = web.get_roleDefinitions().add(roleCreationInfo);
    cc.load(permissionLevel);
    cc.executeQueryAsync(function() {
        var pl = permissionLevel.get_name() + ' role created.';
        alert(pl);
    }, logError);
}

function assignRoleToUser() {
    var cc = new SP.ClientContext(siteUrl);
    var web = cc.get_web();

    var usr = web.get_siteUsers().getByLoginName('spdom\\administrator');
    var basePerm = web.get_roleDefinitions().getByName('Create and Manage Alerts');

    var roleDefsBindings = SP.RoleDefinitionBindingCollection.newObject(cc);
    roleDefsBindings.add(basePerm);
    var pl = web.get_roleAssignments().add(usr, roleDefsBindings);
    cc.load(usr, 'Title');
    cc.load(basePerm, 'Name');

    cc.executeQueryAsync(function() {
        var roleInfo = usr.get_title() + ' assigned to ' + pl.get_name();
        console.log(roleInfo);
    }, logError);
}

function breakRoleInheritance() {
    var cc = new SP.ClientContext(siteUrl);
    var list = cc.get_web().get_lists().getByTitle('Announcements');
    list.breakRoleInheritance(true, false);
    cc.load(list);
    cc.executeQueryAsync(function() {
        console.log(list.get_title() + ' role inheritance broken.');
    }, logError);
}

function breakInheritanceAddUser() {
    var cc = new SP.ClientContext(siteUrl);
    var list = cc.get_web().get_lists().getByTitle('MyList');
    var itemId = 4;
    var li = list.get_items().getById(itemId);
    li.breakRoleInheritance(false);
    var usr = cc.get_web().get_siteUsers().getByLoginName('spdom\\administrator');
    var rdlbs = SP.RoleDefinitionBindingCollection.newObject(cc);
    rdlbs.add(cc.get_web().get_roleDefinitions().getByType(SP.RoleType.reader));
    li.get_roleAssignments().add(usr, rdlbs);
    cc.load(usr);
    cc.load(li);
    cc.executeQueryAsync(function() {
        console.log('Role inheritance broken for item ' + li.get_item('Title') + ' and new role assignment for ' + usr.get_loginName());
    }, logError);    
}

function loadUserProfile() {
    
    var targetUser = "spdom\\administrator";
    var clientContext = new SP.ClientContext.get_current();
    var peopleManager = new SP.UserProfiles.PeopleManager(clientContext);
    var personProperties = peopleManager.getPropertiesFor(targetUser);
    clientContext.load(personProperties);
    clientContext.executeQueryAsync(function() {
        var messageText = " \"DisplayName\" property is " + personProperties.get_displayName();
        messageText += "<br />\"Department\" property is " + personProperties.get_userProfileProperties()['Department'];
        console.log(messageText);
    }, logError);
}

function followCurrentSite() {
    var siteUrl = _spPageContextInfo.siteAbsoluteUrl;
    var context = SP.ClientContext.get_current();
    var socialManager = new SP.Social.SocialFollowingManager(context);
    var socialSite = new SP.Social.SocialActorInfo();
    socialSite.set_contentUri(siteUrl);
    socialSite.set_actorType(SP.Social.SocialActorType.site);
    socialManager.follow(socialSite);

    context.executeQueryAsync(
        function () { console.log('Now following the current site!'); },
        function (sender, args) { console.log('Error: ' + args.get_message()); });
}

function publishPost() {
    var clientContext = SP.ClientContext.get_current();
    var feedManager = new SP.Social.SocialFeedManager(clientContext);

    var linkDataItem = new SP.Social.SocialDataItem();
    linkDataItem.set_itemType(SP.Social.SocialDataItemType.link);
    linkDataItem.set_text('ETC');
    linkDataItem.set_uri('http://www.etc.at');
    var socialDataItems = [linkDataItem];

    var postCreationData = new SP.Social.SocialPostCreationData();
    postCreationData.set_contentText('Learn SharePoint Client side dev @ {0}.');
    postCreationData.set_contentItems(socialDataItems);

    var resultThread = feedManager.createPost(null, postCreationData);
    clientContext.executeQueryAsync(function() {
        console.log("posted to sharepoint");
    }, logError);
}

function logError(msg) {
    console.log(msg);
}