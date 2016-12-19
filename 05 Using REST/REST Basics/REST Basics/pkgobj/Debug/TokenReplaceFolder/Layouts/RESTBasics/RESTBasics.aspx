<%@ Assembly Name="REST Basics, Version=1.0.0.0, Culture=neutral, PublicKeyToken=2baaad0bf66cfa29" %>
<%@ Import Namespace="Microsoft.SharePoint.ApplicationPages" %>
<%@ Register Tagprefix="SharePoint" Namespace="Microsoft.SharePoint.WebControls" Assembly="Microsoft.SharePoint, Version=15.0.0.0, Culture=neutral, PublicKeyToken=71e9bce111e9429c" %>
<%@ Register Tagprefix="Utilities" Namespace="Microsoft.SharePoint.Utilities" Assembly="Microsoft.SharePoint, Version=15.0.0.0, Culture=neutral, PublicKeyToken=71e9bce111e9429c" %>
<%@ Register Tagprefix="asp" Namespace="System.Web.UI" Assembly="System.Web.Extensions, Version=4.0.0.0, Culture=neutral, PublicKeyToken=31bf3856ad364e35" %>
<%@ Import Namespace="Microsoft.SharePoint" %>
<%@ Assembly Name="Microsoft.Web.CommandUI, Version=15.0.0.0, Culture=neutral, PublicKeyToken=71e9bce111e9429c" %>
<%@ Page Language="C#" AutoEventWireup="true" CodeBehind="RESTBasics.aspx.cs" Inherits="REST_Basics.Layouts.REST_Basics.RESTBasics" DynamicMasterPageFile="~masterurl/default.master" %>

<asp:Content ID="PageHead" ContentPlaceHolderID="PlaceHolderAdditionalPageHead" runat="server">
    <SharePoint:ScriptLink ID="jquery" Name="RESTBasics/jquery-2.1.4.min.js" runat="server" Localizable="False"/>
    <SharePoint:ScriptLink ID="RESTBasicsSL" Name="RESTBasics/RESTBasics.aspx.js" Localizable="False" runat="server"/>

</asp:Content>

<asp:Content ID="Main" ContentPlaceHolderID="PlaceHolderMain" runat="server">
            <div onclick="doExpanding()">Expanding</div>
            <div onclick="createList()">Create List</div>
            <div onclick="updateList()">Update List</div>
            <div onclick="addField()">Add Field</div>
            <div onclick="addListItem()">Add List Item</div>
            <div onclick="getItems()">Get Items</div>
            <div onclick="updateListItem()">Update List Item</div>
            <div onclick="deleteList()">Delete List</div>    
            <div onclick="createSite()">Create Site</div>
</asp:Content>

<asp:Content ID="PageTitle" ContentPlaceHolderID="PlaceHolderPageTitle" runat="server">
REST Bascics
</asp:Content>

<asp:Content ID="PageTitleInTitleArea" ContentPlaceHolderID="PlaceHolderPageTitleInTitleArea" runat="server" >
REST Bascics
</asp:Content>
