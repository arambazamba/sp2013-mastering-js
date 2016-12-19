<%@ Assembly Name="$SharePoint.Project.AssemblyFullName$" %>
<%@ Import Namespace="Microsoft.SharePoint.ApplicationPages" %>
<%@ Register Tagprefix="SharePoint" Namespace="Microsoft.SharePoint.WebControls" Assembly="Microsoft.SharePoint, Version=15.0.0.0, Culture=neutral, PublicKeyToken=71e9bce111e9429c" %>
<%@ Register Tagprefix="Utilities" Namespace="Microsoft.SharePoint.Utilities" Assembly="Microsoft.SharePoint, Version=15.0.0.0, Culture=neutral, PublicKeyToken=71e9bce111e9429c" %>
<%@ Register Tagprefix="asp" Namespace="System.Web.UI" Assembly="System.Web.Extensions, Version=4.0.0.0, Culture=neutral, PublicKeyToken=31bf3856ad364e35" %>
<%@ Import Namespace="Microsoft.SharePoint" %>
<%@ Assembly Name="Microsoft.Web.CommandUI, Version=15.0.0.0, Culture=neutral, PublicKeyToken=71e9bce111e9429c" %>
<%@ Page Language="C#" AutoEventWireup="true" CodeBehind="Demos.aspx.cs" Inherits="SharePoint_TypeScript.Layouts.TypeScript.Demos" DynamicMasterPageFile="~masterurl/default.master" %>

<asp:Content ID="PageHead" ContentPlaceHolderID="PlaceHolderAdditionalPageHead" runat="server">
    <script src="lib/jquery/jquery.min.js"></script>
    <script src="demos.aspx.js"></script>
    <script src="demos/types.js"></script>
    <SharePoint:CssRegistration runat="server" ID="CssRegistration1" Name="/_layouts/15/JSFundamentals/css/demo.css" After="corev15.css"/>  
</asp:Content>

<asp:Content ID="Main" ContentPlaceHolderID="PlaceHolderMain" runat="server">
     <div id="wrapper">
            <div class="demoMenu">
            <div id="status">Please choose:</div>
            <a href="#" onclick="javascript:loadPage('demos/types.html', this, true);">Types & Arrays</a>            
            <a href="#" onclick="javascript:loadPage('demos/Classes.html', this, true);">Classes</a>
            <a href="#" onclick="javascript:loadPage('demos/functions.html', this, true);">Functions</a>
            <a href="#" onclick="javascript:loadPage('demos/interfaces.html', this, true);">Interfaces</a>
            <a href="#" onclick="javascript:loadPage('demos/modules.html', this, true);">Modules & Namespaces</a>
            <a href="#" onclick="javascript:loadPage('demos/generics.html', this, true);">Generics</a>                             
            <a href="#" onclick="javascript:loadPage('demos/Service.html', this, true);">Consuming Services</a>
        </div>
        <div class="workbench"></div>

        </div>    
</asp:Content>

<asp:Content ID="PageTitle" ContentPlaceHolderID="PlaceHolderPageTitle" runat="server">
TypeScript - Demos
</asp:Content>

<asp:Content ID="PageTitleInTitleArea" ContentPlaceHolderID="PlaceHolderPageTitleInTitleArea" runat="server" >
TypeScript - Demos
</asp:Content>
