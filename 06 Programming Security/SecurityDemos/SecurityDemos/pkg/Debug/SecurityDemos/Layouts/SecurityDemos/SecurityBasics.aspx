<%@ Assembly Name="SecurityDemos, Version=1.0.0.0, Culture=neutral, PublicKeyToken=4eca518e73efed2b" %>
<%@ Import Namespace="Microsoft.SharePoint.ApplicationPages" %>
<%@ Register Tagprefix="SharePoint" Namespace="Microsoft.SharePoint.WebControls" Assembly="Microsoft.SharePoint, Version=15.0.0.0, Culture=neutral, PublicKeyToken=71e9bce111e9429c" %>
<%@ Register Tagprefix="Utilities" Namespace="Microsoft.SharePoint.Utilities" Assembly="Microsoft.SharePoint, Version=15.0.0.0, Culture=neutral, PublicKeyToken=71e9bce111e9429c" %>
<%@ Register Tagprefix="asp" Namespace="System.Web.UI" Assembly="System.Web.Extensions, Version=4.0.0.0, Culture=neutral, PublicKeyToken=31bf3856ad364e35" %>
<%@ Import Namespace="Microsoft.SharePoint" %>
<%@ Assembly Name="Microsoft.Web.CommandUI, Version=15.0.0.0, Culture=neutral, PublicKeyToken=71e9bce111e9429c" %>
<%@ Page Language="C#" AutoEventWireup="true" CodeBehind="SecurityBasics.aspx.cs" Inherits="SecurityDemos.Layouts.SecurityDemos.SecurityBasics" DynamicMasterPageFile="~masterurl/default.master" %>

<asp:Content ID="PageHead" ContentPlaceHolderID="PlaceHolderAdditionalPageHead" runat="server">
    <SharePoint:ScriptLink ID="jquery" Name="SecurityDemos/jquery-2.1.4.min.js" runat="server" Localizable="False"/>
    <script type="text/javascript" src="/_layouts/15/sp.runtime.js"></script>
    <script type="text/javascript" src="/_layouts/15/sp.js"></script>    
    <script type="text/javascript" src="/_layouts/15/SP.UserProfiles.js"></script>
    <SharePoint:ScriptLink ID="SecurityBasicsSL" Name="SecurityDemos/SecurityBasics.aspx.js" Localizable="False" runat="server"/>
</asp:Content>

<asp:Content ID="Main" ContentPlaceHolderID="PlaceHolderMain" runat="server">
    
    <div><h3>Users & Groups</h3></div>
    <div onclick="listAllGroups()">List All Groups</div>
    <div onclick="createGroup()">Create Group</div>
    <div onclick="retrieveAllUsersInGroup()">Get Users in Group</div>
    <div onclick="retrieveAllUsersInSite()">Get Users in Site</div>
    <div onclick="retrieveUser()">Get a specific User</div>
    <div onclick="createUser()">Create User</div>    
    <div onclick="addUserToGroup()">Add User to SP Group</div>
    <br/> 
    <div><h3>Permissions</h3></div>
    <div onclick="createPermissionLevel()">Create Permission Level</div>    
    <div onclick="assignRoleToUser()">Assign Role to user</div>
    <div onclick="breakRoleInheritance()">Break Role Inheritance</div>
    <br/>
    <div><h3>User Profiles</h3></div>
    <div onclick="loadUserProfile()">Load User Profile</div>    
    <div onclick="followCurrentSite()">Following</div>
    <div onclick="publishPost()">Publish to Microsfeed</div>
    <div onclick="breakRoleInheritance()">One Drive</div>
</asp:Content>

<asp:Content ID="PageTitle" ContentPlaceHolderID="PlaceHolderPageTitle" runat="server">
Security Basics
</asp:Content>

<asp:Content ID="PageTitleInTitleArea" ContentPlaceHolderID="PlaceHolderPageTitleInTitleArea" runat="server" >
Security Basics
</asp:Content>
