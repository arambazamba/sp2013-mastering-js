<%@ Assembly Name="JSOMBasics, Version=1.0.0.0, Culture=neutral, PublicKeyToken=7ceb14e612458997" %>
<%@ Import Namespace="Microsoft.SharePoint.ApplicationPages" %>
<%@ Register Tagprefix="SharePoint" Namespace="Microsoft.SharePoint.WebControls" Assembly="Microsoft.SharePoint, Version=15.0.0.0, Culture=neutral, PublicKeyToken=71e9bce111e9429c" %>
<%@ Register Tagprefix="Utilities" Namespace="Microsoft.SharePoint.Utilities" Assembly="Microsoft.SharePoint, Version=15.0.0.0, Culture=neutral, PublicKeyToken=71e9bce111e9429c" %>
<%@ Register Tagprefix="asp" Namespace="System.Web.UI" Assembly="System.Web.Extensions, Version=4.0.0.0, Culture=neutral, PublicKeyToken=31bf3856ad364e35" %>
<%@ Import Namespace="Microsoft.SharePoint" %>
<%@ Assembly Name="Microsoft.Web.CommandUI, Version=15.0.0.0, Culture=neutral, PublicKeyToken=71e9bce111e9429c" %>
<%@ Page Language="C#" AutoEventWireup="true" CodeBehind="SitesAndColletions.aspx.cs" Inherits="JSOMBasics.Layouts.JSOMBasics.SitesAndColletions" DynamicMasterPageFile="~masterurl/default.master" %>

<asp:Content ID="PageHead" ContentPlaceHolderID="PlaceHolderAdditionalPageHead" runat="server">
    <SharePoint:ScriptLink ID="jquery" Name="jquery-2.1.4.min.js" runat="server" >
    </SharePoint:ScriptLink>
    <script type="text/javascript" src="/_layouts/15/sp.runtime.js"></script>
    <script type="text/javascript" src="/_layouts/15/sp.js"></script>
    <SharePoint:ScriptLink ID="SiteNColletions" Name="JSOMBasics/SitesAndColletions.aspx.js" Localizable="False" runat="server" >
    </SharePoint:ScriptLink>

</asp:Content>

<asp:Content ID="Main" ContentPlaceHolderID="PlaceHolderMain" runat="server">
    <div onclick="getWebTemplates()">Get Web Templates</div>
    <div onclick="createWebsite()">Create Web</div>     
    <div onclick="ReadPropsOfWeb()">Read Props of Web</div>
    <div onclick="UpdateWebProps()">Update Web Props</div>
    <div onclick="writeToPropertyBag()">Write to Property Bag</div>         
    <div onclick="listWebs()">List Webs</div>
    <div onclick="deleteWeb()">Delete Web</div>
</asp:Content>

<asp:Content ID="PageTitle" ContentPlaceHolderID="PlaceHolderPageTitle" runat="server">
Manage Sites and Site Collections
</asp:Content>

<asp:Content ID="PageTitleInTitleArea" ContentPlaceHolderID="PlaceHolderPageTitleInTitleArea" runat="server" >
Manage Sites and Site Collections
</asp:Content>
