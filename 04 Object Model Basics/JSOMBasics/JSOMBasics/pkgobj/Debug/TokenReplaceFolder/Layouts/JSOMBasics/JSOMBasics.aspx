<%@ Assembly Name="JSOMBasics, Version=1.0.0.0, Culture=neutral, PublicKeyToken=7ceb14e612458997" %>
<%@ Import Namespace="Microsoft.SharePoint.ApplicationPages" %>
<%@ Register Tagprefix="SharePoint" Namespace="Microsoft.SharePoint.WebControls" Assembly="Microsoft.SharePoint, Version=15.0.0.0, Culture=neutral, PublicKeyToken=71e9bce111e9429c" %>
<%@ Register Tagprefix="Utilities" Namespace="Microsoft.SharePoint.Utilities" Assembly="Microsoft.SharePoint, Version=15.0.0.0, Culture=neutral, PublicKeyToken=71e9bce111e9429c" %>
<%@ Register Tagprefix="asp" Namespace="System.Web.UI" Assembly="System.Web.Extensions, Version=4.0.0.0, Culture=neutral, PublicKeyToken=31bf3856ad364e35" %>
<%@ Import Namespace="Microsoft.SharePoint" %>
<%@ Assembly Name="Microsoft.Web.CommandUI, Version=15.0.0.0, Culture=neutral, PublicKeyToken=71e9bce111e9429c" %>
<%@ Page Language="C#" AutoEventWireup="true" CodeBehind="JSOMBasics.aspx.cs" Inherits="JSOMBasics.Layouts.JSOMBasics.JSOMBasics" DynamicMasterPageFile="~masterurl/default.master" %>

<asp:Content ID="PageHead" ContentPlaceHolderID="PlaceHolderAdditionalPageHead" runat="server">
    <SharePoint:ScriptLink ID="jquery" Name="jquery-2.1.4.min.js" runat="server" >
    </SharePoint:ScriptLink>
     <SharePoint:ScriptLink ID="static" Name="JSOMBasics/JSOMBasics.aspx.js" Localizable="False" runat="server" >
    </SharePoint:ScriptLink>
    <SharePoint:ScriptLink ID="ondemand" Name="ondemand.js" runat="server" OnDemand="True">
    </SharePoint:ScriptLink>
</asp:Content>

<asp:Content ID="Main" ContentPlaceHolderID="PlaceHolderMain" runat="server">
    <div onclick="loadScript('ondemand.js')">Load Script</div>
    <div><a href="/_layouts/15/JSOMBasics/AutomaticScripts.aspx">Automatic Script Registration</a></div>
    <div><a href="/_layouts/15/JSOMBasics/Context.aspx">Using JSOM Client Context</a></div>
    <div><a href="/_layouts/15/JSOMBasics/SitesAndColletions.aspx">Manage Sites and Site Collections</a></div>
    <div><a href="/_layouts/15/JSOMBasics/ManageLists.aspx">Manage Lists</a></div>
    <div><a href="/_layouts/15/JSOMBasics/CRUD.aspx">CRUD</a></div>
    
</asp:Content>

<asp:Content ID="PageTitle" ContentPlaceHolderID="PlaceHolderPageTitle" runat="server">
JSOM Basics
</asp:Content>

<asp:Content ID="PageTitleInTitleArea" ContentPlaceHolderID="PlaceHolderPageTitleInTitleArea" runat="server" >
JSOM Basics
</asp:Content>
